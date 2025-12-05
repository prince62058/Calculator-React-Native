import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../utils/Color';

const Button = ({ title, type ,onPress }) => {
  return (
    <View>
      <Pressable style={[styles.btn,{ backgroundColor:type == 'top' ? '#4B4B4B' : type == 'right' ? Colors.btnRight : '#2D2D2D'}]} onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: 70,
    height: 70 ,
    borderRadius: 32,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.btnDark,
  },
  btnText: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: 'bold',
  },
});
