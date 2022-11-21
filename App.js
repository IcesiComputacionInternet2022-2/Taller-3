import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Layout from './components/Layout';
import Home from './pages/Home';
import Animals from './pages/Animals'
import AnimalNew from './pages/AnimalNew'
import AnimalSearch from './pages/AnimalSearch'

export default class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/animals" element={<Animals/>}/>
            <Route path="/animals/new" element={<AnimalNew/>}/>
            <Route path="/animals/search" element={<AnimalSearch/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }

}