import { useState, useEffect } from "react";
import { DetailType } from "interface/detail";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams<{id:string}>();
    const [movies, setMovies] = useState<DetailType>();

    useEffect(() => {
        const getDetail = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovies(json.data.movie)
        };
        getDetail();
    }, [id]);

    const { medium_cover_image, title, url } = movies || {};
    return (
        <div>
            <img src={medium_cover_image} alt="" />
            <h2>{title}</h2>
            <a target="blank" href={url}>{url}</a>
        </div>
    );
}
export default Detail;