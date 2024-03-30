import {useState} from "react";

export default function Carousel() {
    const [film, setFilm] = useState([])

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
        console.log(data)
    }

    getFilm().then()
    return (
        <>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">

                {film.map((item: any, index) => {
                    return (
                        <div key={index} className="carousel-item">
                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                 className="rounded-box"/>
                        </div>
                    )
                    })
                }

                {/*<div className="carousel-item">*/}
                {/*    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"*/}
                {/*         className="rounded-box"/>*/}
                {/*</div>*/}
                {/*<div className="carousel-item">*/}
                {/*    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"*/}
                {/*         className="rounded-box"/>*/}
                {/*</div>*/}
                {/*<div className="carousel-item">*/}
                {/*    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"*/}
                {/*         className="rounded-box"/>*/}
                {/*</div>*/}
                {/*<div className="carousel-item">*/}
                {/*    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"*/}
                {/*         className="rounded-box"/>*/}
                {/*</div>*/}
                {/*<div className="carousel-item">*/}
                {/*    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"*/}
                {/*         className="rounded-box"/>*/}
                {/*</div>*/}
                {/*<div className="carousel-item">*/}
                {/*    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"*/}
                {/*         className="rounded-box"/>*/}
                {/*</div>*/}
                {/*<div className="carousel-item">*/}
                {/*    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"*/}
                {/*         className="rounded-box"/>*/}
                {/*</div>*/}
            </div>
        </>
    );
}