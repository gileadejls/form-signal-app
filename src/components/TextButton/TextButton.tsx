import React from 'react';
import { View, Text, Alert } from 'react-native';

import { styles } from './TextButtonStyle';

export function TextButton() {
  return (
    <View style={styles.container}>
        <Text style={styles.button} onPress={() => Alert.alert('Seu formulario foi enviado!', "Seu formulario acabou de ser enviado, obrigado!")}>Enviar</Text>
    </View>
  );
}