import * as React from 'react';
import { DataTable } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
} from 'react-native';

export default class MyComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>SID</DataTable.Title>
          <DataTable.Title numeric>SName</DataTable.Title>
          <DataTable.Title numeric>STelephone</DataTable.Title>
          <DataTable.Title numeric>SPhoto</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>7501</DataTable.Cell>
          <DataTable.Cell numeric>Sarinya</DataTable.Cell>
          <DataTable.Cell numeric>08935277425</DataTable.Cell>
          <DataTable.Cell numeric><Image
              style={styles.productImg}
              source={{
                uri:
                  'https://p1.pxfuel.com/preview/687/751/600/man-secret-face-mysterious-whisper-gossip.jpg',
              }}
            /></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>7502</DataTable.Cell>
          <DataTable.Cell numeric>Kavin</DataTable.Cell>
          <DataTable.Cell numeric>0957528531</DataTable.Cell>
          <DataTable.Cell numeric>7502.jpg</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>7503</DataTable.Cell>
          <DataTable.Cell numeric>Isara</DataTable.Cell>
          <DataTable.Cell numeric>0862543597</DataTable.Cell>
          <DataTable.Cell numeric>7503.jpg</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>7504</DataTable.Cell>
          <DataTable.Cell numeric>Tanrada</DataTable.Cell>
          <DataTable.Cell numeric>0942343521</DataTable.Cell>
          <DataTable.Cell numeric>7504.jpg</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        />
      </DataTable>
      </View>
      
    );
  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  }
})