import React, {Component} from 'react';

class BtnAddToJob extends Component {
    render() {
        const {job} = this.props;

        return (
            <button onClick={event => this.props.addToJob(job)}>
                {this.props.children}
            </button>
        );
    }
}

export default BtnAddToJob;