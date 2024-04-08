import React from "react";

const WorkExperience = () => {
    const works = [
        {
            id: 1,
            employer: 'Mehiläinen ',
            position: 'Bioanalyytikko',
            year: 'May 2015 to Present',
            description: 'I have worked on taking samples and analyzing them. My job also includes working at reception'
        },
        {
            id: 2,
            employer: 'TYKSLAB',
            position: 'Bioanalyytikko',
            year: '2012-2015',
            description: 'I have worked on taking samples and analyzing them.'
        },
        {
            id: 3,
            employer: 'Suomen Lähikauppa Oy',
            position: 'Kassa-myyjä',
            year: '2000-2009',
            description: 'I have also worked as a substitute store manager'
        }
    ];

    return (
        <div className="work-experience container mt-5">
            <h2 className="mb-4">Work Experience</h2>
            <div className="row">
                {works.map((work) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={work.id}>
                        <div className="card h-100 shadow">
                            <div className="card-header">
                                <h5 className="card-title mb-0">{work.employer}</h5>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">{work.position}</h6>
                                <p className="card-text">{work.description}</p>
                            </div>
                            <div className="card-footer text-muted">
                                <small>{work.year}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;