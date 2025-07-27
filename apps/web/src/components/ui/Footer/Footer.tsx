import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    TextField,
    Typography
} from '@mui/material';
import {
    Facebook,
    Instagram,
    LinkedIn,
    X
} from '@mui/icons-material';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <>
            <Box className={styles.footer}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Typography variant="h6" className={styles.footerLogo}>
                                Homii
                            </Typography>
                            <Typography variant="body2" className={styles.footerDescription}>
                                Connecting digital nomads and travelers with their perfect destinations around the world.
                            </Typography>
                        </Grid>
                        
                        <Grid size={{ xs: 12, md: 2 }}>
                            <Typography variant="h6" className={styles.footerHeading}>
                                Explore
                            </Typography>
                            <Box className={styles.footerLinks}>
                                <Link href="#" className={styles.footerLink}>Destinations</Link>
                                <Link href="#" className={styles.footerLink}>Communities</Link>
                                <Link href="#" className={styles.footerLink}>Events</Link>
                                <Link href="#" className={styles.footerLink}>Resources</Link>
                            </Box>
                        </Grid>
                        
                        <Grid size={{ xs: 12, md: 2 }}>
                            <Typography variant="h6" className={styles.footerHeading}>
                                Company
                            </Typography>
                            <Box className={styles.footerLinks}>
                                <Link href="#" className={styles.footerLink}>About Us</Link>
                                <Link href="#" className={styles.footerLink}>Careers</Link>
                                <Link href="#" className={styles.footerLink}>Press</Link>
                                <Link href="#" className={styles.footerLink}>Contact</Link>
                            </Box>
                        </Grid>
                        
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Typography variant="h6" className={styles.footerHeading}>
                                Connect
                            </Typography>
                            <Box className={styles.socialLinks}>
                                <IconButton className={styles.socialIcon}>
                                    <Instagram />
                                </IconButton>
                                <IconButton className={styles.socialIcon}>
                                    <X />
                                </IconButton>
                                <IconButton className={styles.socialIcon}>
                                    <Facebook />
                                </IconButton>
                                <IconButton className={styles.socialIcon}>
                                    <LinkedIn />
                                </IconButton>
                            </Box>
                            
                            <Typography variant="body2" className={styles.newsletterText}>
                                Subscribe to our newsletter
                            </Typography>
                            <Box className={styles.newsletterForm}>
                                <TextField
                                    placeholder="Your email"
                                    variant="outlined"
                                    size="small"
                                    className={styles.emailInput}
                                />
                                <Button variant="contained" className={styles.subscribeButton}>
                                    Subscribe
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    <Divider className={styles.footerDivider} />
                    
                    <Box className={styles.footerBottom}>
                        <Typography variant="body2" className={styles.copyright}>
                            © 2025 Homii. All rights reserved.
                        </Typography>
                        <Box className={styles.footerBottomLinks}>
                            <Link href="#" className={styles.footerBottomLink}>Privacy Policy</Link>
                            <Link href="#" className={styles.footerBottomLink}>Terms of Service</Link>
                            <Link href="#" className={styles.footerBottomLink}>Cookie Policy</Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Footer
