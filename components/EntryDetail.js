import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { white } from '../utils/colors';
import MetricCard from './MetricCard';

class EntryDetail extends Component {
  render() {
    const { metrics } = this.props;
    return (
      <View style={styles.container}>
        <MetricCard metrics={metrics[0]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,    
  }
})

function mapStateToProps(state, { route }) {
  const { entryId } = route.params;

  return {
    metrics: state[entryId]
  }
}

export default connect(mapStateToProps)(EntryDetail);