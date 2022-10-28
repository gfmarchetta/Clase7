import React, { Component } from "react";
import './Video.css';

export default class Video extends Component{
    render() {
        return (
            
                <div className="myVideo">
                    <label>Este ss un Video React</label>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BkwoFWiWKaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
        );
    }
}