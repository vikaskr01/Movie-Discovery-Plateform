const movieContainer = document.getElementById('movie-container');
const searchBar = document.getElementById('search-bar');

const movies = [
    
        { title: 'Inception', image: '/images/Inception.jpeg', imdbLink: 'https://www.imdb.com/title/tt1375666/' },
        { title: 'Interstellar', image: '/images/Interstellar.jpeg', imdbLink: 'https://www.imdb.com/title/tt0816692/' },
        { title: 'The Dark Knight', image: '/images/The Dark Knight.jpeg', imdbLink: 'https://www.imdb.com/title/tt0468569/' },
        { title: 'Tenet', image: '/images/Tenet.jpeg', imdbLink: 'https://www.imdb.com/title/tt6723592/' },
        { title: 'The Prestige', image: '/images/The Prestige.jpeg', imdbLink: 'https://www.imdb.com/title/tt0482571/' },
        { title: 'Dunkirk', image: '/images/Dunkirk.jpeg', imdbLink: 'https://www.imdb.com/title/tt5013056/' },
        { title: 'Avatar', image: '/images/Avatar.jpg', imdbLink: 'https://www.imdb.com/title/tt0499549/' },
        { title: 'Titanic', image: '/images/Titanic.jpeg', imdbLink: 'https://www.imdb.com/title/tt0120338/' },
        { title: 'The Matrix', image: '/images/The Matrix.jpeg', imdbLink: 'https://www.imdb.com/title/tt0133093/' },
        { title: 'John Wick', image: '/images/John Wick.jpg', imdbLink: 'https://www.imdb.com/title/tt2911666/' },
        { title: 'The Avengers', image: '/images/The Avengers.jpeg', imdbLink: 'https://www.imdb.com/title/tt0848228/' },
        { title: 'Iron Man', image: '/images/Iron Man.jpg', imdbLink: 'https://www.imdb.com/title/tt0371746/' },
        { title: 'Thor', image: '/images/Thor.jpeg', imdbLink: 'https://www.imdb.com/title/tt0800369/' },
        { title: 'Black Panther', image: '/images/Black Panther.jpeg', imdbLink: 'https://www.imdb.com/title/tt1825683/' },
        { title: 'Spider-Man', image: '/images/Spider-Man.jpg', imdbLink: 'https://www.imdb.com/title/tt0145487/' },
        { title: 'Doctor Strange', image: '/images/Doctor Strange.jpeg', imdbLink: 'https://www.imdb.com/title/tt1211837/' },
        { title: 'Guardians of the Galaxy', image: '/images/Guardians of the Galaxy.jpg', imdbLink: 'https://www.imdb.com/title/tt2015381/' },
        { title: 'Captain Marvel', image: '/images/Captain Marvel.jpg', imdbLink: 'https://www.imdb.com/title/tt4154664/' },
        { title: 'Ant-Man', image: '/images/Ant-Man.jpeg', imdbLink: 'https://www.imdb.com/title/tt0478970/' },
        { title: 'Hulk', image: '/images/Hulk.jpg', imdbLink: 'https://www.imdb.com/title/tt0800080/' },
        { title: 'Shang-Chi', image: '/images/Shang-Chi.jpeg', imdbLink: 'https://www.imdb.com/title/tt9376612/' },
        { title: 'Eternals', image: '/images/Eternals.jpeg', imdbLink: 'https://www.imdb.com/title/tt9032400/' },
        { title: 'Black Widow', image: '/images/Black Widow.jpeg', imdbLink: 'https://www.imdb.com/title/tt3480822/' },
        { title: 'Deadpool', image: '/images/Deadpool.jpeg', imdbLink: 'https://www.imdb.com/title/tt1431045/' },
        { title: 'Logan', image: '/images/Logan.jpeg', imdbLink: 'https://www.imdb.com/title/tt3315342/' },
        { title: 'X-Men', image: '/images/X-Men.jpg', imdbLink: 'https://www.imdb.com/title/tt0120903/' },
        { title: 'Fantastic Four', image: '/images/Fantastic Four.jpg', imdbLink: 'https://www.imdb.com/title/tt0120667/' },
        { title: 'Blade', image: '/images/Blade.jpg', imdbLink: 'https://www.imdb.com/title/tt0120611/' },
        { title: 'Wonder Woman', image: '/images/Wonder Woman.jpg', imdbLink: 'https://www.imdb.com/title/tt0451279/' },
        { title: 'Aquaman', image: '/images/Aquaman.jpg', imdbLink: 'https://www.imdb.com/title/tt1477834/' },
    
    
];

function displayMovies(filter = '') {
    movieContainer.innerHTML = '';
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
    );

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('a'); // Create anchor element
        movieCard.href = movie.imdbLink; // Set IMDb link
        movieCard.target = '_blank'; // Open in new tab
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
        `;

        movieContainer.appendChild(movieCard);
    });
}

searchBar.addEventListener('input', (e) => {
    displayMovies(e.target.value);
});

displayMovies();
