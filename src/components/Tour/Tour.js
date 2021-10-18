import React, { Component } from 'react'
import "./Tour.css";
import london from '../../london.jpeg';

export default class Tour extends Component{
    render(){
        return(
            <article className="tour">
              <div className="img-container">
                  <img src={london} />
                  <span className="close-btn">
                      <i className="fas fa-windo-close"></i>
                  </span>
              </div> 
              <div className="tour-info">
                  <h3>city</h3>
                  <h4>name</h4 >
                  <h5>info <span><i className="fa-caret-square-down"></i></span></h5>
                <p> Advertising your business to area 
                    specific has many advantages.</p>
              </div>
            </article>
        )
    }
}