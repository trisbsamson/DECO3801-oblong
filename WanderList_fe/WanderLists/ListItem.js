import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import styles from '../Styles/style.js'

/**
 * Component which renders the 'List' list items in the ListsView screen.
 * 
 */
class ListItem extends Component {
    // main component constructor function - boilerplate
    constructor(props) {
        super(props);
    }

    // navigates to a specific WanderList upon clicking on this list item
    changeScreen() {
        this.props.parentComp.setState({
            movedFromRoot: true
        });
        this.props.navigation.navigate("specificListView",
        {
            listTitle: this.props.title,
            listID: this.props.id
        });
    }

    // render method - returns JSX components to render to DOM
    render() {
        return (
            <TouchableOpacity
            style={styles.listItemWanderlist}
            onPress={() => this.changeScreen()}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                    <TouchableOpacity style={styles.menuIconButton}>
                        <Image
                            source={require('../Images/menu_icon.png')}
                            style={styles.menuIcon}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.subTitleText}>{this.props.activityCount} activities</Text>

            </TouchableOpacity>
        );
    }
}

export default ListItem;
