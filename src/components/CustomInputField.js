import {Platform, TextInput, View, StyleSheet, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../assets/colors';

const CustomInputField = ({
  header,
  errorText = '',
  autoFocus = false,
  keyboard,
  onchange,
  placeholder,
  hide,
  iconType,
  multiline,
  maxLength,
  autoCapitalize,
  returnKeyType,
  noBottomMargin = false,
}) => {
  return (
    <View
      style={{
        width: 'auto',
        flexDirection: 'column',
      }}>
      {/* upperText */}
      <Text
        style={[
          styles.upperText,
          {color: errorText !== '' ? COLORS.red : COLORS.text1},
        ]}>
        {header}
      </Text>

      {/* InputForm */}

      <View
        style={[
          styles.inputContainer,
          styles.shadowProp,
          {borderColor: errorText !== '' ? COLORS.red : COLORS.text1},
        ]}>
        {/* Show Icon when required by a particular field in any page */}

        <View style={{padding: 10}}>
          <AntDesign name={iconType || 'user'} size={25} color={COLORS.text1} />
        </View>

        <TextInput
          placeholder={placeholder}
          autoFocus={autoFocus}
          keyboardType={keyboard || 'default'}
          maxLength={maxLength || 100}
          returnKeyType={returnKeyType || 'done'}
          style={styles.input}
          onChangeText={onchange}
          secureTextEntry={hide}
          multiline={multiline}
          autoCapitalize={autoCapitalize}
        />
      </View>

      {/* Error Text, will only show up when there is an error */}
      {errorText !== '' && (
        <View style={{marginTop: 2}}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}

      {noBottomMargin === false && <View style={{marginBottom: 20}} />}
    </View>
  );
};

const styles = StyleSheet.create({
  upperText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  inputContainer: {
    borderWidth: 0.5,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    padding: 5,
    paddingVertical: 0,
    marginTop: 5,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    height: 60,
  },
  shadowProp: {
    backgroundColor: COLORS.white,
    ...Platform.select({
      android: {
        elevation: 15,
        shadowOpacity: 1,
        shadowColor: COLORS.shadowProps,
      },
      ios: {
        shadowColor: COLORS.shadowProps,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 12,
      },
    }),
  },
  errorText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    color: COLORS.red,
  },
});

export default CustomInputField;
