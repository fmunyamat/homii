'use client'

import FilterBar from '@/components/ui/FilterBar/FilterBar';
import DestinationCard from '@/components/ui/DestinationCard/DestinationCard';

import styles from './Destinations.module.scss';

const Destinations = () => {
    const data = [
        {
            id: 1,
            label: 'Harare, Zimbabwe'
        },
        {
            id:2,
            label: 'London, England'
        }
    ];

    const filterPillObj = [
        {
            label: 'Cost of Living'
        },
        {
            label: 'Internet'
        },
        {
            label: 'Weather'
        },
        {
            label: 'Nightlife'
        }
    ]

    return (
        <div className={styles.destinationsContainer}>
            <div className={styles.destinationHeader}>
                <div className={styles.filterSection}>
                    <FilterBar destinationObj={data} filterPillObj={filterPillObj} />
                </div>
                <div className={styles.pageHeader}>
                    <span className={styles.pageTitle}>Explore Destinations</span>
                    <span className={styles.pageDesc}>Discover amazing cities where digital nomads thrive. Find your next home base with insights from the Homii community.</span>
                </div>
            </div>
            <div className={styles.destinationContent}>
                <div className={styles.destinationCardContainer}>
            </div>
            <div className={styles.destinationFooter}></div>
            </div>
        </div>
    )
}

export default Destinations
