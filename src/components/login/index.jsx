import React, { Component } from "react";
import {LoginBanner} from './LoginBanner'
import PinInput from "react-pin-input";
import logo from '../../assets/logo192.png'
import axios from 'axios'
import './Login.css';
import { useHistory } from "react-router-dom";


class PinLogIn extends Component {

    constructor(props){
        super(props)
        this.state = {
            pin: '',
            location: ''
        };

        this.clickLogin = this.clickLogin.bind(this);
        const history = useHistory;
        this.pinRef = React.createRef();
    }

    componentDidMount(){
        this.pinRef.current.focus();
        this.getData();

    }

    render(){
        return (
            <div className="Container">
                <LoginBanner className="banner" src={logo} alt="logo">
                    <h3>Enter your 4-digit PIN</h3>
                </LoginBanner>

                <PinInput 
                    length={4} 
                    secret 
                    focus
                    ref={this.pinRef}
                    type="numeric"
                    inputMode="number"
                    onChange={this.pinChanged}
                    onComplete={this.pinCompleted}
                    style={{padding: '10px', fontSize:'16px'}}  
                    inputStyle={{borderColor: 'red'}}
                    inputFocusStyle={{borderColor: 'blue'}}
                    autoSelect={true}  
                />

                <button onClick={this.clickLogin}>LOG IN</button>

            </div>

            
        )
    }

    clickLogin(){
        console.log(`PIN: ${this.state.pin}`);
        this.props.history.push("/home");

    }

    pinChanged = i => {
        this.setState({
            pin: i
        }, () => {
            console.log("state changed:", this.state);
        });
    }

    pinCompleted = () => {
        console.log('complete!', this.state)
        this.clickLogin();
    }

    getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        
        this.setState({
            location: res.data
        }, () => {
            console.log("Geo Location:", this.state.location);
        });
    }
}

export default PinLogIn;