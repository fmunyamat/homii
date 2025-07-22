import React from 'react';
import Link from 'next/link';
import styles from './SafetyTips.module.scss';

const SafetyTips: React.FC = () => {
    const pageTitle = 'Safety Tips';
    const mainHeading = 'Stay Safe, Explore Freely';
    const subHeading =
        'Your well-being is our priority. Learn how Homii helps you navigate new places with confidence.';
    const callToActionText = 'Explore Resources';

    const section1Heading = "Homii's Approach to Safety";
    const section1Paragraph1 =
        "At Homii, we believe that true belonging starts with feeling secure. We've designed our platform with multiple layers of safety in mind, from verified profiles to community-driven insights, ensuring you have the tools and information to make informed decisions.";
    const section1Paragraph2 =
        "Our goal is to empower you with knowledge and resources, fostering a trusted environment where you can connect, explore, and live without undue worry. Your safety is a shared responsibility, and we're here to support you every step of the way.";

    const tipsHeading = 'Essential Safety Tips for Travelers';

    const tips = [
        {
            title: 'Trust Your Instincts',
            description:
                'If a situation feels off, it probably is. Prioritize your gut feeling and remove yourself from uncomfortable situations.',
            icon: '💡'
        },
        {
            title: 'Share Your Itinerary',
            description:
                'Always let a trusted friend or family member know your travel plans, accommodations, and expected return dates.',
            icon: '📍'
        },
        {
            title: 'Secure Your Valuables',
            description:
                'Use hotel safes, keep important documents secure, and be aware of your surroundings, especially in crowded areas.',
            icon: '🔒'
        },
        {
            title: 'Local Emergency Contacts',
            description:
                "Familiarize yourself with local emergency numbers (police, ambulance) and your country's embassy or consulate.",
            icon: '🚨'
        },
        {
            title: 'Stay Connected',
            description:
                'Ensure your phone is charged, and consider a local SIM card or eSIM for reliable communication and data access.',
            icon: '📱'
        },
        {
            title: 'Research Local Customs',
            description:
                'Understanding local norms and traditions can help you avoid misunderstandings and show respect.',
            icon: '🌍'
        }
    ];

    const communitySafetyHeading = 'Community Guidelines & Reporting';
    const communitySafetyParagraph =
        'Homii thrives on trust and mutual respect. We have strict community guidelines to ensure a safe environment for all members. If you encounter any behavior that violates these guidelines, please report it immediately. Our moderation team is dedicated to reviewing reports and taking appropriate action to maintain a positive and secure community space.';

    const additionalResources =
        'For additional safety information and travel advisories, consult official government travel websites and local authorities.';

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
                <h2>{section1Heading}</h2>
                <p className={styles.problemStatement}>
                    {section1Paragraph1}
                </p>
                <p className={styles.solutionIntro}>
                    {section1Paragraph2}
                </p>
            </section>

            <section className={`${styles.contentSection} ${styles.features}`}>
                <h2>{tipsHeading}</h2>
                <div className={styles.featureGrid}>
                    {tips.map((tip, index) => (
                        <div key={index} className={styles.featureCard}>
                            <span className={styles.featureIcon}>{tip.icon}</span>
                            <h3>{tip.title}</h3>
                            <p>{tip.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2>{communitySafetyHeading}</h2>
                <p>{communitySafetyParagraph}</p>
                <p className={styles.launchCities}>{additionalResources}</p>
                <button className={`${styles.ctaButton} ${styles.secondaryCta}`}>
                    Report an Issue
                </button>
            </section>
        </div>
    );
};

export default SafetyTips;