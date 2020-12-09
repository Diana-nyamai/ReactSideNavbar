import React from 'react'
import { SideBarData } from './SideBarData'

function SideBar() {
    return (
        <div className="side-bar">
           <ul>
           {SideBarData.map((value, key) =>{
               return 
               <li key={key}>{""}
               <div>{value.icon}</div>
               <li>{value.link}</li>
               </li>
           })}
           </ul>
        </div>
    )
}

export default SideBar
