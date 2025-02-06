import React from 'react'
import '../App.css'

const Title = (prop) => {
  return (
    <div>
       <div className="title">
         <div className="title-head">
           {prop.title}
         </div>
         <div className="title-desc">
         {prop.desc}
         </div>
       </div>
    </div>
  )
}

export default Title
