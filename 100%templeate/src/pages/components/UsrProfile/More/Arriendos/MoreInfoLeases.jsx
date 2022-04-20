import React from 'react'
import AceptLease from '../../../../helpers/helpAceptLease'
import {IoMdCheckmarkCircleOutline} from "react-icons/io"
import { IoIosCloseCircleOutline } from "react-icons/io" 
import { AiOutlineIssuesClose } from "react-icons/ai"
import { FaUserCheck } from "react-icons/fa"
const MoreInfoLeases = ({ dataausr }) => {

  

  return (
    <div className='container_more_info'>
      <div className='row'>{dataausr.leases.map((item, index) => (
        <div key={index} className="col">
          <div className="card">
          <div style={{background: "#6e5c5c5c",borderRadius: "0px 0px 28px 28px"}}>
              <h1>
              {item.house.description.split("-")[0]}
              </h1>
            </div>
      
            {
             item.house.photos.length === 0 ?  <img onClick={() => window.location.href=`/Products/${item.house.id}`}  className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/6908/6908753.png" alt="Card image cap"></img> :  <img onClick={() => window.location.href=`/Products/${item.house.id}`}  className="card-img-top" src={item.house.photos[0].url} alt="Card image cap"></img>
            }
            <div className="card-body">
              
              <div> {item.isApproved === null ? <h1 style={{background:"#b7b71dc2" , color: "#0000008a" ,borderRadius: "12px 12px 12px 12px" , fontFamily: "initial"}}>En espera <AiOutlineIssuesClose></AiOutlineIssuesClose></h1> : ( item.isApproved === true ? <h1 style={{background:"rgba(25, 135, 84, 0.83)" , color: "#0000008a" ,borderRadius: "51px 50px 14px 14px" , fontFamily: "initial"}} >Aprovado <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></h1>  : <h1 style={{background:"#f22e2ed6" , color: "#0000008a" ,borderRadius: "14px 14px 50px 50px" , fontFamily: "initial", fontSize:"24px"}} >No aprovado <IoIosCloseCircleOutline></IoIosCloseCircleOutline></h1>)  } </div>
              <div onClick={() => window.location.href=`/usrprofilepublic/${item.traveler.id}`}> Ver Usuario <FaUserCheck style={{fontSize:"10px", cursor: "pointer"}}></FaUserCheck> </div>
              <div>
                <p style={{display:"flex"}}>Tiempo Requerido<br/></p>
              <p className="card-text"><small className="text-muted">De:{item.startDate}</small></p>
              <p className="card-text"><small className="text-muted">Hasta: {item.finishDate}</small></p>
              </div>
              <div>
                <button  type='button' className='btn btn-success'   onClick={() =>  AceptLease(item.id, true)}>
                  Apoyar
                </button>
                <button type='button' className='btn btn-warning' onClick={() => AceptLease(item.id, false)}>
                  Rechazar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}</div>
    </div >
  )
}

export default MoreInfoLeases