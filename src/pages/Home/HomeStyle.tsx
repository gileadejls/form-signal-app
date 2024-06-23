import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 100
  },
  button: {
    backgroundColor: 'gray',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    textAlign: 'center'
  },
  back: {
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 30,
    paddingLeft: 30
  }
});