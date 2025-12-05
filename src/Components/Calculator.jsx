import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [firstValue, setFirstValue] = useState('');
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState('');
  const [ResetDisplay, setResetDisplay] = useState(false);

  //Show a number after click button
  const handleNumberInput = num => {
    if (ResetDisplay) {
      setDisplayValue(num);
      setResetDisplay(false);
    } else if (displayValue === '0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  // operator pass and set inpu
  const calculate = (num1, num2, op) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '÷':
        return num1 / num2;
      case '%':
        return num1 % num2;
      default:
        return num2;
    }
  };

  // operator pass and set input
  const handleOperator = op => {
    if (operator && !ResetDisplay) {
      const result = calculate(
        parseFloat(firstValue),
        parseFloat(displayValue),
        operator,
      );
      setDisplayValue(result.toString());
      setFirstValue(result.toString());
    } else {
      setFirstValue(displayValue);
    }
    setOperator(op);
    setResetDisplay(true);
  };

  //Handle Calculation
  const handleCalculation = () => {
    if (!operator) return;
    const result = calculate(
      parseFloat(firstValue),
      parseFloat(displayValue),
      operator,
    );
    setDisplayValue(result.toString());
    setOperator('');
    setFirstValue('');
    setResetDisplay(true);
  };

  //handle clear function c
  const handleClear = () => {
    setDisplayValue('0');
    setOperator('');
    setFirstValue('');
    setResetDisplay(false);
  };

  //handle delete function
  const handleDelete = () => {
    // display value last handle
    if (displayValue.length == 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={{ fontSize: 30, fontWeight: 300, color: 'white' }}>
          {firstValue + operator}
        </Text>
        <Text style={{ fontSize: 40, color: 'white', fontWeight: 300 }}>
          {displayValue}
        </Text>
      </View>

      <View style={styles.keypad}>
        <View style={styles.row}>
          <Button title={'C'} type="top" onPress={handleClear} />
          <Button title={'⌫'} type="top" onPress={handleDelete} />
          <Button title={'%'} type="top" onPress={() => handleOperator('%')} />
          <Button
            title={'÷'}
            type="right"
            onPress={() => handleOperator('÷')}
          />
        </View>
        <View style={styles.row}>
          <Button
            title={'7'}
            type="number"
            onPress={() => handleNumberInput('7')}
          />
          <Button
            title={'8'}
            type="number"
            onPress={() => handleNumberInput('8')}
          />
          <Button
            title={'9'}
            type="number"
            onPress={() => handleNumberInput('9')}
          />
          <Button
            title={'x'}
            type="right"
            onPress={() => handleOperator('x')}
          />
        </View>
        <View style={styles.row}>
          <Button
            title={'6'}
            type="number"
            onPress={() => handleNumberInput('6')}
          />
          <Button
            title={'5'}
            type="number"
            onPress={() => handleNumberInput('5')}
          />
          <Button
            title={'4'}
            type="number"
            onPress={() => handleNumberInput('4')}
          />
          <Button
            title={'-'}
            type="right"
            onPress={() => handleOperator('-')}
          />
        </View>
        <View style={styles.row}>
          <Button
            title={'1'}
            type="number"
            onPress={() => handleNumberInput('1')}
          />
          <Button
            title={'2'}
            type="number"
            onPress={() => handleNumberInput('2')}
          />
          <Button
            title={'3'}
            type="number"
            onPress={() => handleNumberInput('3')}
          />
          <Button
            title={'+'}
            type="right"
            onPress={() => handleOperator('+')}
          />
        </View>
        <View style={styles.row}>
          <Button
            title={'0'}
            type="number"
            onPress={() => handleNumberInput('0')}
          />
          <Button
            title={'00'}
            type="number"
            onPress={() => handleNumberInput('00')}
          />
          <Button
            title={'.'}
            type="number"
            onPress={() => handleNumberInput('.')}
          />
          <Button title={'='} type="right" onPress={handleCalculation} />
        </View>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  display: {
    flex: 1.8,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  keypad: {
    flex: 2,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
