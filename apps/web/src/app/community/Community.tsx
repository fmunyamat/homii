// 'use client';

// import React, { useState } from 'react';
// import { Heart, MessageCircle, Share, MapPin, Camera, Plus } from 'lucide-react';
// import styles from './Community.module.scss';

// interface User {
//     name: string;
//     avatar: string;
//     handle: string;
// }

// interface Post {
//     id: number;
//     user: User;
//     location: string;
//     image: string;
//     caption: string;
//     likes: number;
//     comments: number;
//     timeAgo: string;
// }

// const CommunityFeed: React.FC = () => {
//     const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

//     const toggleLike = (postId: number) => {
//         setLikedPosts(prev => {
//             const newSet = new Set(prev);
//             if (newSet.has(postId)) {
//                 newSet.delete(postId);
//             } else {
//                 newSet.add(postId);
//             }

//             return newSet;
//         });
//     };

//     const posts: Post[] = [
//         {
//             id: 1,
//             user: { name: 'Emma Chen', avatar: '👩🏻‍💼', handle: '@emmaxplores' },
//             location: 'Central Park, NYC',
//             image: 'https://visitnyc.com/wp-content/uploads/2024/05/img-Discovering-The-X-Fun-Things-To-Do-In-Central-Park-NYC.jpg',
//             caption: 'Morning jog through the most beautiful autumn leaves! 🍂 Nothing beats starting the day in nature right in the heart of the city.',
//             likes: 47,
//             comments: 8,
//             timeAgo: '2h'
//         },
//         {
//             id: 2,
//             user: { name: 'Jake Morrison', avatar: '👨🏼‍🎨', handle: '@jakesnaps' },
//             location: 'Tokyo, Japan',
//             image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop',
//             caption: 'Street food heaven! This takoyaki stand has been here for 30 years and it shows in every bite 🐙✨',
//             likes: 132,
//             comments: 23,
//             timeAgo: '4h'
//         },
//         {
//             id: 3,
//             user: { name: 'Sofia Martinez', avatar: '👩🏽‍🎨', handle: '@sofiashoots' },
//             location: 'Barcelona, Spain',
//             image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
//             caption: 'Local market vibes are unmatched! Fresh flowers, warm bread, and the kindest vendors. This is why I love my neighborhood 💐',
//             likes: 89,
//             comments: 15,
//             timeAgo: '6h'
//         },
//         {
//             id: 4,
//             user: { name: 'Alex Rivera', avatar: '🧑🏻‍💻', handle: '@alexadventures' },
//             location: 'Portland, OR',
//             image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
//             caption: 'Rainy Portland days call for cozy coffee shops and good books ☕️ Found this gem just around the corner from my apartment!',
//             likes: 64,
//             comments: 11,
//             timeAgo: '8h'
//         }
//     ];

//     return (
//         <div className={styles.container}>
//             {/* Header */}
//             <header className={styles.header}>
//                 <div className={styles.headerContent}>
//                     <div className={styles.logo}>
//                         <div className={styles.logoIcon}>
//                             <Camera size={20} />
//                         </div>
//                         <h1 className={styles.logoText}>Homii</h1>
//                     </div>
//                     <button className={styles.addButton}>
//                         <Plus size={20} />
//                     </button>
//                 </div>
//             </header>

//             {/* Feed */}
//             <main className={styles.feed}>
//                 {posts.map((post, index) => (
//                     <article
//                         key={post.id}
//                         className={`${styles.polaroidWrapper} ${
//                             index % 2 === 0 ? styles.rotateLeft : styles.rotateRight
//                         }`}
//                     >
//                         <div className={styles.polaroid}>
//                             {/* Tape Effects */}
//                             <div className={`${styles.tape} ${styles.tapeLeft}`}></div>
//                             <div className={`${styles.tape} ${styles.tapeRight}`}></div>

//                             {/* User Info */}
//                             <div className={styles.userInfo}>
//                                 <div className={styles.avatar}>
//                                     {post.user.avatar}
//                                 </div>
//                                 <div className={styles.userDetails}>
//                                     <h3 className={styles.userName}>{post.user.name}</h3>
//                                     <p className={styles.userHandle}>{post.user.handle}</p>
//                                 </div>
//                                 <span className={styles.timeAgo}>{post.timeAgo}</span>
//                             </div>

//                             {/* Image */}
//                             <div className={styles.imageContainer}>
//                                 <img
//                                     src={post.image}
//                                     alt="Post"
//                                     className={styles.postImage}
//                                 />
//                                 <div className={styles.vintageOverlay}></div>
//                             </div>

//                             {/* Location */}
//                             <div className={styles.location}>
//                                 <MapPin size={12} />
//                                 <span>{post.location}</span>
//                             </div>

//                             {/* Caption */}
//                             <p className={styles.caption}>{post.caption}</p>

