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
import AddBtn from "./components/layout/AddBtn";
import AddLogModel from "./components/logs/AddLogModel";

const App = () => {

  // Using useEffect to initalise the css framework
  useEffect(()=>{
    M.AutoInit();
  })

  return (
    <Fragment>
      <SearchBar/>
      <div className='container'>
        <AddBtn/>
        <AddLogModel/>
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
