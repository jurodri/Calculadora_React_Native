import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/calculatorStyles';

interface CalculatorButtonProps {
  title: string;
  onPress: () => void;
  isOperation?: boolean;
  isCalculate?: boolean;
}

export const CalculatorButton = ({ 
  title, 
  onPress, 
  isOperation = false, 
  isCalculate = false 
}: CalculatorButtonProps) => {
  const buttonStyle = [
    styles.button,
    isCalculate && styles.calculateButton
  ];

  const textStyle = [
    isOperation ? styles.operationButtonText : styles.calculateButtonText
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};