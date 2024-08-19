import React from 'react'
import KursResim from './assets/gs.jpg'
function Deneme(name) {
    console.log(name.name[0])
    return (
        <div>
            <div className='cards'>
                <div className='card'>
                    <div className='img'>
                        <img src={name.name[0].img} alt="" />
                    </div>
                    <div className='text'>
                        <div className="title">
                            <h2></h2>
                        </div>
                        <div className="text">
                            <h5></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deneme