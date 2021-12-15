import './App.css';

import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Search from './components/navbar/Search';
import Productiondata from './components/prod/Productiondata';
import {useState} from 'react'
import {dataProd} from './components/Data'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Notifications from './components/sidebar/Notifications';



function App() {
  const [data, setData] = useState(dataProd);
  return (
    <div className="App">
    <BrowserRouter>
    <Sidebar/>
    <Search/>
    <Productiondata data={data}/>
    <switch>
    <Route exact path='/'/>
    <Route path="/Notifications" component={Notifications}/>
    </switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
