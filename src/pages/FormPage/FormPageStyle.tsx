import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 30,
    width: width
  }
});