import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from '../components/Home'
import About from '../components/AboutViewContainer'
import Add from '../components/Add'

const Tabs = TabNavigator({
    Home: {
        screen: Home
    },
    About: {
        screen: About
    }
});

const Stack = StackNavigator({
    Home: {
        screen: Tabs
    },
    Add: {
        screen: Add
    }
});


export default Tabs