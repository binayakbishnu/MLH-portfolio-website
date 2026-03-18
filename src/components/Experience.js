import React from 'react';
import './Experience.css';

function Experience() {
    const experiences = [
        {id: 1, title: 'Senior Financial Analyst', company: 'Global Investment Corp', duration: 'January 2022 - Present', description: ['Led comprehensive financial analysis and forecasting for 5+ portfolio companies', 'Developed financial models reducing forecasting errors by 25%', 'Conducted detailed variance analysis and presented insights to senior management']},
        {id: 2, title: 'Financial Analyst', company: 'Premier Financial Services', duration: 'June 2020 - December 2021', description: ['Performed financial statement analysis and valuation modeling', 'Supported mergers and acquisitions due diligence processes', 'Created dashboards and automated reporting tools using Excel and SQL']},
        {id: 3, title: 'Junior Financial Analyst', company: 'Capital Advisory Group', duration: 'August 2019 - May 2020', description: ['Assisted in financial modeling and sensitivity analysis', 'Prepared monthly financial reports and performance summaries', 'Maintained financial databases and ensured data accuracy']}
    ];

    return (
        <section className="experience-section">
            <div className="experience-container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="experience-card">
                            <div className="experience-marker">{index + 1}</div>
                            <div className="experience-content">
                                <h3 className="experience-title">{exp.title}</h3>
                                <p className="experience-company">{exp.company}</p>
                                <p className="experience-duration">{exp.duration}</p>
                                <ul className="experience-description">
                                    {exp.description.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;