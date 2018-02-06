import React from 'react';
import { Link } from 'react-router-dom';
import viewChirp from './viewChirp';

class Details extends React.Component {


    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header text-white">
                                chirp
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>{this.props.chirp.text}</p>
                                    {/* <Link className="btn btn-primary" to={`/chirps/update/${this.props.id}`}>Edit</Link> */}
                                    <footer className="blockquote-footer">Alex Lewis <cite title="Source Title">LCQ Studios</cite></footer>
                                </blockquote>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-1">
                    </div>

                </div>



            </div>
        );
    };
}

export default Details;
