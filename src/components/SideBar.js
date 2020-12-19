import React from 'react'
import { SideBarData } from './SideBarData'

function SideBar() {
    return (
        <div className="side-bar">
           <ul className="sidebarlist">
           {SideBarData.map((value, key) =>{
               return(
                
               <li key={key}
                id= {window.location.pathname == value.link? "active": ""}
                onClick={()=>{window.location.pathname = value.link}}

                 className="row">
               <div id="icon">{value.icon}</div>
               <div id="name">{value.name}</div>
               </li>
               );
               
           })}
           </ul>
        </div>
    )
}

export default SideBar
