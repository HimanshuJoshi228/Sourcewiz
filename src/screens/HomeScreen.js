import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../assets/colors';
import CustomInputField from '../components/CustomInputField';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [num1Error, setNum1Error] = useState('');
  const [num2Error, setNum2Error] = useState('');
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [modal, setModal] = useState(true);

  const add = () => {
    const result = Number(num1) + Number(num2);
    if (isNaN(num1) || isNaN(num2)) {
      navigation.navigate('ErrorScreen');
    } else {
      navigation.navigate('ResultScreen', {
        result: result,
        num1: num1,
        num2: num2,
        operation: 'add',
      });
    }
  };

  const subtract = () => {
    let result = Number(num1) - Number(num2);
    if (isNaN(num1) || isNaN(num2)) {
      navigation.navigate('ErrorScreen');
    } else {
      navigation.navigate('ResultScreen', {
        result: result,
        num1: num1,
        num2: num2,
        operation: 'subtract',
      });
    }
  };

  const multiply = () => {
    let result = Number(num1) * Number(num2);
    if (isNaN(num1) || isNaN(num2)) {
      navigation.navigate('ErrorScreen');
    } else {
      navigation.navigate('ResultScreen', {
        result: result,
        num1: num1,
        num2: num2,
        operation: 'multiply',
      });
    }
  };

  const divide = () => {
    let result = Number(num1) / Number(num2);
    if (isNaN(num1) || isNaN(num2) || isNaN(result)) {
      navigation.navigate('ErrorScreen');
    } else {
      navigation.navigate('ResultScreen', {
        result: result,
        num1: num1,
        num2: num2,
        operation: 'divide',
      });
    }
  };

  const validate = clickFun => {
    if (
      (!num1 || num1 === '' || num1.length === 0) &&
      (!num2 || num2 === '' || num2.length === 0)
    ) {
      setNum1Error('Please fill in the required field');
      setNum2Error('Please fill in the required field');
      return;
    }

    if (!num2 || num2 === '' || num2.length === 0) {
      setNum2Error('Please fill in the required field');
      return;
    }

    if (!num1 || num1 === '' || num1.length === 0) {
      setNum1Error('Please fill in the required field');
      return;
    }

    clickFun();
  };

  const saveName = () => {
    if (!name || name === '' || name.length === 0) {
      setNameError('Please fill in the required field');
      return;
    }

    setModal(false);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {modal ? (
          <View style={styles.modalContainer}>
            <Text style={styles.text}>Please enter your name</Text>
            <CustomInputField
              autoFocus={true}
              header={'Name'}
              iconType="user"
              placeholder={'Name'}
              onchange={text => {
                setName(text);
              }}
              errorText={nameError}
            />
            <CustomButton
              title={'Save'}
              onPress={() => {
                saveName();
              }}
              style={{
                width: '90%',
                marginVertical: '10%',
              }}
              fontsize={20}
              letterSpacing={3}
            />
          </View>
        ) : (
          <View style={styles.inputFieldContainer}>
            <Text style={styles.text}>Hey, {name}</Text>

            <CustomInputField
              width={'40%'}
              autoFocus={true}
              header={'Num1'}
              iconType="slack"
              placeholder={'Number 1'}
              keyboard={'number-pad'}
              onchange={text => {
                setNum1(text);
              }}
              errorText={num1Error}
              returnKeyType={'next'}
            />
            <CustomInputField
              width={'40%'}
              header={'Num2'}
              iconType="slack"
              placeholder={'Number2'}
              keyboard={'number-pad'}
              onchange={text => {
                setNum2(text);
              }}
              errorText={num2Error}
            />
            <View style={styles.btnContainer}>
              <CustomButton
                title={'ADD'}
                onPress={() => {
                  validate(add);
                }}
                style={styles.functionBtn}
                fontsize={20}
              />
              <CustomButton
                title={'SUBTRACTS'}
                onPress={() => {
                  validate(subtract);
                }}
                style={styles.functionBtn}
                fontsize={20}
              />
            </View>
            <View style={styles.btnContainer}>
              <CustomButton
                title={'DIVIDE'}
                onPress={() => {
                  validate(divide);
                }}
                style={styles.functionBtn}
                fontsize={20}
              />
              <CustomButton
                title={'MULTIPLY'}
                onPress={() => {
                  validate(multiply);
                }}
                style={styles.functionBtn}
                fontsize={20}
              />
            </View>
          </View>
        )}
      </ScrollView>

      {modal ? (
        <StatusBar
          backgroundColor={COLORS.placeholder}
          barStyle="light-content"
        />
      ) : (
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flexGrow: 1,
  },
  modalContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.placeholder,
    zIndex: 99,
  },
  inputFieldContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: COLORS.black,
    marginVertical: '10%',
    fontWeight: '700',
    letterSpacing: 4,
    textAlign: 'center',
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  functionBtn: {
    width: '40%',
    marginVertical: '10%',
  },
});
