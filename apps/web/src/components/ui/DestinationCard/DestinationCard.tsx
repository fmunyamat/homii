import { Avatar, AvatarGroup, Rating, Typography } from '@mui/material';
import styles from './DestinationCard.module.scss';

interface Props {
    imgSrc: string,
    imgAlt: string,
    city: string,
    avatarArray: [],
    memberCount: number,
    rating: number
}

const DestinationCard = ({
    imgSrc,
    imgAlt,
    city,
    avatarArray,
    memberCount,
    rating
}: Props) => {
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.cardImage}>
                    <img src={imgSrc} alt={imgAlt}/>
                </div>
                <div className={styles.cardInfo}>
                    <div className={styles.cityInfo}>
                        <span className={styles.cityName}>{city}</span>
                    </div>
                    <div className={styles.membersInfo}>
                        <AvatarGroup max={3} className={styles.avatarGroup}>
                            {avatarArray.map((avatar, index) => (
                                <Avatar
                                    key={index}
                                    src={avatar}
                                    className={styles.memberAvatar}
                                    sx={{ width: 24, height: 24 }}
                                />
                            ))}
                        </AvatarGroup>
                        <Typography variant="body2" className={styles.memberCount}>
                            {memberCount} Homii members
                        </Typography>
                    </div>
                    <div className={styles.ratingInfo}>
                        <Rating
                            value={rating}
                            precision={0.1}
                            size="small"
                            readOnly
                            className={styles.rating}
                        />
                        <Typography variant="body2" className={styles.ratingText}>
                            {rating} avg rating
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationCard
