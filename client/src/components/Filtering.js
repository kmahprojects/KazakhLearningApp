import React from 'react'
import { useState, useEffect } from 'react'
import FlashCardDisplay from './FlashCardDisplay';
import PhraseTable from './PhraseTable';



function Filtering(props) {

    
    const [filter, setFilter] = useState("all");
    const [difficulties, setDifficulties] = useState([]);
    
    

    useEffect( ()=>{
        fetch('http://localhost:3500/api/difficulties')
        .then(res => res.json())
        .then(data => setDifficulties(data));
      },[])
    function clickEvent(e){
      e.preventDefault();
      setFilter(e.target.value);
      togglePressed(e.target.value);
      
    }

    function togglePressed(e) {
      const updatedDifficulties = difficulties.map((item) => {
          if (item.diff===e) {
            return { ...item, isPressed:true };
          }
          return {...item, isPressed:false};
        });
        setDifficulties(updatedDifficulties);
        
    }

    return (
      <>
      <div className="toggle-container">
      {difficulties.map((item) => (
        <button key={item.id} type="button" className = "toggle-btn" value = {item.diff} aria-pressed={item.isPressed}
        onClick = {clickEvent}>
        {item.dName}
        </button>
      ))
      }
      </div>
      
      
      {props.pageType === "phrase" ? (
        <PhraseTable data = {props.data} filter = {filter} />
      ) : (
        <FlashCardDisplay data = {props.data} filter = {filter}/>
      )}
      
        
      </>
        
     );
  }  export default Filtering;
  