import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Carousel from '../components/Carousel/Carousel';
import Loader from '../components/Loader/Loader';
import './Menu.css'

const cookies = new Cookies();


const Menu = () => {
	const [load, setload] = useState(true)

	useEffect(() => {
		if (!cookies.get("id_usr_tok")) {
			window.location.href = "./";
		}
		if (localStorage.length === 1) {
			setload(true)
		}

		setInterval(() => {
			setload(false)
		}, 6000)

		const lstorage = localStorage.getItem("mail_ctrl_usr");
		axios
			.get("https://isnft-prod.azurewebsites.net/api/users")
			.then((res) => {
				const data = res.data.result;

				for (let index = 0; index < data.length; index++) {
					if (lstorage === data[index].email) {
						localStorage.setItem("id_usr", data[index].id)
						localStorage.setItem("ownerID", data[index].person.id)
						localStorage.setItem("username", data[index].person.name)
						localStorage.setItem("lastName", data[index].person.lastName)
					}
				}
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<div className='container_menu'>

			{
				load ? <div style={{ marginTop: "16%", marginBottom: "16%" }} >
					<Loader></Loader></div>
					:
					<div>
						<div className="container_carousel_principal">

							<div className='container' style={{ margin: "auto" }}>

								<div className='row'>
									<Carousel />
								</div>
							</div>
						</div>
					</div>
			}
		</div>
	);
}

export default Menu;