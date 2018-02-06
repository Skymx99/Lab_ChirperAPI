import React, { Component, Fragment } from 'react';
import ChirpForm from './chirpForm';
import ChirpList from './chirpList';
import Chirp from './chirp';
import { Link } from 'react-router-dom';
import Details from './details';

class ViewChirp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirp: {}

        };
    }

    componentDidMount() {
        this.getChirp();
    }

    getChirp() {
        fetch(`/api/chirps/${this.props.match.params.id}`)
            .then((response) => { return response.json() })
            .then((chirp) => {
                this.setState({ chirp });
            });
    }

    updateChirp(text) {
        let id = this.props.match.params.id;

        fetch(`/api/chirps/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text
            })
        }).then(() => {
            this.setState({
                chirp: {
                    text,
                    id
                }
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteChirp() {
        console.log(this.props.match.params.id);
        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <Fragment>
                {/* <div className="card"> */}
                <div className="card-header">
                    Update Chirp
                </div>
                <div>

                    <Details id={this.props.match.params.id} chirp={this.state.chirp} onDelete={() => { this.deleteChirp(this.props.id); }}/>
                    <ChirpForm postChirp={(text) => { this.updateChirp(text); }} />

                </div>
                {/* </div> */}
            </Fragment>);


    }
}

export default ViewChirp;


