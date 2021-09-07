/**
 * 20210907 - useEffect is used to initialise the materialize CSS
 *          - equivalent to eventListener in the HTML
 *   */ 
import React, {Fragment,useEffect} from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js';

// Importing the layouts
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

const App = () => {

  // Using useEffect to initalise the css framework
  useEffect(()=>{
    M.AutoInit();
  })

  return (
    <Fragment>
      <SearchBar/>
      <div className='container'>
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
