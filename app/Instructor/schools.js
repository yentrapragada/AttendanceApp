import React, { Component, PropTypes } from 'react';
import Header from 'react-native-elements';
import { FlatList, ActivityIndicator,Alert, AppRegistry, Text, View , ImageBackground, Button , Modal, TouchableHighlight} from 'react-native';
import { DataTable } from 'react-native-paper';

export default class StudentCoursesList extends Component {

  constructor(props){
     super(props);
     this.state ={ isLoading: true}
   }

componentDidMount(){

    return fetch('https://www.umkc.edu/intapps/mobile/apps/UMKC/json/schools.aspx')
    .then((response) => response.json())
    .then((responseJson) => {
     // Alert.alert(JSON.stringify(responseJson));
      this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DataTable>
   <DataTable.Header>
  <DataTable.Title>Acad Group</DataTable.Title>
   <DataTable.Title>Description</DataTable.Title>

   </DataTable.Header>
      <FlatList
               data={this.state.dataSource}
               renderItem={({item}) => <DataTable.Row>
                 <DataTable.Cell>{item.acadGroup}</DataTable.Cell>
                 <DataTable.Cell>{item.description}</DataTable.Cell>
               </DataTable.Row>}
               keyExtractor={({id}, index) => id}
             />

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
