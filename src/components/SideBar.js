import React from 'react'
import { SideBarData } from './SideBarData'

function SideBar() {
    return (
        <div className="side-bar">
           <ul className="sidebarlist">
           {SideBarData.map((value, key) =>{
               return(
               <li key={key} onClick={()=>{window.location.pathname = value.linkc}}>
               <div>{value.icon}</div>
               <div>{value.name}</div>
               </li>
               );
               
           })}
           </ul>
        </div>
    )
}

export default SideBar
