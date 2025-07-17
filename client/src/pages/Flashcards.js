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
        <h1>Flashcards</h1>
        <p>Here are some phrases in Kazakh to help with everyday conversation. Some are harder, some are easier.
        </p>
        
        <Filtering data = {phrases} pageType = {"flashcard"}/>
        
        </>
    )
}


export default Phrases