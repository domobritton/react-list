import React, {Component} from 'react';
import Filter from './Filter';
import RecordTable from './RecordTable';


class App extends Component {
    constructor() {
        super()
        this.state = {
            value: false
        }
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleCheck() {
        const { value } = this.state
        this.setState({
            value: !value
        });
    }
    render () {
        const { value } = this.state
        return (
            <div className='container-fluid'>
            <center><h1>Birthday Records</h1></center>
            <Filter onClick={this.handleCheck}></Filter>
            <RecordTable values={value}></RecordTable>
            </div>
        )
    }
}
export default App