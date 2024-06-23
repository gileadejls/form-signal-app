import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './HomeLogoStyle';

export function HomeLogo() {
  const [open, setOpen] = useState(true)

  function HandlePage(){
      setOpen(!open)
  }
  return (
    <View style={[styles.HomeContainer, {display: open ? 'flex': 'none'}]}>
        <Text style={styles.title}>MYFORM</Text>
        <Text style={styles.button} onPress={HandlePage}>GO TO FORM</Text>
    </View>
  );
}