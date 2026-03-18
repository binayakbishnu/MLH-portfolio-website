import React from 'react';
import './Achievements.css';

function Achievements() {
    const achievements = [
        {id: 1, title: 'Financial Excellence Award', description: 'Recognized for outstanding financial analysis and strategic recommendations', year: '2023', icon: '🏆'},
        {id: 2, title: 'Cost Reduction Initiative', description: 'Led company-wide initiative that reduced operational costs by 18%', year: '2022', icon: '📊'},
        {id: 3, title: 'Process Optimization', description: 'Developed automated financial reporting system, saving 40 hours monthly', year: '2022', icon: '⚙️'},
        {id: 4, title: 'Team Leadership', description: 'Successfully led and mentored a team of 5 junior analysts', year: '2023', icon: '👥'}
    ];

    const hobbies = [
        {id: 1, hobby: 'Financial Blogging', description: 'Maintaining a blog with 10K+ followers discussing investment strategies'},
        {id: 2, hobby: 'Stock Market Analysis', description: 'Active trader and investor with 5+ years of experience in equity markets'},
        {id: 3, hobby: 'Data Visualization', description: 'Enthusiast in creating compelling financial dashboards and presentations'},
        {id: 4, hobby: 'Mentoring', description: 'Passionate about mentoring aspiring financial professionals and analysts'},
        {id: 5, hobby: 'Reading', description: 'Avid reader of financial literature, business strategy, and economics'},
        {id: 6, hobby: 'Fitness & Wellness', description: 'Marathon runner and fitness enthusiast maintaining work-life balance'}
    ];

    return (
        <section className="achievements-section">
            <div className="achievements-container">
                <h2 className="section-title">Achievements & Hobbies</h2>
                <div className="achievements-content">
                    <div className="achievements-column">
                        <h3 className="subsection-title">Key Achievements</h3>
                        <div className="achievements-grid">
                            {achievements.map((achievement) => (
                                <div key={achievement.id} className="achievement-card">
                                    <div className="achievement-icon">{achievement.icon}</div>
                                    <h4 className="achievement-title">{achievement.title}</h4>
                                    <p className="achievement-description">{achievement.description}</p>
                                    <p className="achievement-year">{achievement.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="achievements-column">
                        <h3 className="subsection-title">Hobbies & Interests</h3>
                        <div className="hobbies-list">
                            {hobbies.map((hobby) => (
                                <div key={hobby.id} className="hobby-card">
                                    <h4 className="hobby-title">{hobby.hobby}</h4>
                                    <p className="hobby-description">{hobby.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;