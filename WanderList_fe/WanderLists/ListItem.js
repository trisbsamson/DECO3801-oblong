import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import styles from '../Styles/style.js'

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

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
                <Text style={styles.subTitleText}>{this.props.subtitle}</Text>

            </TouchableOpacity>
        );
    }
}

export default ListItem;
