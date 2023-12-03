import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../components/Random.css';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


export default function UseGif(tag) {
    const [gif, setGif] = useState('');
    const [spinner, setSpinner] = useState(false);


    async function fetchData() {
        setSpinner(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const { data } = await axios.get(tag ? `${url}&${tag}`:url);
        const imageSource = data.data.images.downsized_large.url;
        setSpinner(false);
        setGif(imageSource);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { gif, spinner, fetchData };
}
