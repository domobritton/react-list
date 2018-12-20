import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';


export const SwitchBox = React.createContext()

class Filter extends Component {
    constructor() {
        super()
        this.state = {
            select: 'a'
        }
        
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleCheck(event) {
        this.setState({ select: event.target.value });
        this.props.onClick()
    }

    render() {
        const { select } = this.state

        return (
            <div className="checkboxes">
                <Checkbox
                    checked={select === 'a'}
                    onChange={this.handleCheck}
                    value='a'
                    />
                <label>Name</label>
                <Checkbox
                    checked={select === 'b'}
                    onChange={this.handleCheck}
                    value='b'
                    />
                <label>Age</label>
            </div>
        );
    }
}

export default Filter;