import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  FlatList,
  TouchableHighlight,
  Touchable,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyItemSlice} from '../../../../redux-toolkit/reducer_slice/cart_slice/buyItemSlice';
import {addItem} from '../../../../redux-toolkit/reducer_slice/cart_slice/buyItemSlice';
import {incrementItemQuantity} from '../../../../redux-toolkit/reducer_slice/cart_slice/buyItemSlice';
import {decrementItemQuantity} from '../../../../redux-toolkit/reducer_slice/cart_slice/buyItemSlice';
import {sortListByTotalCost} from '../../../../redux-toolkit/reducer_slice/cart_slice/buyItemSlice';
import {sortListByName} from '../../../../redux-toolkit/reducer_slice/cart_slice/buyItemSlice';
import { sortListByQuantity } from '../../../../redux-toolkit/reducer_slice/cart_slice/buyItemSlice';

const Cart = props => {
  const listData = useSelector(state => state.buyItem.buyList);

  const {navigation} = props;

  const dispatch = useDispatch();

  const addItemRedux = () => {
    dispatch(
      addItem({
        id: Math.random(),
        nameFruit: 'AppleCart',
        image: require('../../../../media/images/AppleCart.png'),
        cost: '2$',
        quantity: 1,
      }),
    );
  };

  const handleUpRedux = id => {
    console.log('Up pressed, id here: ', id);
    dispatch(incrementItemQuantity({id}));
  };

  const handleDownRedux = id => {
    dispatch(decrementItemQuantity({id}));
  };

  const sortListByCostRedux = () => {
    dispatch(sortListByTotalCost());
  };

  const sortListByNameRedux = () => {
    dispatch(sortListByName());
  };

  const sortListByQuantityRedux = () =>{
    dispatch(sortListByQuantity())
  }

  const Item = ({item}) => {
    return (
      // <Pressable onPress={()=> deleteItem(item.id)}>
      <View style={styles.itemContainer}>
        {/* Image Fruit*/}
        <Image source={item.image} />

        {/* Name Fruit and quantity */}
        <View style={styles.nameFruitContainer}>
          <Text style={styles.nameFruit}>{item.nameFruit}</Text>
          <View style={styles.iconContainer}>
            <Pressable onPress={() => handleDownRedux(item.id)}>
              <Image
                style={styles.icon}
                source={require('../../../../media/images/MinusIcon.png')}
              />
            </Pressable>

            <Text style={styles.cost}>{item.quantity}</Text>
            <Pressable onPress={() => handleUpRedux(item.id)}>
              <Image
                style={styles.icon}
                source={require('../../../../media/images/PlusIcon.png')}
              />
            </Pressable>
          </View>
        </View>

        {/* Cost */}
        <Text style={styles.cost}>{item.cost * item.quantity} $</Text>
      </View>
      // </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <Image source={require('../../../../media/images/Arrow.png')}></Image>

      {/* Cart */}
      <View style={styles.mainTitle}>
        <Text style={styles.cart}>Cart</Text>
      </View>

      {/* Flatlist */}
      <FlatList
        data={listData}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />

      <Pressable style={styles.btnSignUp} onPress={() => sortListByQuantityRedux()}>
        <Text style={styles.signUpInsideButton}>Ascending buy quantity</Text>
      </Pressable>

      <Pressable style={styles.btnSignUp} onPress={() => sortListByNameRedux()}>
        <Text style={styles.signUpInsideButton}>Ascending buy name</Text>
      </Pressable>

      <Pressable style={styles.btnSignUp} onPress={() => sortListByCostRedux()}>
        <Text style={styles.signUpInsideButton}>Ascending buy Cost</Text>
      </Pressable>

      <Pressable
        style={styles.btnSignUp}
        onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.signUpInsideButton}>CheckOut</Text>
      </Pressable>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  flatlist: {
    height: '50%',
    marginVertical: 30,
  },
  nameFruitContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cost: {
    color: '#6D3805',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
  },
  nameFruit: {
    color: '#6D3805',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 32,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
    backgroundColor: '#F4F4F4',
  },
  icon: {
    width: 20,
    height: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signUpInsideButton: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.41,
  },
  btnSignUp: {
    backgroundColor: '#FF5E00',
    marginBottom: 30,
    height: '8%',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 41,
    letterSpacing: 0.41,
    color: '#FF5E00',
  },
  mainTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
});
