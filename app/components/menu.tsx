import {useRouter} from "next/navigation";
import {useState} from "react";
import {ModalSearchList} from "@/app/components/ModalSearchList";

export default function Menu(props: { text: string }) {
    const router = useRouter()
    const [searchFilm, setSearchFilm] = useState('')
    const [film, setFilm] = useState([])


    function redirectToDash() {
        router.push('/dashboard');
    }

    async function searchMovie() {
        const response = await fetch(process.env.NEXT_PUBLIC_API_MOVIE_SEARCH + '/movie?query=' + searchFilm, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_API_MOVIE_TOKEN
            },
        })
        const data = await response.json()
        setFilm(data.results)
        // console.log(data)
    }

    function closeModal() {
        setFilm([])
    }

    return <>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h7"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl" onClick={redirectToDash}>Indica Filme</a>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <input type="text" placeholder="Nome do filme" className="input input-bordered w-24 md:w-auto"
                           value={searchFilm} onChange={(e) => setSearchFilm(e.target.value)}
                           onKeyUpCapture={(e) => {
                               if (e.key === 'Enter') {
                                   searchMovie().then()
                               }
                           }
                           }
                    />
                </div>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
        {film.length > 0 && (
            <ModalSearchList film={film} onClose={closeModal}/>
        )}
    </>;
}