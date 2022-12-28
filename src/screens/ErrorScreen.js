import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {COLORS} from '../assets/colors';

const ErrorScreen = ({route, navigation}) => {
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
          Something went wrong{'\n'}go back and check
        </Text>
        <CustomButton
          title={'Go Back'}
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            width: '70%',
            marginVertical: '10%',
          }}
          fontsize={20}
          letterSpacing={3}
          bgColors={COLORS.placeholder}
        />
      </View>

      <StatusBar backgroundColor={COLORS.red} barStyle="default" />
    </SafeAreaView>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.red,
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
