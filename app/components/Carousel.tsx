import {useEffect, useState} from "react";
import {Carrocel} from "@/type/interface";
import {Modal} from "@/app/components/ModalCarrocel";

export default function Carousel() {
    const [film, setFilm] = useState([])
    const [selectedFilm, setSelectedFilm] = useState<Carrocel | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    async function getFilm() {
        const response = await fetch(process.env.NEXT_PUBLIC_API_MOVIE + '/popular', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_API_MOVIE_TOKEN
            },

        })
        const data = await response.json()
        setFilm(data.results)
    }

    function handleImageClick(film: Carrocel) {
        setSelectedFilm(film);
    }

    function closeModal() {
        setSelectedFilm(null);
    }

    useEffect(() => {
        getFilm().then()
    }, [])

    return (
        <>
            <div className="carousel carousel-center w-84 h-40 p-4 space-x-4 bg-neutral rounded-box">

                {film.map((item: any, index) => {
                    return (
                        <div key={index} className="carousel-item cursor-pointer"
                             onClick={() => handleImageClick(item)}>
                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                 className="rounded-box"/>
                        </div>
                    )})
                }

                {selectedFilm && (
                    <Modal film={selectedFilm} onClose={closeModal} />
                )}
            </div>
        </>
    );
}

