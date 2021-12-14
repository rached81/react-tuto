import React from "react";
import {
 
  Link
} from "react-router-dom";


export default function Menu() {
  return (
     
        <nav>
          <ul>
           
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/hello">Hello</Link>
            </li>
          </ul>
        </nav>


  );
}
