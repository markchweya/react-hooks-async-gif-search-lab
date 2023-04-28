export const GifSearch = ({ handleForm, setQuery, query }) => {
    return (
        <form onSubmit={(e) => handleForm(e)} style={{ display: "flex", flexDirection: "column", alignItems: "baseline" }}>
            <label>Enter a Search Term:</label>
            <input
                type="text"
                placeholder="Search Gif"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
            />
            <button style={{ background: "green", border: "none", color: "white", padding: "4px 8px", borderRadius: "5px" }}>Find Gifs</button>
        </form>
    );
};