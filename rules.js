import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackButton from './components/BackButton';
import MapButton from './components/MapButton';
import { useRouter } from 'expo-router';

export default function RulesScreen() {
  const router = useRouter();

  const handleScreenPress = () => {
    router.push('/social-media');
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

          <Text style={styles.title}>KURALLAR</Text>

          <View style={styles.rulesCard}>
            <View style={styles.ruleItem}>
              <Text style={styles.ruleText}>
                • Yol haritası üzerinden nerede olduğunu bul.
              </Text>
            </View>
            <View style={styles.ruleItem}>
              <Text style={styles.ruleText}>
                • Üzerinde bulunduğun şehri doğru tahmin et.
              </Text>
            </View>
            <View style={styles.ruleItem}>
              <Text style={styles.ruleText}>
                • Doğru cevapta hediyeleri kazan!
              </Text>
            </View>
          </View>

          <View style={styles.decorationTopLeft} />
          <View style={styles.decorationBottomRight} />
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
    width: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f4511e',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  rulesCard: {
    backgroundColor: '#ffb74d',
    borderRadius: 20,
    padding: 30,
    margin: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  ruleItem: {
    marginVertical: 15,
  },
  ruleText: {
    fontSize: 20,
    color: '#000',
    lineHeight: 28,
  },
  decorationTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    backgroundColor: '#8bc34a',
    borderBottomRightRadius: 100,
  },
  decorationBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
    backgroundColor: '#8bc34a',
    borderTopLeftRadius: 100,
  },
}); 