import React, { Component } from 'react';


export default class Listas extends Component{
    render () {
        const numbers = [1, 1, 3, 4, 5];
        return(
            <div>
                <h4>Trabajando con listas</h4>
                {numbers.map((number, index) => {
                    return <p key={index}>Soy el numero {number}</p>
                })}
            </div>
        )
    }
}