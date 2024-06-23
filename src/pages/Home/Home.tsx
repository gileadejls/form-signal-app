import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './HomeStyle';
import { FormPage } from '../FormPage/FormPage';


export function Home() {  
    const [open, setOpen] = useState(false)

    function HandlePage(){
        setOpen(!open)
    }

  return (
    <View style={styles.container}>
        <View style={{display: open ? 'flex': 'none'}}>
            <View>
                <Text style={styles.title}>MYFORM</Text>
                <Text style={styles.button} onPress={HandlePage}>GO TO FORM</Text>
            </View>
        </View>
        <View style={{display: open ? 'none': 'flex'}}>
            <Text style={styles.back} onPress={HandlePage}>BACK</Text>
            <FormPage/>
        </View>
    </View>
  );
}