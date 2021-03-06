import React, { useState } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoding: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoding: false })
  }

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoding, movies } = this.state;
    return (
      <section class="container">
        {isLoding ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
              {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
              ))}
          </div>
        )}
      </section>
    );
  }
}

//Add branch

export default Home;