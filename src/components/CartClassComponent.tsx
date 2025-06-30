import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { removeFromCart } from '../slices/productSlice';
import { Product } from '../types/types';
import { RootState } from '../app/store';

interface Props {
  cart: Product[];
  removeFromCart: (id: number) => void;
}

class CartClassComponent extends Component<Props> {
  handleRemove = (id: number) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from the cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => this.props.removeFromCart(id),
        },
      ]
    );
  };

  render() {
    const { cart } = this.props;

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cart.length === 0) {
      return (
        <View style={styles.center}>
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>Price: ${item.price}</Text>
              <Button
                title="Remove"
                color="red"
                onPress={() => this.handleRemove(item.id)}
              />
            </View>
          )}
        />
        <View style={styles.totalBar}>
          <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f9f9f9',
  },
  card: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalBar: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
  },
});

const mapStateToProps = (state: RootState) => ({
  cart: state.product.cart,
});

const mapDispatchToProps = {
  removeFromCart,
};


export default connect(mapStateToProps, mapDispatchToProps)(CartClassComponent);

