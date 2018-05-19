import React, { PureComponent } from 'react';
import './Mobile.css'

export default class PhoneComponent extends PureComponent {
    render () {
        return(
            <div className="phone-item" onClick={this.props.changeView(this.props.phone)}>
                <img
                     src={this.props.phone.image} alt="50"
                />
                <h1>{this.props.phone.name}</h1>
                <h1>{this.props.phone.price}</h1>
            </div>
        )
    }
}