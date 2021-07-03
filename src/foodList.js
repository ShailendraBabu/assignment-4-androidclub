import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { deleteFood } from './actions/food';

class FoodList extends Component {

  static navigationOptions = {
    title: 'Food List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'navy',
    },
  };

  render() {
    return (
      <FlatList style={styles.listContainer}
        data={this.props.foods}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={
          (data) =>
            <ListItem
              title={data.item.name}
              bottomDivider
              rightIcon={<Icon
                name='delete'
                size={30}
                onPress={() => this.props.delete(data.item.key)} />
              }
            />
        }
      />
    );
  }
};
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'aquamarine',
    padding: 28
  },
  listText: {
    fontSize: 40
  },
});
const mapStateToProps = (state) => {
  console.log(state);
  return {
    foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deleteFood(key))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodList); 