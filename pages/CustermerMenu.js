import * as React from 'react';
import { DataTable } from 'react-native-paper';

export default class MyComponent extends React.Component {
  render() {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>CID</DataTable.Title>
          <DataTable.Title numeric>CName</DataTable.Title>
          <DataTable.Title numeric>CTelephone</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>1002</DataTable.Cell>
          <DataTable.Cell numeric>Chutima</DataTable.Cell>
          <DataTable.Cell numeric>0843526578</DataTable.Cell>
          <DataTable.Cell numeric>2020-10-12</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>1005</DataTable.Cell>
          <DataTable.Cell numeric>Thitipong</DataTable.Cell>
          <DataTable.Cell numeric>0897445678</DataTable.Cell>
          <DataTable.Cell numeric>2020-10-13</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        />

        <DataTable.Header>
          <DataTable.Title>CID</DataTable.Title>
          <DataTable.Title numeric>GTour</DataTable.Title>
          <DataTable.Title numeric>TTour</DataTable.Title>
          <DataTable.Title numeric>Lunch</DataTable.Title>
          <DataTable.Title numeric>Dinner</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>1002</DataTable.Cell>
          <DataTable.Cell numeric>Booked</DataTable.Cell>
          <DataTable.Cell numeric>Booked</DataTable.Cell>
          <DataTable.Cell numeric>Booked</DataTable.Cell>
          <DataTable.Cell numeric>Booked</DataTable.Cell>
          <DataTable.Cell numeric>2020-10-12</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>1005</DataTable.Cell>
          <DataTable.Cell numeric>Booked</DataTable.Cell>
          <DataTable.Cell numeric>No Booked</DataTable.Cell>
          <DataTable.Cell numeric>Booked</DataTable.Cell>
          <DataTable.Cell numeric>No Booked</DataTable.Cell>
          <DataTable.Cell numeric>2020-10-13</DataTable.Cell>
        </DataTable.Row>
        
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        />

      </DataTable>

      
    );
  }
}