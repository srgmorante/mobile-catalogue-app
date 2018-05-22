// Core
import React, { Component } from 'react';
import { connect} from 'react-redux';
// Actions
import { loadMobilesList, loadingAction } from '../actions/mobileActions'
//Components
import PhonesList from "../components/PhonesListComponent";
import PhoneDetail from "../components/PhoneDetailComponent";
// Styles
import './loader.css'


function mapStateToProps (state) {
    return {
        phonesList: state.phonesList,
        loading: state.loading
    }
}

function mapDispatchToProps (dispatch) {
   return {
       loadMobiles: () => dispatch(loadMobilesList()),
       loadingAction:  (status) => dispatch(loadingAction(status))
    }
}

// Spinner Stateless Component
const Loader = () => <div className="loader">Loading...</div>;


export class MobilesContainer extends Component {
    state = {
        selected: null
    };
    componentDidMount () {
        this.props.loadMobiles();
        // This is a fake loading, I use this because te charge was so fast.
        this.props.loadingAction(true);
        setTimeout(() => {
            this.props.loadingAction(false);
        }, 2000)
    }

    // Function what change the view if there is a Phone selected
    changeViewHandler (selected) {
        this.setState({selected});
    };

    // Function to renderize the correct component in each case
    generateView () {
        if (this.props.loading) {
            return <Loader/>
        }
        else if (this.state.selected) {
            return (
                <PhoneDetail
                    phoneSelected={this.state.selected}
                    changeView={(selected)=> this.changeViewHandler.bind(this, selected)}
                />
            );
        } else {
            return (
                <PhonesList
                    phonesList={this.props.phonesList}
                    changeView={(selected)=> this.changeViewHandler.bind(this, selected)}
                />
            );
        }
    }
    render() {
        return (
            this.generateView()
        );
    }
}
// Exporting the container and use the connect High Order Component to connect the React Container with Redux Store.
export default connect(mapStateToProps, mapDispatchToProps)(MobilesContainer)
