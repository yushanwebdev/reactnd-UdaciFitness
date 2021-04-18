import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default class Live extends Component {
    state = {
        coords: null,
        status: null,
        direction: null,
    }

    render() {
        const { status, coords, direction } = this.state;

        if(status === null) {
            return <ActivityIndicator styles={{marginTop: 50}} size="large" color="#0000ff" /> 
        }

        if(status === 'denied') {
            return(
                <View>
                    <Text>Denied</Text>
                </View>
            )
        }

        if(status === 'undermined') {
            return(
                <View>
                    <Text>undermined</Text>
                </View>
            )
        }

        return (
            <View>
                <Text>Live</Text>
                <Text>{JSON.stringify(this.state)}</Text>
            </View>
        )
    }
}