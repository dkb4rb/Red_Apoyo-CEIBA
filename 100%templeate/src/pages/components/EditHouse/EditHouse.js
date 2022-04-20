import React, { useEffect, useState } from 'react';
import EditHouses from './EditHouses';
import Headerns from '../Header/Headerns';
import axios from 'axios';
import Footer from '../Footer/Footer';

const EditHouse = () => {
    const [db, setdb] = useState([]);
    useEffect(() => {
        const id_house = window.location.pathname.split("/")[2];
        const dburl = `https://isnft-prod.azurewebsites.net/api/houses/${id_house}`;

        axios
            .get(dburl)
            .then((response) => {
                console.log("Tu nuevo response con la data");
                setdb(response.data);
                console.log(response.data);

            })
            .catch((err) => console.log(err));
    })
    return (
        <div className='Sections'>
            <Headerns></Headerns>
            <EditHouses data={db} />
            <Footer></Footer>
        </div>

    );
}

export default EditHouse;