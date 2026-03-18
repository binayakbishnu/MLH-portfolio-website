import React from 'react';
import './Education.css';

function Education() {
    const education = [
        {id: 1, degree: 'Master of Business Administration (MBA)', institution: 'University of Business Excellence', duration: '2017 - 2019', specialization: 'Finance & Investment Management', details: ['GPA: 3.8/4.0', 'Relevant Coursework: Corporate Finance, Financial Modeling, Risk Management']},
        {id: 2, degree: 'Bachelor of Science in Finance', institution: 'Financial Institute of Technology', duration: '2013 - 2017', specialization: 'Financial Analysis', details: ['GPA: 3.7/4.0', 'Relevant Coursework: Financial Analysis, Accounting, Economics']},
    ];

    const certifications = [
        {id: 1, name: 'Chartered Financial Analyst (CFA) Level I', issuer: 'CFA Institute', year: '2021'},
        {id: 2, name: 'Microsoft Certified: Data Analyst Associate', issuer: 'Microsoft', year: '2022'},
        {id: 3, name: 'Financial Risk Manager (FRM)', issuer: 'Global Association of Risk Professionals', year: '2020'},
    ];

    return (
        <section className="education-section">
            <div className="education-container">
                <h2 className="section-title">Education & Certifications</h2>
                <div className="education-content">
                    <div className="education-column">
                        <h3 className="subsection-title">Academic Qualifications</h3>
                        <div className="education-list">
                            {education.map((edu) => (
                                <div key={edu.id} className="education-card">
                                    <div className="education-icon">🎓</div>
                                    <div className="education-info">
                                        <h4 className="education-degree">{edu.degree}</h4>
                                        <p className="education-institution">{edu.institution}</p>
                                        <p className="education-specialization">{edu.specialization}</p>
                                        <p className="education-duration">{edu.duration}</p>
                                        <ul className="education-details">
                                            {edu.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="education-column">
                        <h3 className="subsection-title">Professional Certifications</h3>
                        <div className="certification-list">
                            {certifications.map((cert) => (
                                <div key={cert.id} className="certification-card">
                                    <div className="certification-icon">✓</div>
                                    <div className="certification-info">
                                        <h4 className="certification-name">{cert.name}</h4>
                                        <p className="certification-issuer">{cert.issuer}</p>
                                        <p className="certification-year">{cert.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;