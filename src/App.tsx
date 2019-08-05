import React, {Component} from 'react';
import logo from './logo.svg';
import RouteExample from './example/Route1';
import ModalExample from './example/Modal';
import './App.scss';

class App extends Component {

    readonly state = {
        apiRespose: ""
    } as any;

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        console.info(this.state);

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">{this.state.apiResponse}</p>
                <p className="App-intro">
                    <ModalExample />
                </p>
                <p className="App-intro">
                    <RouteExample />
                </p>
            </div>
        );
    }
}

export default App;
