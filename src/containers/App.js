import React, {Component} from 'react';
import './App.css';
import Aux from '../hoc/Aux';
import randomName from '../util/name-generator';

class App extends Component {
    state = {
        names: ["Max", "Helena", "Michael"],
        counter: 0
    };

    render() {
        return (
            <Aux>
                <ul className="App">
                    {this.state.names.map(it => <li key={it}>{it}</li>)}
                </ul>
                <button onClick={this.addName}>Add some</button>
            </Aux>
        );
    }

    addName = () => {
        this.setState({
            names: [...this.state.names, randomName()],
            counter: this.state.counter + 1
        })
    }
}

export default App;
