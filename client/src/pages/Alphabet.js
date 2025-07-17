import React, { useEffect, useState } from 'react';
  
const Alphabet = () => {
  const [alphabet, setAlphabet] = useState([]);
  useEffect( ()=>{

    fetch('http://localhost:3500/api/alphabet')
    .then(res => res.json())
    .then(data => setAlphabet(data));

  },[])

  
    return (
    
        <>
        <h1>Alphabet</h1>
        <p>Kazakh has multiple alphabets, with Arabic, Cyrillic, and Latin having been used before. However as the most
          common alphabet used for Kazakh is currently Cyrillic, this app will cover only the Cyrillic alphabet.

          Please note there are different transliterations of Cyrillic into Latin, so the Latin transliterations here
          may be different from other sources.
        </p>
        <table>
          <tbody>
        <tr>
          <th>Cyrillic Letter</th>
          <th>Latin Letter</th>
          <th>Pronunciation</th>
        </tr>
        {alphabet.map((letter)=>(
          <tr key={letter.id}>
            <td>{letter.kzletter}</td>
            <td>{letter.engletter}</td>
            <td dangerouslySetInnerHTML={{__html: letter.pronun}}></td>
          </tr>
        
        ))}
        </tbody>
        </table>

        <h2>Pronunciation Videos</h2>
        <p>It can be difficult to understand how to pronounce some letters with just a written description.
          Here are some videos by YouTuber Zhannur that can help.
        </p>
        <iframe width="350" height="288" src="https://www.youtube.com/embed/W7p3OXcwydk?si=xJDlVkOzXQPDAuPz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="350" height="288" src="https://www.youtube.com/embed/896xtTu8RA0" title="New Kazakh Alphabet" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
    )
  }

export default Alphabet