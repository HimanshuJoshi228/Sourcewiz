import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../assets/colors';

const SplashScreen = ({navigation}) => {
  const timeoutHelper = action => {
    const timer = setTimeout(() => {
      action();
    }, 1500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    timeoutHelper(() => {
      navigation.replace('HomeScreen');
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://uploads-ssl.webflow.com/611b88d50d8937e251b3e1fe/616c930d8882f2f66405819c_logo%2021.png',
          }}
          resizeMode={'contain'}
          style={styles.image}
        />
        <Text style={styles.text}>
          Sell to more buyers{'\n'}and grow your{'\n'}manufacturing business
        </Text>
      </View>

      <StatusBar backgroundColor={COLORS.black} barStyle="default" />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 150,
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 20,
    fontWeight: '700',
    letterSpacing: 4,
    textAlign: 'center',
    lineHeight: 40,
  },
});
