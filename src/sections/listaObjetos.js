import React, { Component } from 'react';
import cars from '../data/cars.json'

class CarItem extends Component {
    render () {
        const { car, id } = this.props;

        return(
            <li key={car.id}>
                <p>key: {id}</p>
                <p><strong>Nombre: </strong>{car.name}</p>
                <p><strong>Marca: </strong>{car.company}</p>
            </li>        
        )
    }
}

export default class ListaObjetos extends Component{
    render () {
        const numbers = [1, 1, 3, 4, 5];
        return(
            <div>
                <h4>Trabajando con listas de objetos</h4>
                <ul>
                    {
                        cars.map(car => {
                            return(<CarItem id = {car.id} key ={car.id} car={car} />)
                        })
                    }
                </ul>
            </div>
        )
    }
}