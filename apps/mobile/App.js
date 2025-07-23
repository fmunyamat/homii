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
// import LinearGradient from 'react-native-linear-gradient'; // For gradient backgrounds
// import { Heart, MessageCircle, Share, MapPin, Camera, Plus } from 'lucide-react-native'; // React Native version of Lucide icons
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
                {/* <MapPin size={12} color="#f87171" /> */}
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
                    {/* <Heart
                      size={20}
                      color={likedPosts.has(post.id) ? '#ef4444' : '#9ca3af'}
                      fill={likedPosts.has(post.id) ? '#ef4444' : 'none'}
                    /> */}

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
                    {/* <MessageCircle size={20} color="#9ca3af" /> */}
                    <Ionicons name="chatbubble-outline" size={20} color="#9ca3af" />
                    <Text style={styles.actionText}>{post.comments}</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.actionButton}>
                  {/* <Share size={20} color="#9ca3af" /> */}
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
    backgroundColor: '#fff7ed', // Corresponds to bg-orange-50
  },
  header: {
    // marginTop: 40,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#fed7aa', // border-orange-200
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.9)', // bg-white/90
    // No direct equivalent for backdrop-blur-md in core React Native without external libraries.
    // For iOS, you could use BlurView from '@react-native-community/blur'
    // For Android, blurring effects are more complex and might require native module development or specific libraries.
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // zIndex: 10,
    paddingTop: Platform.OS === 'android' ? 20 : 0, // Adjust for Android status bar
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12, // space-x-3
  },
  headerIconBg: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleGradient: {
    // This creates the text gradient effect by using a LinearGradient component
    // and positioning the text absolute over it, then masking.
    // However, direct text gradient is not straightforward in React Native.
    // For simplicity, we'll use a solid color that approximates the gradient effect.
    // A true text gradient would require SVG or other complex solutions.
    // Keeping it as a LinearGradient wrapper for consistency, but the text color will be solid.
    // Or you can explore libraries like 'react-native-linear-gradient-text'
    height: 24, // Approximate height for text
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c05621', // Approximating orange-600
    // No direct equivalent for bg-clip-text text-transparent without native modules or SVG
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // For Android shadow
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
    paddingVertical: 100, // Adjusted padding to account for fixed header
    gap: 32, // space-y-8
  },
  postContainer: {
    maxWidth: width - 32, // max-w-sm adjusted for padding
    alignSelf: 'center', // mx-auto
    // transform applied inline
  },
  polaroidFrame: {
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 20, // For Android shadow
    borderRadius: 2, // rounded-sm
    position: 'relative',
  },
  tape1: {
    position: 'absolute',
    top: -8,
    left: 32,
    width: 64,
    height: 24,
    backgroundColor: 'rgba(253,224,71,0.7)', // yellow-200/70
    transform: [{ rotate: '12deg' }],
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderWidth: 1,
    borderColor: 'rgba(253,224,71,0.5)', // yellow-300/50
    zIndex: 1,
  },
  tape2: {
    position: 'absolute',
    top: -4,
    right: 48,
    width: 48,
    height: 16,
    backgroundColor: 'rgba(253,224,71,0.7)', // yellow-200/70
    transform: [{ rotate: '-6deg' }],
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderWidth: 1,
    borderColor: 'rgba(253,224,71,0.5)', // yellow-300/50
    zIndex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12, // mb-3
    gap: 12, // space-x-3
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
    color: '#1f2937', // gray-800
    fontSize: 14,
  },
  userHandle: {
    color: '#6b7280', // gray-500
    fontSize: 12,
  },
  timeAgo: {
    fontSize: 12,
    color: '#9ca3af', // gray-400
  },
  imageWrapper: {
    marginBottom: 16, // mb-4
    backgroundColor: '#f3f4f6', // gray-100
    borderRadius: 2, // rounded-sm
    overflow: 'hidden',
    position: 'relative',
  },
  postImage: {
    width: '100%',
    height: 256, // h-64
    resizeMode: 'cover',
  },
  vintageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // The web gradient was from-amber-100/20 via-transparent to-blue-100/10
    // This is a direct translation but might need tweaking for visual match
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4, // space-x-1
    marginBottom: 12, // mb-3
  },
  locationText: {
    fontSize: 12,
    color: '#4b5563', // gray-600
    fontWeight: '500',
  },
  caption: {
    fontSize: 16, // text-base
    color: '#374151', // gray-700
    marginBottom: 16, // mb-4
    lineHeight: 24, // leading-relaxed
    fontFamily: Platform.OS === 'ios' ? 'Caveat-Regular' : 'CaveatRegular', // You'll need to link this font
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8, // pt-2
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6', // border-gray-100
  },
  actionGroup: {
    flexDirection: 'row',
    gap: 16, // space-x-4
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // space-x-2
  },
  actionText: {
    fontSize: 14,
    color: '#4b5563', // gray-600
  },
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.95)', // bg-white/95
    borderTopWidth: 1,
    borderTopColor: '#fed7aa', // border-orange-200
    paddingHorizontal: 16,
    paddingVertical: 12,
    // No direct equivalent for backdrop-blur-md
  },
  tabBarInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxWidth: 400, // max-w-md
    alignSelf: 'center', // mx-auto
  },
  tabBarActiveButton: {
    padding: 8, // p-2
    borderRadius: 8, // rounded-lg
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // For Android shadow
  },
  tabBarIconGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarButton: {
    padding: 8, // p-2
    // hover effects handled differently, typically with TouchableOpacity's `activeOpacity` or state.
  },
});

export default PolaroidFeed;