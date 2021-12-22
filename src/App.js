import './App.css';
import * as React from 'react';

// import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Search from './components/navbar/Search';
import Productiondata from './components/prod/Productiondata';
import ValueGetterGrid from './components/prod/ValueGetterGrid';
import ColumnPinningWithCheckboxSelection from './components/prod/Valueeditor';
import ComboBox from './components/prod/FormEditor';


import {useState} from 'react'
import {dataProd} from './components/Data'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Notifications from './components/sidebar/Notifications';

// import Context from './components/context/Context';


function App() {
  const [data, setData] = useState(dataProd);
  return (
    <div className="App" >
    <BrowserRouter>
    <Sidebar/>
    {/* <Search/> */}
    {/* <Context/> */}
    {/* <Productiondata  data={data}/> */}


    <ValueGetterGrid/>
    {/* 上面這個是表格的內容 */}

    <ColumnPinningWithCheckboxSelection/>
    {/* 表格編輯介面 */}
    
    {/* <ComboBox/>
    表格填寫-新增新聞或是編輯新聞可以用 */}
    
    <switch>
    <Route exact path='/'/>
    <Route path="/Notifications" component={Notifications}/>
    </switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
