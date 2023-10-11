import React from 'react'
import Card from './Card'
import imagen1 from '../asstts/astronauta.jpg'
import imagen2 from '../asstts/luna.jpg'
import imagen3 from '../asstts/tiempo.jpg'

const cards = [
    {
        id: 1,
        title: 'Astronauta',
        image: imagen1,
        desc: "Mirando el paisaje "
    },
    {
        id: 2,
        title: 'Luna',
        image: imagen2,
        desc: 'Con aguita includia'
    },
    {
        id: 3,
        title: 'Reloj',
        image: imagen3,
        desc: 'Te sabes la hora'

    }
]

export default function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(c => (
                    <div className='col-md-4' key={cards.id}>
                        <Card
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        image={c.image}
                        desc={c.desc}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}