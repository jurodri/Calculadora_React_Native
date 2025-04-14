import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#1c1c1c',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#dcdcdc',
  },
  label: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 8,
    color: '#dcdcdc',
  },
  input: {
    height: 70,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#fff',
    fontSize: 19,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginVertical: 20,
    paddingHorizontal: 10, 
  },
  button: {
    backgroundColor: '#808080',
    padding: 12,
    borderRadius: 15,
    minWidth: 80,
    alignItems: 'center',
    marginHorizontal: 5, 
  },
  operationButtonText: {
    color: '#fff',
    fontSize: 35,
  },
  calculateButton: {
    backgroundColor: '#808080',
    marginTop: 20,
    padding: 25, 
    width: '70%', 
    alignSelf: 'center', 
    borderRadius: 10,
},
calculateButtonText: {
    color: '#fff',
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'center',
},
  resultInput: {
    height: 70,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
  },
});