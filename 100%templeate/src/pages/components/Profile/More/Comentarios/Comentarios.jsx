import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiMessageSquareX } from "react-icons/bi"
import "./Comentarios.css"
import Loader from '../../../Loader/Loader';
import { BsPersonBadgeFill } from "react-icons/bs"
import { MdOutlinePersonPin } from "react-icons/md"
import Message from '../../../Error/Message';
import Modalcomentar from "../../../Modals/ModalComentar/Modalcomentar"
const dbUrl = `https://isnft-prod.azurewebsites.net/api/people/host-leases/${localStorage.getItem('ownerhouseid')}`



const Comentarios = ({ id_pub }) => {
	const [datos, setdatos] = useState([])
	const [load, setload] = useState(true)
	const [nodata, setnodata] = useState(true);
	const [ehreservado, setehreservado] = useState(false)
	const [puedocomentar, setpuedocomentar] = useState(false);
	const [modal, setmodal] = useState({ id: null, modal: false });
	const [datmodal, setdatmodal] = useState([]);
	// eslint-disable-next-line
	const [paramodal, setparamodal] = useState([])
	const comentarioss = []

	useEffect(() => {
		axios
			.get(dbUrl)
			.then((resp) => {
				for (let index = 0; index < resp.data.leases.length; index++) {
					const element = resp.data.leases[index];

					if (element.house.id === Number(id_pub)) {

						comentarioss.push(element)
						if (element.traveler.id === Number(localStorage.getItem("ownerID"))) {
							setehreservado(true);
							setpuedocomentar(true)
						}
					} else {
						setpuedocomentar(false)
						setehreservado(false)
					}

				}
				setdatos(comentarioss)
				if (comentarioss.length === 0) {
					setnodata(true)
					setload(false);

				} else {
					setnodata(false);
					setload(false)
				}
			})





	}, []);

	function veryfymodal(item, estado) {
		const id_house = Number(window.location.pathname.split("/")[2])
		for (let index = 0; index < item.length; index++) {
			const element = item[index];
			if (element.house.id === id_house) {
				if (element.traveler.id === Number(localStorage.getItem("ownerID")))
					setdatmodal(element)
			}
		}
		if (estado === "comment") {
			if (modal.modal) {
				if (modal.id === datmodal.id) {
					setmodal({ id: datmodal.id, modal: false })
				}
			} else {
				setmodal({ otr: modal, id: datmodal.id, modal: true })
				setparamodal({ datos_modal: datmodal, setm: setmodal });
			}


		}

	}

	return (
		<>

			{load ? <Loader></Loader> : (
				nodata ?
					<>
						<div style={{
							display: "inline-grid",
							boxShadow: "0px 0px 303px 0px",
							borderRadius: "22px 22px 103px 103px",
							background: "#b2b3b3c7", opacity: "0.7"
						}}>
							<Message Mensaje={"Aun no hay Comentarios"} ></Message>
							<BiMessageSquareX style={{ fontSize: "180px" }} />
						</div> {puedocomentar === true && <button type='button' className='btn btn-danger' onClick={() => alert("Hoolas")}></button>}
					</> :
					<>
						<div>
							{
								ehreservado &&
								<button type='button'
									className='btn btn-dark'
									onClick={() => veryfymodal(datos, "comment")} >
									Nuevo Comentario
								</button>}

						</div>
					</>)
			}

			{
				modal.modal === true ? <Modalcomentar props={datmodal} setmodal={setmodal}></Modalcomentar> : <span></span>
			}

			{
				datos.map(
					(item, index) => (
						<div key={index}>
							{
								(item.travelerComment || item.hostComment) && (

									<div className="container_comments">

										<div className='row'>
											<div className='container_comentario'>
												<br></br>
												<MdOutlinePersonPin style={{ margin: "auto" }}></MdOutlinePersonPin><br />
												<p>Host</p>
												{item.hostComment}
											</div>

											<div className='container_comentario col'>
												<br></br>
												<BsPersonBadgeFill style={{ margin: "auto" }}></BsPersonBadgeFill><br />
												<p>Travel</p>

												{item.travelerComment}
											</div>
										</div>

									</div>)
							}
						</div>


					)
				)
			}



		</>

	)
}

export default Comentarios