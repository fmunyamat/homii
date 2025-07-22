'use client';

import React from 'react';
import { Table } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './Essentials.module.scss';

// Import Map component dynamically to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/ui/Map/Map'), {
    ssr: false,
    loading: () => <div className={styles.mapLoading}>Loading map...</div>
});

// Types
interface Coordinates {
    longitude: number;
    latitude: number;
}

interface ItemIdentification {
    label: string;
}

interface DataItem {
    coordinates?: Coordinates;
    identification?: ItemIdentification;
    properties: Record<string, any>;
}

interface PageProps {
    data: {
        set: {
            items: DataItem[];
        };
    };
}

// Helper functions (these would typically come from a utility library)
const getPropertyByLabel = (properties: Record<string, any>, label: string) => {
    return properties[label] || '';
};

const getUniquePropertyLabels = (properties: Record<string, any>) => {
    return Object.keys(properties);
};

// Logo component (placeholder - replace with actual logo)
const HomiiLogo: React.FC<{ size: string; variant: string }> = ({ size, variant }) => (
    <div className={styles.logo}>
        <span>Homii</span>
    </div>
);

const Essentials: React.FC<PageProps> = ({ 
    data = {
        set: {
            items: [
                {
                    coordinates: { longitude: 33.9292, latitude: 36.0369 },
                    identification: { label: "Sample Location 1" },
                    properties: { type: "Restaurant", rating: "4.5" }
                },
                {
                    coordinates: { longitude: 34.1234, latitude: 36.5678 },
                    identification: { label: "Sample Location 2" },
                    properties: { type: "Hotel", rating: "4.0" }
                }
            ]
        }
    }
}) => {
    const setItems = data?.set?.items || [];
    const propertyLabels = setItems.length > 0 
        ? getUniquePropertyLabels(setItems[0]?.properties || {})
        : [];

    // Page-specific content for Essentials
    const pageTitle = 'Travel Essentials';
    const mainHeading = 'Your Go-To Guide for Seamless Travel';
    const subHeading = 'Everything you need to know, from packing smart to staying connected, ensuring your journey is effortless.';
    const callToActionText = 'Get Started';

    const introHeading = 'Navigating New Horizons with Ease';
    const introParagraph1 = 'Preparing for a trip can be overwhelming, but with Homii, you have a curated resource for all your travel essentials. We focus on practical advice and reliable information to help you manage logistics, so you can focus on the experience.';
    const introParagraph2 = 'From visa requirements to local transportation tips, our Essentials section is designed to equip you with the fundamental knowledge for a smooth transition into any new city or country.';

    const essentialsHeading = 'Key Travel Essentials';
    const essentials = [
        {
            title: 'Packing Smart',
            description: 'Tips for efficient packing, essential items, and adapting your wardrobe to different climates and cultures.',
            icon: '🎒'
        },
        {
            title: 'Connectivity Abroad',
            description: "Options for staying online: eSIMs, local SIM cards, and reliable Wi-Fi hotspots, ensuring you're always connected.",
            icon: '📶'
        },
        {
            title: 'Local Transportation',
            description: 'Guides to public transport, ride-sharing apps, and navigating local travel networks in your destination.',
            icon: '🚗'
        },
        {
            title: 'Health & Wellness',
            description: 'Information on travel insurance, local medical facilities, and maintaining your well-being on the go.',
            icon: '❤️'
        },
        {
            title: 'Banking & Currency',
            description: 'Advice on managing money, currency exchange, international banking, and secure payment methods.',
            icon: '💸'
        },
        {
            title: 'Cultural Etiquette',
            description: 'Insights into local customs, social norms, and respectful interactions to enhance your experience.',
            icon: '🤝'
        }
    ];

    return (
        <>
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
                    <h2>{introHeading}</h2>
                    <p className={styles.problemStatement}>
                        {introParagraph1}
                    </p>
                    <p className={styles.solutionIntro}>
                        {introParagraph2}
                    </p>
                </section>

                <section className={`${styles.contentSection} ${styles.features}`}>
                    <h2>{essentialsHeading}</h2>
                    <div className={styles.featureGrid}>
                        {essentials.map((essential, index) => (
                            <div key={index} className={styles.featureCard}>
                                <span className={styles.featureIcon}>{essential.icon}</span>
                                <h3>{essential.title}</h3>
                                <p>{essential.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.contentSection}>
                    <h2>Local Insights (Placeholder Data)</h2>
                    <p className={styles.problemStatement}>
                        This section uses placeholder data to demonstrate how Homii might integrate local information,
                        such as interesting places or community recommendations, to help you get started in a new
                        location.
                    </p>
                    <div className={styles.mapStyle}>
                        <MapComponent items={setItems} />
                    </div>

                    <div className={styles.tableStyle}>
                        <Table
                            // bordered
                            columns={[
                                {
                                    title: 'Name',
                                    dataIndex: 'label',
                                    key: 'label',
                                    width: 150,
                                },
                                ...propertyLabels.map((label) => ({
                                    title: label,
                                    dataIndex: label,
                                    key: label,
                                }))
                            ]}
                            dataSource={setItems
                                .filter((item) => item.identification?.label)
                                .map((item, index) => {
                                    const row: Record<string, any> = {
                                        key: index,
                                        label: item.identification?.label,
                                    };
                                    propertyLabels.forEach((label) => {
                                        row[label] = getPropertyByLabel(item.properties, label);
                                    });
                                    return row;
                                })}
                            pagination={false}
                            scroll={{ x: 'max-content' }}
                        />
                    </div>

                </section>

                <section className={styles.contentSection}>
                    <h2>Ready for Your Next Adventure?</h2>
                    <p>
                        With Homii's essential guides, you're always prepared. Let us help you unlock a world of
                        seamless travel and meaningful connections.
                    </p>
                    <button className={styles.ctaButton}>Join the Homii Community</button>
                </section>
            </div>
        </>
    );
};

export default Essentials;