import {Carrocel} from "@/type/interface";

export function Modal({film, onClose: onClose}: { film: Carrocel, onClose: () => void }) {
    const handleClose = () => {
        onClose();
    };
    return (
        <dialog id="my_modal_2" className="modal" open>
            <div className="modal-box">

                <img src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} className="rounded-box"/>
                <h2 className="font-bold text-2xl">{film.title}</h2>
                <p className="py-4">{film.overview}</p>
                    <button type="button" onClick={handleClose} className="btn btn-error">close</button>
            </div>
        </dialog>
    );
}