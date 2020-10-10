import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, FlatList, Modal, TextInput} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {NavigationActions} from 'react-navigation';
import ListItem from './ListItem';
import SpecificListView from './SpecificListView'
import AddListModal from './AddListModal'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addListButton: {
    alignItems: 'center',
    backgroundColor: '#196DFF',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    padding: 12,
    width: 100,
    marginLeft: 'auto',
    marginRight: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 'auto',
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#196DFF',
    borderRadius: 3,
    padding: 10,
    marginTop: 'auto',
    marginLeft: 'auto',
    width: 80
  },
  cancelButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    padding: 10,
    marginTop: 'auto',
    width: 80
  },
  textField: {
      marginBottom: 20,
      fontSize: 20,
  },
  map: {
      width: 390,
      height: 300,
      marginBottom: 20,
  },
  listTitle: {
      fontSize: 18,
      fontWeight: "700",
      paddingLeft:10,
      paddingTop:2
  },
  header:{
      padding: 10,
      flexDirection:'row',
      flexWrap:'wrap'

  },
  list: {
      marginBottom: 10,
      backgroundColor: '#ccc',
      padding: 10,
      paddingBottom: 0
  },
  addListModalContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  },
  addListModal: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 3,
      padding: 10,
      height: 150,
      width: 200
  },
  modalTextField: {
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 10,
      padding: 10,
      marginTop: 10
  }
});

const renderItem = ({ item}, navigation, parentComp) => (
    <ListItem title={item.title} id={item.key} subtitle={item.subtitle} navigation={navigation} parentComp={parentComp}/>
);
class ListsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            listNameModalVisible: false,
            movedFromRoot: false
        }
    }

    loadLists(obj) {
        console.log(obj);
        var listData = [];
        var i;
        for(i = 0; i < obj.length; i++) {
            listData.push({title: obj[i]['name'], subtitle: "subtitle goes here", key: obj[i]['id'].toString()})
        }
        this.setState({listData: listData});
    }

    queryLists() {
        fetch("https://deco3801-oblong.uqcloud.net/wanderlist/bucketlist/")
        .then(response => response.json())
        .then(obj => this.loadLists(obj));
    }
    componentDidMount() {
        const unsub = this.props.parentNav.addListener('focus', () => {
            if(this.state.movedFromRoot) {
                this.props.navigation.popToTop();
                this.props.navigation.navigate("AppContents", {screen: 'WanderLists', initial: false});
            }
        });
        this.queryLists()
    }

    

    hideModal() {
        this.setListNameModalVisible(false);
    }

    setListNameModalVisible = (visible) => {
        
        this.setState({listNameModalVisible: visible});
    }

    render() {
        const {listNameModalVisible} = this.state;
        return (
                <View style={styles.container}>
                    <View>
                        <AddListModal queryLists={this.queryLists.bind(this)} listNameModalVisible={this.state.listNameModalVisible} hideModalFunc={this.hideModal.bind(this)}/>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                                  <Image
                                    source={{uri:'https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png'}}
                                    style={{ width: 30, height: 30 }}
                                  />
                                </TouchableOpacity>
                                <Text style={styles.listTitle}>Your Lists</Text>
                            </View>
                        <FlatList style={styles.list} data={this.state.listData} renderItem={(item) => renderItem(item, this.props.navigation, this)}/>
                        <TouchableOpacity
                            style={styles.addListButton}
                            onPress={() =>this.setListNameModalVisible(true)}>
                            <Text style={{color: '#fff'}}>New List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
    }
}

export default ListsView;
