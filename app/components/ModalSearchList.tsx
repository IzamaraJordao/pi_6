import {Carrocel} from "@/type/interface";

export function ModalSearchList({film, onClose: onClose}: { film: any, onClose: () => void }) {
    const handleClose = () => {
        onClose();
    };
    return (
        <dialog id="my_modal_2" className="modal" open>
            <div className="modal-box">
                <div className="overflow-x-auto w-full">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Capa</th>
                            <th className={"text-center w-50"}>Nome</th>
                            <th className={"text-center w-40"}
                            >Ano
                            </th>
                            <th>Detalhes</th>
                        </tr>
                        </thead>
                        <tbody>

                        {film.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                                         alt="Avatar Tailwind CSS Component"/>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td className={"text-center w-20"}>
                                        {item.release_date}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            <div className="modal-action  bottom-4">
                <button type="button" onClick={handleClose} className="btn btn-error">close</button>
            </div>
            </div>
        </dialog>
    );
}