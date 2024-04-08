import React from "react";
import omakuvaImage from '../Assets/Images/omakuva.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const PersonalInfo = () => {
    return (
        <div className="personal-info container mt-5">
            <div className="card mb-3 shadov">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src ={omakuvaImage}
                            alt ="Tanja Eriksson"
                            className = "img-fluid rounded-start" style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Personal Information</h2>
                            <p className="card-text">
                                <strong>Name:</strong> Tanja Eriksson
                            </p>
                            <p className="card-text">
                                <strong>Email:</strong> tanja.eriksson@student.hamk.fi
                            </p>
                            <p className="card-text">
                                <a href="https://www.linkedin.com/in/tanja-eriksson-445356248/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PersonalInfo;










