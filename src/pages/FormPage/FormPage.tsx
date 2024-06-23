import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './FormPageStyle';
import { TextLabel } from '../../components/TextLabel/TextLabel';
import { TextBig } from '../../components/TextBig/TextBig';
import { TextButton } from '../../components/TextButton/TextButton';

export function FormPage() {
  return (
    <View style={styles.container}>
        <TextLabel text={'Nome'} textPlace={'Digite seu nome'}/>
        <TextLabel text={'Sobrenome'} textPlace={'Digite seu Sobrenome'}/>
        <TextBig text={'seu comentario'} textPlace='Diga o que aconteceu para avaliarmos..' />
        <TextBig text={'seu comentario'} textPlace='Diga o que aconteceu para avaliarmos..' />
        <TextButton/>
    </View>
  );
}