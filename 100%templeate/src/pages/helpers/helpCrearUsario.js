import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "universal-cookie"

const DbUrl = "https://isnft-prod.azurewebsites.net/api/users";

const cookie = new Cookie();

/*
 * CrearUsuario - This function Create new user into app 
 * Return 
 * @return: New user
 * 
 **/

// Recordar que para la prueba se debe de generar un token 
function CrearUsario(data, setErr, setForm, location) {

	let idowner = cookie.get("id_usr_tok");
	const id_photo = `${idowner}.${Date.now()}`;
	const date_parced = data.birthday.split("-");
	const heade = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer Hola`
	};
	const state = {
		datos: {
			"email": data.email,
			"password": data.password,
			"person": {
				"birthday": `${date_parced[2]}-${date_parced[1]}-${date_parced[0]}`,
				"cityId": Number(data.cities),
				"lastName": data.lastName,
				"name": data.name,
				"phone": data.phone
			},
			"userName": data.userName
		},
		formphot: {
			"id": id_photo,
			"url": ""
		}
	};
	axios
		.post(
			DbUrl,
			state.datos,
			{
				headers: heade
			}
		)
		.then(response => {
			window.location.href = "/"
		})
		.catch(error => {
			console.log(error);
		})
}
export default CrearUsario;