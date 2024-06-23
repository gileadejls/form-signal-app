import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './TextLabelStyle';

interface myLabel {
    text: string,
    textPlace: string
}

export function TextLabel({ text, textPlace}: myLabel) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <TextInput style={styles.button} placeholder={textPlace}></TextInput>
    </View>
  );
}