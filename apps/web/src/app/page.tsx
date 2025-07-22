import React from 'react';
import styles from './page.module.scss';

const HomePage = () => {
    const mainHeading = 'Belong Anywhere';
    const subHeading = 'Redefining global experiences for digital nomads, slow travelers, and expats. Find your community, safely.';
    const callToActionText = 'Join Homii';

    const problemStatement = 'Digital nomads, slow travelers, and expats deserve safe, reliable experiences and recommendations from trusted sources. Local businesses want to connect directly with new regulars. Creators need a digital space to host their followers and build community.';
    const solutionIntro = 'Homii is where logistics meet belonging. We\'re building the infrastructure for identity-aware travel planning, city-specific guides, trusted local business reviews, and real-time connections.';
    const featuresHeading = 'More Than Just Travel';

    const features = [
        {
            title: 'Identity-Aware Connections',
            description: 'Create profiles reflecting who you are (LGBTQ+, Black, Muslim, solo female, etc.) and get curated insights from shared experiences.',
            icon: '👥'
        },
        {
            title: 'Trusted Local Guides',
            description: 'Discover housing, events, visa info, coworking spots, and more, all reviewed by a community you trust.',
            icon: '📍'
        },
        {
            title: 'Empowering Local Businesses & Communities',
            description: 'Local businesses gain visibility, and community groups can host events and welcome newcomers with dedicated tools.',
            icon: '🤝'
        }
    ];

    const missionStatement = 'The travel industry has spent decades optimizing for booking. Homii is optimizing for belonging. We\'re not just building a marketplace; we\'re building the system people didn\'t know they needed—but won\'t travel without again.';
    const launchCities = 'Launching first in high-growth cities like Hanoi, Medellín, and Bangkok, where travelers seek trusted connections from day one.';

    return (
        <div className={styles.landingPageContainer}>

            <div className={styles.headerSpacer}></div>

            <div className={styles.heroContent}>
                <p className={styles.mainHeading}>{mainHeading}</p>
                <p className={styles.subHeading}>{subHeading}</p>
                <button className={styles.ctaButton}>
                    {callToActionText}
                </button>
            </div>

            <section className={styles.contentSection}>
                <h2>Why Homii?</h2>
                <p className={styles.problemStatement}>
                    {problemStatement}
                </p>
                <p className={styles.solutionIntro}>
                    {solutionIntro}
                </p>
            </section>

            <section className={`${styles.contentSection} ${styles.features}`}>
                <h2>{featuresHeading}</h2>
                <div className={styles.featureGrid}>
                    {
                        features.map((feature, index) => (
                            <div className={styles.featureCard} key={index}>
                                <span className={styles.featureIcon}>{feature.icon}</span>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2>Our Mission</h2>
                <p>{missionStatement}</p>
                <p className={styles.launchCities}>{launchCities}</p>
                <button className={styles.ctaButton}>
                    {callToActionText}
                </button>
            </section>
        </div>
    );
}

export default HomePage;