import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

const HomePage = () => {
  const mainHeading = 'Belong Anywhere';
  const subHeading = 'Redefining global experiences for digital nomads, slow travelers, and expats. Find your community, safely.';
  const callToActionText = 'Join Homii';

  const problemStatement = 'Digital nomads, slow travelers, and expats deserve safe, reliable experiences and recommendations from trusted sources. Local businesses want to connect directly with new regulars. Creators need a digital space to host their followers and build community.';
  const solutionIntro = 'Homii is where logistics meet belonging. We\'re building the infrastructure for identity-aware travel planning, city-specific guides, trusted local business reviews, and real-time connections.';
  const featuresHeading = 'More Than Just Travel';

  const features = [
    {
      title: 'Identity-Aware Connections',
      description: 'Create profiles reflecting who you are (LGBTQ+, Black, Muslim, solo female, etc.) and get curated insights from shared experiences.',
      icon: '👥'
    },
    {
      title: 'Trusted Local Guides',
      description: 'Discover housing, events, visa info, coworking spots, and more, all reviewed by a community you trust.',
      icon: '📍'
    },
    {
      title: 'Empowering Local Businesses & Communities',
      description: 'Local businesses gain visibility, and community groups can host events and welcome newcomers with dedicated tools.',
      icon: '🤝'
    }
  ];

  const missionStatement = 'The travel industry has spent decades optimizing for booking. Homii is optimizing for belonging. We\'re not just building a marketplace; we\'re building the system people didn\'t know they needed—but won\'t travel without again.';
  const launchCities = 'Launching first in high-growth cities like Hanoi, Medellín, and Bangkok, where travelers seek trusted connections from day one.';

  const handleCTAPress = () => {
    console.log('Join Homii pressed');
  };

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.heroContent}>
        <Text style={styles.mainHeading}>{mainHeading}</Text>
        <Text style={styles.subHeading}>{subHeading}</Text>
        <TouchableOpacity style={styles.ctaButton} onPress={handleCTAPress}>
          <Text style={styles.ctaButtonText}>{callToActionText}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.sectionHeading}>Why Homii?</Text>
        <Text style={styles.problemStatement}>{problemStatement}</Text>
        <Text style={styles.solutionIntro}>{solutionIntro}</Text>
      </View>

      <View style={[styles.contentSection, styles.featuresSection]}>
        <Text style={styles.sectionHeading}>{featuresHeading}</Text>
        <View style={styles.featureGrid}>
          {features.map((feature, index) => (
            <View style={styles.featureCard} key={index}>
              <Text style={styles.featureIcon}>{feature.icon}</Text>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.sectionHeading}>Our Mission</Text>
        <Text style={styles.missionStatement}>{missionStatement}</Text>
        <Text style={styles.launchCities}>{launchCities}</Text>
        <TouchableOpacity style={styles.ctaButton} onPress={handleCTAPress}>
          <Text style={styles.ctaButtonText}>{callToActionText}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    maxWidth: width,
  },
  mainHeading: {
    fontSize: width < 768 ? 32 : 56,
    fontWeight: '500',
    color: '#030213',
    textAlign: 'center',
    lineHeight: width < 768 ? 38 : 64,
    marginBottom: 16,
  },
  subHeading: {
    fontSize: width < 768 ? 18 : 24,
    fontWeight: '400',
    color: '#030213',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 32,
    paddingHorizontal: 16,
    lineHeight: width < 768 ? 24 : 32,
  },
  ctaButton: {
    backgroundColor: '#cc5500',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  contentSection: {
    paddingHorizontal: 32,
    paddingVertical: 40,
    alignItems: 'center',
  },
  sectionHeading: {
    fontSize: width < 768 ? 32 : 44,
    fontWeight: '500',
    color: '#cc5500',
    textAlign: 'center',
    marginBottom: 24,
  },
  problemStatement: {
    fontSize: 18,
    color: '#030213',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 16,
  },
  solutionIntro: {
    fontSize: 18,
    color: '#030213',
    textAlign: 'center',
    lineHeight: 26,
  },
  featuresSection: {
    backgroundColor: '#fff8f0',
    width: '100%',
    marginVertical: 40,
  },
  featureGrid: {
    flexDirection: width < 768 ? 'column' : 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 32,
    gap: 24,
  },
  featureCard: {
    backgroundColor: '#ffeee6',
    padding: 32,
    borderRadius: 10,
    width: width < 768 ? width - 64 : (width - 128) / 3 - 16,
    alignItems: 'flex-start',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#030213',
    marginBottom: 10,
    lineHeight: 28,
  },
  featureDescription: {
    fontSize: 15,
    color: '#717182',
    lineHeight: 22,
  },
  missionStatement: {
    fontSize: 18,
    color: '#030213',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 24,
  },
  launchCities: {
    fontSize: 16,
    color: '#717182',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 24,
    marginBottom: 32,
  },
});

export default HomePage;