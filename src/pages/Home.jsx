import MovieCard from '../components/MovieCard'
function Home(){
    const movies=[
        {id:1 , title:"eega" , release_date:"2010"},
        {id:2 , title:"student" , release_date:"2012"},
        {id:3 , title:"sye" , release_date:"2021"},
        {id:4 , title:"rrr" , release_date:"2025"},

    ]
    const handleSearch=()=>{

    }
    return <div className="home">
        <form onSubmit={handleSearch} classNme="search-form">
            <input type="text" 
                   placeholder="search for movies..."
                   className="search-input"></input>
                   <button type="submit" className="search-button">Search</button>
        </form>
        <div classNme="movies-grid">
            {movies.map(movie=><MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}
export default Home;