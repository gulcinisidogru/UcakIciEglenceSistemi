import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackButton from './components/BackButton';
import MapButton from './components/MapButton';
import { useRouter } from 'expo-router';

export default function SocialMediaScreen() {
  const router = useRouter();

  const handleScreenPress = () => {
    router.push('/ready');
  };

  const openYoutube = () => {
    // YouTube linkini buraya ekleyin
    Linking.openURL('https://www.youtube.com/results?search_query=G%C3%BCl%C3%A7in+i%C5%9Fido%C4%9Fru');
  };

  const openGithub = () => {
    // GitHub linkini buraya ekleyin
    Linking.openURL('https://github.com/gulcinisidogru/UcakIciEglenceSistemi');
  };

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={handleScreenPress}
      activeOpacity={1}
    >
      <LinearGradient
        colors={['#e0f7fa', '#b2ebf2']}
        style={styles.background}
      >
        <View style={styles.content}>
          <View style={styles.topBar}>
            <BackButton />
            <MapButton />
          </View>

          <Text style={styles.title}>Sosyal Medya</Text>
          
          {/* Karakter ve Konuşma Balonu */}
          <View style={styles.characterContainer}>
            <View style={styles.characterAndBubble}>
              <View style={[styles.character, styles.blueCharacter]}>
                <View style={styles.face}>
                  <View style={styles.eyes}>
                    <View style={[styles.eye, styles.blueEye]} />
                    <View style={[styles.eye, styles.blueEye]} />
                  </View>
                  <View style={[styles.smile, styles.blueSmile]} />
                </View>
              </View>
              <View style={styles.speechBubble}>
                <Text style={styles.bubbleText}>
                   Son olarak bizleri sosyal medya hesaplarımızdan{'\n'}
                  takip etmeyi unutma !!
                </Text>
              </View>
            </View>
          </View>

          {/* Sosyal Medya İkonları */}
          <View style={styles.socialMediaContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={openYoutube}>
              <Image source={require('../assets/Youtbe_icon.jpg')} style={styles.socialIconImg} />
              <Text style={styles.socialText}>YouTube</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton} onPress={openGithub}>
              <Image source={require('../assets/github_icon.png')} style={styles.socialIconImg} />
              <Text style={styles.socialText}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  characterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  characterAndBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  character: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueCharacter: {
    backgroundColor: '#4FC3F7',
  },
  face: {
    alignItems: 'center',
  },
  eyes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 40,
    marginBottom: 10,
  },
  eye: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  blueEye: {
    backgroundColor: '#333',
  },
  smile: {
    width: 24,
    height: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  blueSmile: {
    backgroundColor: '#333',
  },
  speechBubble: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginLeft: 10,
    maxWidth: '70%',
    borderWidth: 2,
    borderColor: '#333',
  },
  bubbleText: {
    fontSize: 16,
    color: '#2e7d32',
    lineHeight: 24,
  },
  socialMediaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    marginTop: 40,
    marginBottom: 40,
  },
  socialButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
  },
  socialIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  socialIconImg: {
    width: 80,
    height: 80,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  socialText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
}); 