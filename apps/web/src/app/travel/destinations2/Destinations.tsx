'use client'

import React from 'react';

import FilterBar from '@/components/ui/FilterBar/FilterBar';
import DestinationCard from '@/components/ui/DestinationCard/DestinationCard';

import styles from './Destinations.module.scss';

const Destinations = () => {
    const destinationArray = [
        {
            id: 1,
            label: 'Mexico City, Mexico',
            image: 'https://afar.brightspotcdn.com/dims4/default/636ca73/2147483647/strip/false/crop/2667x1500+167+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F22%2Fa3%2Fbf9b1d384ca8a9dcb732491dfadf%2Ftravelguide-mexicocity-ramiroreynajr.jpg',
            city: 'Mexico City',
            memberCount: 146,
            avatars: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32'],
            rating: 4.3
        },
        {
            id: 2,
            label: 'Bali, Indonesia',
            image: 'https://www.pelago.com/img/destinations/bali/0619-0941_bali.jpg',
            city: 'Bali',
            memberCount: 58,
            avatars: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32'],
            rating: 4.6
        },
        {
            id: 3,
            label: 'Lisbon, Portugal',
            image: 'https://images.goway.com/production/styles/hero_s1_2xl/s3/hero/iStock-1137863101.jpg.webp?VersionId=TNqde4tjrqdi_HRPUjK4M.ozf0__Ik67&itok=_3r2F97l',
            city: 'Lisbon',
            memberCount: 92,
            avatars: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32'],
            rating: 3.9
        },
        {
            id: 4,
            label: 'Mexico City, Mexico',
            image: 'https://afar.brightspotcdn.com/dims4/default/636ca73/2147483647/strip/false/crop/2667x1500+167+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F22%2Fa3%2Fbf9b1d384ca8a9dcb732491dfadf%2Ftravelguide-mexicocity-ramiroreynajr.jpg',
            city: 'Mexico City',
            memberCount: 146,
            avatars: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32'],
            rating: 4.3
        },
        {
            id: 5,
            label: 'Bali, Indonesia',
            image: 'https://www.pelago.com/img/destinations/bali/0619-0941_bali.jpg',
            city: 'Bali',
            memberCount: 58,
            avatars: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32'],
            rating: 4.6
        },
        {
            id: 6,
            label: 'Lisbon, Portugal',
            image: 'https://images.goway.com/production/styles/hero_s1_2xl/s3/hero/iStock-1137863101.jpg.webp?VersionId=TNqde4tjrqdi_HRPUjK4M.ozf0__Ik67&itok=_3r2F97l',
            city: 'Lisbon',
            memberCount: 92,
            avatars: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32'],
            rating: 3.9
        },
        {
            id: 7,
            label: 'Mexico City, Mexico',
            image: 'https://afar.brightspotcdn.com/dims4/default/636ca73/2147483647/strip/false/crop/2667x1500+167+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F22%2Fa3%2Fbf9b1d384ca8a9dcb732491dfadf%2Ftravelguide-mexicocity-ramiroreynajr.jpg',
            city: 'Mexico City',
            memberCount: 146,
            avatars: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32'],
            rating: 4.3
        },
        {
            id: 8,
            label: 'Bali, Indonesia',
            image: 'https://www.pelago.com/img/destinations/bali/0619-0941_bali.jpg',
            city: 'Bali',
            memberCount: 58,
            avatars: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32'],
            rating: 4.6
        },
        {
            id: 9,
            label: 'Lisbon, Portugal',
            image: 'https://images.goway.com/production/styles/hero_s1_2xl/s3/hero/iStock-1137863101.jpg.webp?VersionId=TNqde4tjrqdi_HRPUjK4M.ozf0__Ik67&itok=_3r2F97l',
            city: 'Lisbon',
            memberCount: 92,
            avatars: ['/api/placeholder/32/32', '/api/placeholder/32/32', '/api/placeholder/32/32'],
            rating: 3.9
        }
    ];
    
    const filterPillArray = [
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
    ];

    return (
        <div className={styles.destinationsContainer}>
            <div className={styles.filters}>
                <FilterBar destinationArray={destinationArray} filterPillArray={filterPillArray} />
            </div>
            <div className={styles.pageHeader}>
                <span className={styles.pageTitle}>Explore Destinations</span>
                <span className={styles.pageDesc}>Discover amazing cities where digital nomads thrive. Find your next home base with insights from the Homii community.</span>
            </div>
            <div className={styles.destinationCardContainer}>
                {
                    destinationArray.map((data) => (
                        <React.Fragment key={data.id}>
                            <DestinationCard
                                imgSrc={data.image}
                                imgAlt={`${data.city} photo`}
                                city={data.city}
                                memberCount={data.memberCount}
                                avatarArray={data.avatars}
                                rating={data.rating}
                            />
                        </React.Fragment>
                    ))

                }
            </div>
            <div className={styles.button}>
                <button className={styles.loadButton}>Load More Destinations</button>
            </div>
        </div>
    )
}

export default Destinations
