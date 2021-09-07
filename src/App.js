/**
 * 20210907 - useEffect is used to initialise the materialize CSS
 *          - equivalent to eventListener in the HTML
 *   */ 
import React, {Fragment,useEffect} from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js';


const App = () => {

  // Using useEffect to initalise the css framework
  useEffect(()=>{
    M.AutoInit();
  })

  return (
    <div>
      IT Logger App
    </div>
  );
}

export default App;
