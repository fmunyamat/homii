import styles from './BeforeYouGo.module.scss';

const BeforeYouGo = () => {
    const pageTitle = 'Before You Go: Your Ultimate Pre-Travel Checklist';
    const introText =
        "Ensure a smooth and stress-free journey with our comprehensive guide to pre-departure essentials. From vital documents to cultural insights, we've got you covered.";

    const tips = [
        {
            label: 'Confirm',
            text: 'visa and entry requirements for your destination and check passport validity.'
        },
        {
            label: 'Research',
            text: 'local health advisories, vaccinations, and pack a basic first-aid kit.'
        },
        {
            label: 'Understand',
            text: 'local currency, banking options, and inform your bank of travel dates.'
        },
        {
            label: 'Plan',
            text: 'connectivity using an eSIM, international roaming, or a local SIM card.'
        },
        {
            label: 'Familiarize',
            text: 'yourself with local customs, etiquette, and basic phrases.'
        },
        {
            label: 'Organize',
            text: 'travel insurance covering medical emergencies, cancellations, and lost luggage.'
        },
        {
            label: 'Pack',
            text: 'adaptors and voltage converters, checking local power standards.'
        },
        {
            label: 'Make',
            text: 'copies of important documents and store them securely, physically and digitally.'
        }
    ];

    const closingText =
        "With these preparations, you're set to embrace your adventure with confidence and peace of mind.";

    return (
        <div className={styles.landingPageContainer}>
            <div className={styles.pageContentWrapper}>
                <h1>{pageTitle}</h1>
                <p>
                    {introText}
                </p>

                <ul className={styles.tipList}>
                    {
                        tips.map((tip, index) => (
                            <li key={index}>
                                <span className={styles.icon}>🧳</span>
                                <b>{tip.label}</b> {tip.text}
                            </li>
                        ))
                    }
                </ul>

                <p>{closingText}</p>
            </div>
        </div>
    )
}

export default BeforeYouGo
