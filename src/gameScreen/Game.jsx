

import {useSelector, useDispatch} from "react-redux";
import {increment} from "../actions"
import "./game.css"

export default function Game() {

    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    return(
       <div className="container">
         <div className="left">
           <button  onClick = {() => dispatch(increment()) }>CLICK ME +</button>
         </div>
       <div className="right">
           <div className="counterBox">
               <h1>Counter {counter} </h1>
           </div>
       </div>
       </div>
    )
}