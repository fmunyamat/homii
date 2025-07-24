import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform, // For platform-specific adjustments
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const PolaroidFeed = () => {
  const [likedPosts, setLikedPosts] = useState(new Set());

  const toggleLike = (postId) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const posts = [
    {
      id: 1,
      user: { name: 'Emma Chen', avatar: '👩🏻‍💼', handle: '@emmaxplores' },
      location: 'Central Park, NYC',
      image: 'https://visitnyc.com/wp-content/uploads/2024/05/img-Discovering-The-X-Fun-Things-To-Do-In-Central-Park-NYC.jpg',
      caption: 'Morning jog through the most beautiful autumn leaves! 🍂 Nothing beats starting the day in nature right in the heart of the city.',
      likes: 47,
      comments: 8,
      timeAgo: '2h',
    },
    {
      id: 2,
      user: { name: 'Jake Morrison', avatar: '👨🏼‍🎨', handle: '@jakesnaps' },
      location: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop',
      caption: 'Street food heaven! This takoyaki stand has been here for 30 years and it shows in every bite 🐙✨',
      likes: 132,
      comments: 23,
      timeAgo: '4h',
    },
    {
      id: 3,
      user: { name: 'Sofia Martinez', avatar: '👩🏽‍🎨', handle: '@sofiashoots' },
      location: 'Barcelona, Spain',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      caption: 'Local market vibes are unmatched! Fresh flowers, warm bread, and the kindest vendors. This is why I love my neighborhood 💐',
      likes: 89,
      comments: 15,
      timeAgo: '6h',
    },
    {
      id: 4,
      user: { name: 'Alex Rivera', avatar: '🧑🏻‍💻', handle: '@alexadventures' },
      location: 'Portland, OR',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
      caption: 'Rainy Portland days call for cozy coffee shops and good books ☕️ Found this gem just around the corner from my apartment!',
      likes: 64,
      comments: 11,
      timeAgo: '8h',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* <LinearGradient
            colors={['#fb923c', '#f472b6']}
            style={styles.headerIconBg}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          > */}
            {/* <Camera size={20} color="white" /> */}
            <Ionicons name="camera-outline" size={20} color="#9ca3af" />
          {/* </LinearGradient>
          <LinearGradient
            colors={['#c05621', '#db2777']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerTitleGradient}
          > */}
            <Text style={styles.headerTitle}>Homii</Text>
          {/* </LinearGradient> */}
        </View>
        <TouchableOpacity style={styles.plusButton}>
          {/* <LinearGradient
            colors={['#fb923c', '#f472b6']}
            style={styles.plusButtonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          > */}
            {/* <Plus size={20} color="white" /> */}
            <Ionicons name="add" size={20} color="#9ca3af" />
          {/* </LinearGradient> */}
        </TouchableOpacity>
      </View>

      {/* Feed */}
      <ScrollView contentContainerStyle={styles.feedContentContainer}>
        {posts.map((post, index) => (
          <View
            key={post.id}
            style={[
              styles.postContainer,
              { transform: [{ rotate: `${index % 2 === 0 ? -1 : 1}deg` }] },
            ]}
          >
            {/* Polaroid Frame */}
            <View style={styles.polaroidFrame}>
              {/* Tape Effect */}
              <View style={[styles.tape1]}></View>
              <View style={[styles.tape2]}></View>

              {/* User Info */}
              <View style={styles.userInfo}>
                {/* <LinearGradient
                  colors={['#fdba74', '#fbcfe8']}
                  style={styles.avatarBg}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                > */}
                  <Text style={styles.avatarText}>{post.user.avatar}</Text>
                {/* </LinearGradient> */}
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>{post.user.name}</Text>
                  <Text style={styles.userHandle}>{post.user.handle}</Text>
                </View>
                <Text style={styles.timeAgo}>{post.timeAgo}</Text>
              </View>

              {/* Image */}
              <View style={styles.imageWrapper}>
                <Image source={{ uri: post.image }} style={styles.postImage} />
                {/* Vintage Photo Effect - achieved with an overlay view */}
                {/* <LinearGradient
                  colors={['rgba(255,237,213,0.2)', 'transparent', 'rgba(224,242,254,0.1)']}
                  style={styles.vintageOverlay}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                /> */}
              </View>

              {/* Location */}
              <View style={styles.location}>
                <Ionicons name="map-outline" size={14} color="red" />
                <Text style={styles.locationText}>{post.location}</Text>
              </View>

              {/* Caption */}
              <Text style={styles.caption}>{post.caption}</Text>

              {/* Actions */}
              <View style={styles.actions}>
                <View style={styles.actionGroup}>
                  <TouchableOpacity
                    onPress={() => toggleLike(post.id)}
                    style={styles.actionButton}
                  >

                    <Ionicons
                        name={likedPosts.has(post.id) ? "heart" : "heart-outline"}
                        size={20}
                        color={likedPosts.has(post.id) ? "#ef4444" : "#9ca3af"}
                    />
                    <Text style={styles.actionText}>
                      {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="chatbubble-outline" size={20} color="#9ca3af" />
                    <Text style={styles.actionText}>{post.comments}</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="share-outline" size={20} color="#9ca3af" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        {/* Add some bottom padding to account for fixed tab bar */}
        <View style={{ height: 80 }}></View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        <View style={styles.tabBarInner}>
          <TouchableOpacity style={styles.tabBarActiveButton}>
            {/* <LinearGradient
              colors={['#fb923c', '#f472b6']}
              style={styles.tabBarIconGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            > */}
              {/* <Camera size={24} color="white" /> */}
            <Ionicons name="camera-outline" size={24} color="#9ca3af" />
            {/* </LinearGradient> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBarButton}>
            {/* <Heart size={24} color="#9ca3af" /> */}
            <Ionicons
                name="heart"
                size={24}
                color="#9ca3af"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBarButton}>
            {/* <MapPin size={24} color="#9ca3af" /> */}
            <Ionicons name="map-outline" size={24} color="#9ca3af" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBarButton}>
            {/* <MessageCircle size={24} color="#9ca3af" /> */}
            <Ionicons name="chatbubble-outline" size={24} color="#9ca3af" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7ed'
  },
  header: {
    // marginTop: 40,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#fed7aa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  headerIconBg: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleGradient: {
    height: 24,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c05621'
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8
  },
  plusButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 100,
    gap: 32
  },
  postContainer: {
    maxWidth: width - 32,
    alignSelf: 'center',
  },
  polaroidFrame: {
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 20,
    borderRadius: 2,
    position: 'relative',
  },
  tape1: {
    position: 'absolute',
    top: -8,
    left: 32,
    width: 64,
    height: 24,
    backgroundColor: 'rgba(253,224,71,0.7)',
    transform: [{ rotate: '12deg' }],
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderWidth: 1,
    borderColor: 'rgba(253,224,71,0.5)',
    zIndex: 1,
  },
  tape2: {
    position: 'absolute',
    top: -4,
    right: 48,
    width: 48,
    height: 16,
    backgroundColor: 'rgba(253,224,71,0.7)',
    transform: [{ rotate: '-6deg' }],
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderWidth: 1,
    borderColor: 'rgba(253,224,71,0.5)',
    zIndex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12
  },
  avatarBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 18,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontWeight: '600',
    color: '#1f2937',
    fontSize: 14,
  },
  userHandle: {
    color: '#6b7280',
    fontSize: 12,
  },
  timeAgo: {
    fontSize: 12,
    color: '#9ca3af',
  },
  imageWrapper: {
    marginBottom: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 2,
    overflow: 'hidden',
    position: 'relative',
  },
  postImage: {
    width: '100%',
    height: 256,
    resizeMode: 'cover',
  },
  vintageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 12
  },
  locationText: {
    fontSize: 12,
    color: '#4b5563',
    fontWeight: '500',
  },
  caption: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 16,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Caveat-Regular' : 'CaveatRegular',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6'
  },
  actionGroup: {
    flexDirection: 'row',
    gap: 16
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  actionText: {
    fontSize: 14,
    color: '#4b5563'
  },
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderTopWidth: 1,
    borderTopColor: '#fed7aa',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  tabBarInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxWidth: 400,
    alignSelf: 'center'
  },
  tabBarActiveButton: {
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  tabBarIconGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarButton: {
    padding: 8
  },
});

export default PolaroidFeed;