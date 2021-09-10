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
import EditLogModel from "./components/logs/EditLogModel";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

// 20210910 - Implementing the Redux and Reducers
// React-Redux: Responsible for connecting react with redux
// for the provider to the app level
// Store is the reducer connector
import {Provider} from 'react-redux'
import store from "./store";

const App = () => {

  // Using useEffect to initalise the css framework
  useEffect(()=>{
    M.AutoInit();
  })

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar/>
        <div className='container'>
          <AddBtn/>
          <AddLogModel/>
          <EditLogModel/>
          <AddTechModal/>
          <TechListModal/>
          <Logs/>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
