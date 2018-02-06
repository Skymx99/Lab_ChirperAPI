import React, { Component } from 'react';

class EditChirp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirp: ''
        };
    }

    handleInputChange(chirp) {
        this.setState({ chirp });
        console.log(this.state.chirp)
    };

    updateChirp(text) {
        fetch('/api/chirps/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text
            })
        }).then(() => {
            console.log('success');
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <form className="card p-3 m-1">
                <label
                    htmlFor="chirp-input"
                    className="d-block m-2">Update Chirp:
                </label>
                <input
                    value={this.state.chirp}
                    onChange={(event) => { this.handleInputChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder={this.state.chirp}
                />
                <button
                    onClick={() => { this.props.updateChirp(this.state.chirp) }}
                    type="button"
                    className="btn btn-primary m-2">Save!
                </button>
            </form>
        );
    };
}

export default EditChirp;
