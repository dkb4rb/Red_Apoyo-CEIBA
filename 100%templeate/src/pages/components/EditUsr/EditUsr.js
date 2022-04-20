import React, { Component } from 'react'
import EditUsrs from './EditUsrs'
import "./EditUsr.css"
import axios from 'axios'
import Headerns from "./../Header/Headerns"
const dbUrl = "https://isnft-prod.azurewebsites.net/api/users/5"



export default class EditUsr extends Component {
    componentDidMount(){
        axios
        .get(dbUrl)
        .then((Promesa)=>{
            console.log (Promesa.data)

        })
        .catch((error)=>{
            console.log(error)
        })
    }
  render(){

      return (
      <div className='EditUsrContainer'>
          <Headerns>

          </Headerns>
          <EditUsrs>
  
          </EditUsrs>
      </div>
    )
  }
}
 