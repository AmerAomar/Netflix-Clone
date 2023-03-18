import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MovieList from './MovieList'
function Home(){
    const [trendingMovies, setTrendingMovies] = useState([]);

    const sendReq = async () => {
        const trendingUrl = `${process.env.REACT_APP_serverUrl}/trending`;
        const response = await fetch(trendingUrl);
        const data = await response.json();
        console.log(data);
        setTrendingMovies(data);
    };

    useEffect(() => {
        sendReq();
    }, []);

    return (
        <MovieList data={trendingMovies} />
    );
}

export default Home;