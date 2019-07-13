import React, { Component } from 'react';
import ComicList from '../components/comics/ComicList.js'


import BaseService from '../services/BaseService.js';

class Home extends Component {
    render() {
        
       
    
    return (
          <div className="container d-flex ">
            <div className="w-75 ">

                  <ComicList/>
  
            </div>
            <div className="">
  
                <div className="width: 100%, height: 500px, background-color:red">hola</div>
  
            </div>
          </div>
      );
    }
}

export default Home