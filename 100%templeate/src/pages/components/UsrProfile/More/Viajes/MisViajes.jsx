import React, { useEffect } from 'react'
import Message from '../../../Error/Message';
import {AiOutlineIssuesClose} from "react-icons/ai"
import {IoMdCheckmarkCircleOutline} from "react-icons/io"
import { IoIosCloseCircleOutline } from "react-icons/io" 
import Title from '../../../Title/Title';



function loadDelete(params) {
  console.log(params.id)
  console.log("Se fue la data")

  
}


const new_pr = (renta) => {
  window.location.href = `/Products/${renta}`;
}


const MisViajes = ({ dataausr }) => {



  return (
    <div className='container_more_info'>
      <div className='row'>{dataausr.leases.map((item, index) => (
        <div key={index} className="col">
          <div className="card"><div style={{background: "#6e5c5c5c",borderRadius: "0px 0px 28px 28px"}} >
            
             <Title  title={item.house.description.split("-")[0]} ></Title>
            </div>
            <h5 className="card-title">{item.isApproved === true? <> <h1 style={{color:"green"}} >Aprovada!</h1>   <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline> </>:( item.isApproved === null ? <> <div  > <Message Mensaje={"Solicitud en espera ..."} ></Message><AiOutlineIssuesClose></AiOutlineIssuesClose></div></> : <> <div> <Message > <h1 style={{color:"red"}}>No aprovado<IoIosCloseCircleOutline></IoIosCloseCircleOutline></h1></Message> </div></>  )}</h5>


          {
             item.house.photos.length === 0 ? <img onClick={() => new_pr(item.house.id)} className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/6908/6908753.png" alt="Card image cap" style={{cursor:"pointer"}}  ></img> : <img  onClick={() => new_pr(item.house.id)} className="card-img-top" src={item.house.photos[0].url} alt="Card image cap" style={{cursor:"pointer"}} ></img>
           }
            
            
            <div className="card-body">
             
              <div>
                <p style={{display:"flex"}}>Disponible: <br/></p> 
              <p className="card-text"><small className="text-muted">De:{item.startDate}</small></p>
              <p className="card-text"><small className="text-muted">Hasta: {item.finishDate}</small></p>
              </div>
             
              <div onClick={() => new_pr(item.house.id)} style={{cursor:"pointer"}} >Ver mas</div>
            </div>
          </div>
        </div>
      ))}</div>
    </div >
  )
}
export default MisViajes