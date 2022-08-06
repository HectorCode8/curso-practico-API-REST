async function getTrendingMoviesPreview() {
    const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await response.json();
    const movies = data.results;
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImage = document.createElement('img');
        movieImage.classList.add('movie-img');
        movieImage.setAttribute('alt', movie.title);
        movieImage.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);
        movieContainer.appendChild(movieImage);

        trendingPreviewMoviesContainer.appendChild(movieContainer);

    });
}

getTrendingMoviesPreview();