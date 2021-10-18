import React, { Component } from 'react';
import "./TourList.css";
import Tour from "../Tour/Tour";

export default class TourList extends Component{
    render() {
        return(
            <section className="tourlist">
                <Tour />
            </section>
        )
    }
}