//                             {/* Actions */}
//                             <div className={styles.actions}>
//                                 <div className={styles.actionButtons}>
//                                     <button
//                                     onClick={() => toggleLike(post.id)}
//                                     className={`${styles.actionButton} ${
//                                     likedPosts.has(post.id) ? styles.liked : ''
//                                     }`}
//                                     >
//                                         <Heart
//                                         size={20}
//                                         fill={likedPosts.has(post.id) ? 'currentColor' : 'none'}
//                                         />
//                                         <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
//                                     </button>

//                                     <button className={styles.actionButton}>
//                                         <MessageCircle size={20} />
//                                         <span>{post.comments}</span>
//                                     </button>
//                                 </div>

//                                 <button className={styles.shareButton}>
//                                     <Share size={20} />
//                                 </button>
//                             </div>
//                         </div>
//                     </article>
//                 ))}
//             </main>

//             {/* Bottom Tab Bar */}
//             {/* <nav className={styles.tabBar}>
//             <div className={styles.tabBarContent}>
//             <button className={`${styles.tabButton} ${styles.tabButtonActive}`}>
//             <Camera size={24} />
//             </button>
//             <button className={styles.tabButton}>
//             <Heart size={24} />
//             </button>
//             <button className={styles.tabButton}>
//             <MapPin size={24} />
//             </button>
//             <button className={styles.tabButton}>
//             <MessageCircle size={24} />
//             </button>
//             </div>
//             </nav>

//             <div className={styles.bottomSpacer}></div> */}
//         </div>
//     );
// };

// export default CommunityFeed;


'use client';

import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share, MapPin, Camera, Plus } from 'lucide-react';
import HomiiLogo from '@/components/ui/HomiiLogo';
import styles from './Community.module.scss';

interface User {
  name: string;
  avatar: string;
  handle: string;
}

interface Post {
  id: number;
  user: User;
  location: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  position?: {
    x: number;
    y: number;
    rotation: number;
    zIndex: number;
  };
}

const CommunityFeed: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [positionedPosts, setPositionedPosts] = useState<Post[]>([]);
  const [boardHeight, setBoardHeight] = useState(0);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  // Generate random positions for polaroids
