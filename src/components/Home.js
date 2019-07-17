import React, { Component } from 'react';
import ComicList from '../components/comics/ComicList.js';
import BaseService from '../services/BaseService.js';

class Home extends Component {
    render() {      
    return (
          <div className="container d-flex">
            <div className="w-75 colizq">
              <ComicList/>
            </div>
            <div className="colder">
                <div className="colder-peq">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search" /></div>
            </div>
          </div>
      );
    }
}

export default Home