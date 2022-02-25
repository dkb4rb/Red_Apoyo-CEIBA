import React from 'react'
import './card.css'


function testing(){
    console.log('ESta es la funcion de testing');

    
};

const test = () => {

    return(

        <div className='test'>
            <h1>Holas</h1>
        </div>
    );
}



const card = () => {

    return (
        <div>
            <div class="card">
                <img src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?w=1536" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <button type='button' onClick={test}></button>
                    </div>
            </div>
            {test()}


        </div>
    );
}
export default card;