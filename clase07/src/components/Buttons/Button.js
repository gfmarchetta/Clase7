import React, { Component } from "react";
import './Button.css';

export default class Button extends Component{
    render() {
        return (
            <div>
                {/* <button onClick={() => this.props.onClick()}>Click Me</button> */}
                <div class="myBoton">
                    <label>Este ss un boton React</label>
                    <button className="Button">Boton React</button>
                </div>
            </div>
        );
    }
}