// Core
import React, { PureComponent } from 'react';

export default class PhoneDetailComponent extends PureComponent {
    render () {
        let {phoneSelected} = this.props;
        return(
            <div className="phone-details">
                <div className="image">
                    <img src={phoneSelected.image} alt={phoneSelected.name}/>
                </div>
                <div className="description">
                    <h1>{phoneSelected.name}</h1>
                    <h3>{phoneSelected.price}</h3>
                    <p>Model: {phoneSelected.name}</p>
                    <p>Brand: {phoneSelected.brand}</p>
                    <p>OS: {phoneSelected.os}</p>
                    <p>Inches: {phoneSelected.inches}</p>
                </div>
                <div className="btn">
                    <button onClick={this.props.changeView(null)}>Go Back</button>
                </div>
            </div>
        )
    }
}