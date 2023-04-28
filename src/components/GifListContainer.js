import { useState, useEffect } from "react";
import GifList from "./GifList";
import { GifSearch } from "./GifSearch";

const Loader = () => {
    return <div>Loading...</div>;
};

const GifListContainer = () => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("dolphin");

    const apiKey = "p1OKGYMQGuIKoPq0TlveAYoMg7APgsyh";
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    const handleForm = (e) => {
        e.preventDefault();
        console.log("Submitted");
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`)
            .then((res) => res.json())
            .then((data) => {
                setGifs(data.data.slice(0, 3));
            });
    };

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setGifs(data.data.slice(0, 3));
                setLoading(true);
            });
    }, []);

    if (!loading) return <h3>Loading...</h3>;

    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "30px" }}>
            <GifList gifs={gifs} />
            <GifSearch handleForm={handleForm} setQuery={setQuery} query={query} />
        </div>
    );
};

export default GifListContainer;