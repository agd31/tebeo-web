import React, { Component } from 'react';
import ComicList from '../components/comics/ComicList.js'


import BaseService from '../services/BaseService.js';

class Home extends Component {
    render() {
        
       
    
    return (
          <div className="container">
            <h1>Holaaaaa</h1>
            <ComicList/>
    </div>
    
      );
    }
}

export default Home