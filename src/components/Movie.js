import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({id, year, title, summary, poster,genres }) {
    return (
        <Link to = {{
            pathname: "/movie-detail",
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
            
        }}>
            {/* detail route 호출시 to에 porps로 같이 포함되는 내용 */}

            <div className="movies__movie">       
                <img src={poster} alt={title} title={title}></img> 
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="genres">{genres.map((genre,index) => (
                        <li key={index} className="genres_genre">{genre}</li>
                    ))}</ul>                     
                    <p className="movie__summary">{summary.slice(0,180)}...</p>   
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;