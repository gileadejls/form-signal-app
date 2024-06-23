import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './TextBigStyle';

interface myLabel {
    text: string,
    textPlace: string
}

export function TextBig({text, textPlace}: myLabel) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <TextInput style={styles.button} placeholder={textPlace} multiline={true} numberOfLines={6}></TextInput>
    </View>
  );
}