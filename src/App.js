import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  
  state ={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  apiKey= process.env.REACT_APP_NEWS_API;
  pageSize = 9;
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar     // loading bar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
              <Route exact path= "/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country = "in" pageSize={this.pageSize} category="general"/>}/>
              <Route exact path= "/business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" country = "in" pageSize={this.pageSize} category="business"/>}/> 
              <Route exact path= "/entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" country = "in" pageSize={this.pageSize} category="entertainment"/>}/> 
              <Route exact path= "/health" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="health"  country = "in" pageSize={this.pageSize} category="health"/>}/> 
              <Route exact path= "/science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" country = "in" pageSize={this.pageSize} category="science"/>}/> 
              <Route exact path= "/sports" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" country = "in" pageSize={this.pageSize} category="sports"/>}/> 
              <Route exact path= "/technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" country = "in" pageSize={this.pageSize} category="technology"/>}/> 
              <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
          </Routes>
        </Router>
      </div>
    ) 
  }
}

