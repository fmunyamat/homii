import React from 'react'
import HomiiLogo from '@/components/ui/HomiiLogo';
import styles from './Nav.module.css';

interface Link {
  label: string;
  path: string;
  className?: string
}

interface NavProps {
  navLinks: Link[];
}

const Nav = ({ navLinks }: NavProps) => {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.headerLeft}>
                <a href="/" className={styles.siteLogoWrapper}>
                    <HomiiLogo size="md" variant="full" />
                </a>
            </div>
            <nav className={styles.mainNav}>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.path} className={link.className}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav
