import React from 'react'

const MoreInfo = ({ dataausr }) => {

  return (
    <div className='container_more_info'>MoreInfo

      <div>{dataausr.houses.map((item, index) => (
        <div key={index}>
          <p>
            {item.description}
          </p>
        </div>
      ))}</div>
    </div>
  )
}

export default MoreInfo