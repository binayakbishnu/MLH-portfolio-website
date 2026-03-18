import React from 'react';
import './Welcome.css';

function Welcome() {
    return (
        <section className="welcome-section">
            <div className="welcome-container">
                <div className="welcome-content">
                    <h1 className="welcome-title">Binayak Bishnubar</h1>
                    <p className="welcome-subtitle">Financial Analyst</p>
                    <p className="welcome-description">Experienced and results-driven Financial Analyst with strong expertise in financial modeling, data analysis, and strategic decision-making. Passionate about transforming complex financial data into actionable insights for business growth and profitability.</p>
                    <div className="welcome-cta">
                        <button className="btn-primary">Download Resume</button>
                        <button className="btn-secondary">Get In Touch</button>
                    </div>
                </div>
                <div className="welcome-avatar">
                    <div className="avatar-placeholder">BA</div>
                </div>
            </div>
        </section>
    );
}

export default Welcome;