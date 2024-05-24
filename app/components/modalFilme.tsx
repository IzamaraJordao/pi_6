'use client'
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'

export default function ModalFilme({onClose}: { onClose: () => void }) {
    const router = useRouter();
    const [categoria, setCategoria] = useState([])

    const validationSchema = Yup.object({
        // email: Yup.string().email('Invalid email address').required('Required'),
        // password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
    });

    useEffect(() => {
        const dialog = document.getElementById('my_modal_4');
        // @ts-ignore
        dialog.showModal();
        // @ts-ignore
        dialog.addEventListener('close', onClose);
        getCateg().then()

    }, [onClose]);


    const handleSubmit = async (values: any) => {
        console.log(values)
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: values.title,
                originalLanguage: values.originalLanguage,
                releaseDate: values.releaseDate + ':00' + 'Z',
                productionCompanies: values.productionCompany,
                overview: values.overview,
                genreId: values.genre,
                statusId: values.status,
                runtime: Number(values.runtime),
                image: values.coverImage,
                popularity: 0,
                voteAverage: 0,
                voteCount: 0,
                notification: true

            }),
        })
        const data = await response.json()
        console.log(data)
        // if (data.error) {
        //     await Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Something went wrong!',
        //     })
        // } else {
        //     await Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: "Salvo!",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     onClose()
        // }
    }
    const save = async (values: any) => {
        console.log(values)
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
        const data = await response.json()
        console.log(data)
    }

    const initialValues: any = {
        title: '',
        originalLanguage: '',
        releaseDate: '',
        productionCompany: '',
        genre: '',
        status: '',
        runtime: 0,
        coverImage: '',
        overview: '',
    };


    async function getCateg() {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/genre', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
        setCategoria(data)
    }

    return (
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-3xl">
                <div className="flex flex-row justify-center">
                    <h1 className="text-2xl font-bold">Cadastrar Filme</h1>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <div className="overflow-x-auto flex flex-row mt-8">
                                <div className="w-1/2 flex flex-col justify-start items-center">

                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">*Titulo do filme</span>
                                        </div>
                                        <Field
                                            name="title"
                                            type="text" placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"/>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Linguagem original</span>
                                        </div>
                                        <Field
                                            name="originalLanguage"
                                            component="select"
                                            title="select" className="select select-bordered w-full max-w-xs">
                                            <option>Selecionar</option>
                                            <option>Português</option>
                                            <option>Inglês</option>
                                            <option>Espanhol</option>
                                        </Field>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Data de lançamento</span>
                                        </div>
                                        <Field
                                            name="releaseDate"
                                            type="datetime-local" placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"/>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">*Empresa de produção</span>
                                        </div>
                                        <Field
                                            name="productionCompany"
                                            type="text" placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"/>
                                    </label>


                                </div>
                                <div className="w-1/2 flex flex-col justify-start items-center">
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Genero</span>
                                        </div>
                                        <Field
                                            name="genre"
                                            component="select"
                                            title="select" className="select select-bordered w-full max-w-xs">
                                            <option>Selecionar</option>
                                            {
                                                categoria.map((cat: any) => (
                                                    <option key={cat.id} value={cat.id}>{cat.genre}</option>
                                                ))
                                            }
                                        </Field>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Status</span>
                                        </div>
                                        <Field
                                            name="status"
                                            component="select"
                                            title="select" className="select select-bordered w-full max-w-xs">
                                            <option>Selecionar</option>
                                            <option>Ativo</option>
                                            <option>Inativo</option>
                                        </Field>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Tempo de execução</span>
                                        </div>
                                        <Field
                                            name="runtime"
                                            type="number" placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"/>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">*Imagem da Capa</span>
                                        </div>
                                        <Field
                                            name="coverImage"
                                            type="text" placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"/>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Sinopse</span>
                                        </div>
                                        <Field
                                            name="overview"
                                            component="textarea"
                                            className="textarea textarea-bordered h-24"
                                            placeholder="Bio"/>

                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center ">
                                <button className="btn btn-wide mt-8 mr-2 bg-yellow-400 text-black"
                                        type="submit">Save
                                </button>
                                <button
                                    className="btn btn-wide mt-8 ml-2 bg-yellow-400 text-black"
                                    onClick={onClose}>Fechar
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>
        </dialog>
    );
}
