import React from 'react'


const PhraseTable = (props) => {
    return (
        <>
        <table>
            <tbody>
        <tr>
            <th>English</th>
            <th>Latin</th>
            <th>Cyrillic</th>
        </tr>
        {props.data
            .filter(item => (props.filter === "all" || item.difficulty === props.filter))
            .map(item => (
            <tr key={item.id}>
                <td>{item.phrase}</td>
                <td>{item.latinphrase}</td>
                <td>{item.kzphrase}</td>
            </tr>
        ))}
        </tbody>
        </table>
        </>
    )
}


export default PhraseTable