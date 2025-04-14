import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CalculatorButton } from '../components/CalculatorButton';
import { styles } from '../styles/calculatorStyles';

const CalculatorScreen = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    let res;
    switch (operation) {
      case '+': res = num1 + num2; break;
      case '-': res = num1 - num2; break;
      case '*': res = num1 * num2; break;
      case '/': res = num1 / num2; break;
      default: return;
    }

    setResult(res.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>
      
      <Text style={styles.label}>VALOR 1</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value1}
        onChangeText={setValue1}
      />

      <Text style={styles.label}>VALOR 2</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value2}
        onChangeText={setValue2}
      />

      <View style={styles.buttonsRow}>
        <CalculatorButton 
          title="+" 
          onPress={() => setOperation('+')} 
          isOperation 
        />
        <CalculatorButton 
          title="-" 
          onPress={() => setOperation('-')} 
          isOperation 
        />
        <CalculatorButton 
          title="*" 
          onPress={() => setOperation('*')} 
          isOperation 
        />
        <CalculatorButton 
          title="/" 
          onPress={() => setOperation('/')} 
          isOperation 
        />
      </View>

      <Text style={styles.label}>RESULTADO</Text>
      <TextInput
        style={[styles.input, styles.resultInput]}
        value={result}
        editable={false}
      />

      <CalculatorButton
        title="CALCULAR"
        onPress={calculate}
        isCalculate
      />
    </View>
  );
};

export default CalculatorScreen;