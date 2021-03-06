// Core
import React, { PureComponent } from 'react';
// Components
import PhoneComponent from "./PhoneComponent";
// Styles
import './Mobile.css';

export default class PhonesListComponent extends PureComponent {
    render () {
        return(
            <div className="phone-list">
                {this.props.phonesList.map((phone, index) => {
                    return (
                            <PhoneComponent
                                key={index}
                                phone={phone}
                                changeView={this.props.changeView}
                            />
                    )
                })}
            </div>
        )
    }
}