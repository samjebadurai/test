import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class About extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text>About</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})

export default About