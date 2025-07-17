import React from 'react'
import { useState, useEffect } from 'react'
import Filtering from '../components/Filtering';
import addName from '../components/addName';
import axios from "axios";

const Phrases = () => {

    const [currentUser, setCurrentUser] = useState();
    const [phrases, setPhrases] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:3500/users')
        .then((response) => setCurrentUser(response.data.find(item => item.selected===true)))
        .catch((error) => console.error(error));
    },[]);
    useEffect(() => {
        fetch('http://localhost:3500/api/phrases')
        .then(res => res.json())
        .then(data => setPhrases(addName(currentUser, data)));
    },[currentUser]);

    
    if (!phrases || phrases.length === 0) {
        return (<></>)
    }
    return (
        
        <>
        
        <h1>Phrases</h1>
        <p>Here are some phrases in Kazakh to help with everyday conversation. Some are harder, some are easier.</p>

        <p>Google Translate cannot speak Kazakh, but Bing can: https://www.bing.com/translator?to=kk&setlang=be</p>

        <p>However I still recommend searching videos of people saying these phrases as it is more natural sounding.</p>
        
        <Filtering data = {phrases} pageType = {"phrase"}/>
        
        </>
    )
}


export default Phrases