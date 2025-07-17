import React from 'react'
import { useState } from 'react'
const uuid = require('uuid');

const FlashCardDisplay = (props) => {
    const [position, setPosition] = useState([0,0,0]);
    
    const easyArray = props.data.filter(function(items){
        return items.difficulty === "easy";
    })
    
    const mediumArray = props.data.filter(function(items){
        return items.difficulty === "medium";
    })
    
    const hardArray = props.data.filter(function(items){
        return items.difficulty === "hard";
    })

    const flashArray = [easyArray, mediumArray, hardArray];
    const diffArray = ["easy", "medium", "hard"];

    function filterDiff (string) {
        if (props.filter === string || props.filter === "all"){
            return "false";
        } else {
            return "true"
        }
    }

    function update(index, updatedValue){
        const newArray = position.map((v, i) => {
            if (i === index) return updatedValue;
            return v;
          });
        setPosition(newArray);
    }
    function clickNext(e){
        e.preventDefault();
        let target = parseInt(e.target.value);
        if (position[target] >= flashArray[target].length-1){
            update(target,0)
        } else {
            update(target, position[target]+1);
        }
        
         
      }
    function clickPrev(e){
        e.preventDefault();
        let target = parseInt(e.target.value);
        if (position[target] <= 0){
            update(target, flashArray[target].length-1)
        } else {
            update(target, position[target]-1);
        }
    }
    
    return (
        <>
        {flashArray.map((item,index)=>(
        <div className="flashCardWrapper" key={uuid.v4()} >
        <h2  matched = {filterDiff(diffArray[index])}>{(diffArray[index]).toUpperCase()}</h2>
        <div className="card-wrapper" matched = {filterDiff(diffArray[index])}>
			<div className="card-body">
				<div className="card-front">
                    <p>{item[position[index]].kzphrase}</p>
				</div>
				<div className="card-back">
                    <p>{item[position[index]].phrase}</p>
				</div>
			</div>
		</div>
        <div className="cardButtons" matched = {filterDiff(diffArray[index])}>
            <button value = {index} onClick = {clickPrev} matched = {filterDiff(diffArray[index])}>Prev</button>
            <button value = {index} onClick = {clickNext} matched = {filterDiff(diffArray[index])}>Next</button>
        </div>
        </div>
        ))}
        
        
        </>
    )
}


export default FlashCardDisplay