const generateRandomPosition = (
    index: number,
    containerWidth: number,
    cardWidth = 250,
    cardHeight = 350,
    gap = 200
): Post['position'] => {
    const columns = Math.floor(containerWidth / (cardWidth + gap));
    const column = index % columns;
    const row = Math.floor(index / columns);

    const baseX = column * (cardWidth + gap);
    const baseY = row * (cardHeight + gap);

    // Add slight random offset for that "tacked on board" look
    const x = baseX + (Math.random() * 20 - 10); // ±10px
    const y = baseY + (Math.random() * 20 - 10); // ±10px

    return {
        x,
        y,
        rotation: (Math.random() - 0.5) * 8, // -4° to +4°
        zIndex: row + 1
    };
};

  const positionPosts = () => {
    if (typeof window === 'undefined') return;
    
    const containerWidth = Math.min(window.innerWidth - 40, 1200); // Max width with margins
    const positioned = posts.map((post, index) => ({
      ...post,
      position: generateRandomPosition(index, 1500)
    }));
    
    // Calculate total height needed
    const maxY = Math.max(...positioned.map(p => (p.position?.y || 0) + 400)); // 400px for polaroid height
    setBoardHeight(maxY + 100);
    setPositionedPosts(positioned);
  };

  useEffect(() => {
    positionPosts();
    
    const handleResize = () => {
      positionPosts();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const posts: Post[] = [
    {
      id: 1,
      user: { name: 'Emma Chen', avatar: '👩🏻‍💼', handle: '@emmaxplores' },
      location: 'Central Park, NYC',
      image: 'https://visitnyc.com/wp-content/uploads/2024/05/img-Discovering-The-X-Fun-Things-To-Do-In-Central-Park-NYC.jpg',
      caption: 'Morning jog through the most beautiful autumn leaves! 🍂 Nothing beats starting the day in nature right in the heart of the city.',
      likes: 47,
      comments: 8,
      timeAgo: '2h'
    },
    {
      id: 2,
      user: { name: 'Jake Morrison', avatar: '👨🏼‍🎨', handle: '@jakesnaps' },
      location: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop',
      caption: 'Street food heaven! This takoyaki stand has been here for 30 years and it shows in every bite 🐙✨',
      likes: 132,
      comments: 23,
      timeAgo: '4h'
    },
    {
      id: 3,
      user: { name: 'Sofia Martinez', avatar: '👩🏽‍🎨', handle: '@sofiashoots' },
      location: 'Barcelona, Spain',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      caption: 'Local market vibes are unmatched! Fresh flowers, warm bread, and the kindest vendors. This is why I love my neighborhood 💐',
      likes: 89,
      comments: 15,
      timeAgo: '6h'
    },
    {
      id: 4,
      user: { name: 'Alex Rivera', avatar: '🧑🏻‍💻', handle: '@alexadventures' },
      location: 'Portland, OR',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
      caption: 'Rainy Portland days call for cozy coffee shops and good books ☕️ Found this gem just around the corner from my apartment!',
      likes: 64,
      comments: 11,
      timeAgo: '8h'
    },
    {
      id: 5,
      user: { name: 'Emma Chen', avatar: '👩🏻‍💼', handle: '@emmaxplores' },
      location: 'Central Park, NYC',
      image: 'https://visitnyc.com/wp-content/uploads/2024/05/img-Discovering-The-X-Fun-Things-To-Do-In-Central-Park-NYC.jpg',
      caption: 'Morning jog through the most beautiful autumn leaves! 🍂 Nothing beats starting the day in nature right in the heart of the city.',
      likes: 47,
      comments: 8,
      timeAgo: '2h'
    },
    {
      id: 6,
      user: { name: 'Jake Morrison', avatar: '👨🏼‍🎨', handle: '@jakesnaps' },
      location: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop',
      caption: 'Street food heaven! This takoyaki stand has been here for 30 years and it shows in every bite 🐙✨',
      likes: 132,
      comments: 23,
      timeAgo: '4h'
    },
    {
      id: 7,
      user: { name: 'Sofia Martinez', avatar: '👩🏽‍🎨', handle: '@sofiashoots' },
      location: 'Barcelona, Spain',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      caption: 'Local market vibes are unmatched! Fresh flowers, warm bread, and the kindest vendors. This is why I love my neighborhood 💐',
      likes: 89,
      comments: 15,
      timeAgo: '6h'
    },
    {
      id: 8,
      user: { name: 'Alex Rivera', avatar: '🧑🏻‍💻', handle: '@alexadventures' },
      location: 'Portland, OR',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
      caption: 'Rainy Portland days call for cozy coffee shops and good books ☕️ Found this gem just around the corner from my apartment!',
      likes: 64,
      comments: 11,
      timeAgo: '8h'
    }
  ];

  return (
    <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
            <div className={styles.logo}>
                <HomiiLogo size='md' variant='full' />
                {/* <h1 className={styles.logoText}>Homii</h1> */}
            </div>
            <button className={styles.addButton}>
                <Plus size={20} />
            </button>
        </header>

        {/* Tack Board */}
        <main className={styles.tackBoard} style={{ height: `${boardHeight}px` }}>
            {/* <div className={styles.boardTexture}></div> */}
            <div className={styles.polaroidContainer}>
                {positionedPosts.map((post) => (
                    <article
                        key={post.id}
                        className={styles.polaroidWrapper}
                        style={{
                        // position: 'absolute',
                        // left: `${post.position?.x}px`,
                        // top: `${post.position?.y}px`,
                        transform: `rotate(${post.position?.rotation}deg)`,
                        zIndex: post.position?.zIndex
                        }}
                    >
                        {/* > */}
                        <div className={styles.polaroid}>
                            {/* Push Pin */}
                            <div className={styles.pushPin}></div>
                            
                            {/* Tape Effects */}
                            {/* <div className={`${styles.tape} ${styles.tapeLeft}`}></div>
                            <div className={`${styles.tape} ${styles.tapeRight}`}></div> */}
                            
                            {/* User Info */}
                            <div className={styles.userInfo}>
                                <div className={styles.avatar}>
                                {post.user.avatar}
                                </div>
                                <div className={styles.userDetails}>
                                <h3 className={styles.userName}>{post.user.name}</h3>
                                <p className={styles.userHandle}>{post.user.handle}</p>
                                </div>
                                <span className={styles.timeAgo}>{post.timeAgo}</span>
                            </div>

                            {/* Image */}
                            <div className={styles.imageContainer}>
                                <img
                                src={post.image}
                                alt="Post"
                                className={styles.postImage}
                                />
                                <div className={styles.vintageOverlay}></div>
                            </div>

                            {/* Location */}
                            <div className={styles.location}>
                                <MapPin size={12} />
                                <span>{post.location}</span>
                            </div>

                            {/* Caption */}
                            <p className={styles.caption}>{post.caption}</p>

                            {/* Actions */}
                            <div className={styles.actions}>
                                <div className={styles.actionButtons}>
                                <button
                                    onClick={() => toggleLike(post.id)}
                                    className={`${styles.actionButton} ${
                                    likedPosts.has(post.id) ? styles.liked : ''
                                    }`}
                                >
                                    <Heart
                                    size={20}
                                    fill={likedPosts.has(post.id) ? 'currentColor' : 'none'}
                                    />
                                    <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                                </button>
                                
                                <button className={styles.actionButton}>
                                    <MessageCircle size={20} />
                                    <span>{post.comments}</span>
                                </button>
                                </div>
                                
                                <button className={styles.shareButton}>
                                <Share size={20} />
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>

      {/* Bottom Tab Bar */}
      {/* <nav className={styles.tabBar}>
        <div className={styles.tabBarContent}>
          <button className={`${styles.tabButton} ${styles.tabButtonActive}`}>
            <Camera size={24} />
          </button>
          <button className={styles.tabButton}>
            <Heart size={24} />
          </button>
          <button className={styles.tabButton}>
            <MapPin size={24} />
          </button>
          <button className={styles.tabButton}>
            <MessageCircle size={24} />
          </button>
        </div>
      </nav>

      <div className={styles.bottomSpacer}></div> */}
    </div>
  );
};

export default CommunityFeed;