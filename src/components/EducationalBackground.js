import React from "react";

const EducationalBackground = () => {
    const educations = [
        {
            id: 1,
            institution: 'Häme University of Applied Sciences',
            degree: 'Bachelor of Business Administration',
            year: '2025 (estimated year of graduation)',
            description: ''
        },
        {
            id: 2,
            institution: 'Turku University of Applied Sciences',
            degree: 'Bachelor of Health Care, Laboratory Sciences',
            year: '2009',
            description: 'I have completed advanced studies in clinical chemistry and hematology'
        }
    ];

    return (
        <div className="educational-background container mt-5">
            <h2 className="mb-4">Educational Background</h2>
            <div className="row">
                {educations.map((education) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={education.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{education.institution}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">{education.degree}</h6>
                                <p className="card-text">{education.description}</p>
                            </div>
                            <div className="card-footer text-muted">
                                <small>{education.year}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationalBackground;