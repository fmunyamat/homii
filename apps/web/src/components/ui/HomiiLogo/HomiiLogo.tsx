import React from 'react';
import styles from './HomiiLogo.module.css';

export interface HomiiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
  className?: string;
}

const HomiiLogo: 
    React.FC<HomiiLogoProps> = ({ 
        size = 'md', 
        variant = 'full', 
        className = '' 
    }) => {
    const iconSizes = {
        sm: { width: 32, height: 32 },
        md: { width: 48, height: 48 },
        lg: { width: 64, height: 64 },
        xl: { width: 96, height: 96 }
    };

    // Derived properties for SVG dimensions
    const svgWidth = iconSizes[size].width;
    const svgHeight = iconSizes[size].height;

    const logoSvg = (
        <svg
            width={svgWidth}
            height={svgHeight}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
        >
            <circle
                cx="24"
                cy="24"
                r="22"
                fill="var(--homii-light-peach)"
                stroke="var(--homii-cream)"
                strokeWidth="2"
            />

            <path
            d="M16 28V20C16 18.5 17 16 19 16H29C31 16 32 18.5 32 20V28"
            fill="var(--homii-dark-brown)"
            stroke="var(--homii-dark-brown)"
            strokeWidth="2"
            strokeLinejoin="round"
            />

            <path
            d="M14 20L24 12L34 20"
            fill="none"
            stroke="var(--homii-burnt-orange)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            />

            <circle cx="20" cy="24" r="2" fill="var(--homii-warm-orange)" />
            <circle cx="28" cy="24" r="2" fill="var(--homii-warm-orange)" />
            <circle cx="24" cy="20" r="2" fill="var(--homii-connection)" />

            <path
            d="M20 24L24 20L28 24"
            stroke="var(--homii-connection)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
            />

            <rect x="15" y="28" width="18" height="4" rx="2" fill="var(--homii-burnt-orange)" />

            <rect
            x="22"
            y="24"
            width="4"
            height="8"
            rx="2"
            fill="var(--homii-cream)"
            stroke="var(--homii-dark-brown)"
            strokeWidth="1"
            />
        </svg>
    );

    const logoText = (
        <span
            className={`${styles.logoText} ${styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}`]}`}
        >
            Hom<span>ii</span>
        </span>
    );

    switch (variant) {
        case 'icon':
            return <div className={`${styles.logoOnly} ${className}`}>{logoSvg}</div>;
        case 'text':
            return <div className={`${styles.logoOnly} ${className}`}>{logoText}</div>;
        default:
            return <div className={`${styles.logoWrapper} ${className}`}>{logoSvg}{logoText}</div>;
    }
};

export default HomiiLogo;