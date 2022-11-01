import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import SQLite from 'react-native-sqlite-storage';

import SQLiteHelper from '@app/utils/SQLiteHelper';
const sqliteH = new SQLiteHelper({name: 'tdcore.db', createFromLocation: 1});

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch} from '@app/components';

const HomeScreenMain = () => {
  const navigation = useNavigation();
  const foodType = [
    {
      id: '1',
      name: 'Burger',
      image: require('@app/assets/images/Burger.png'),
    },
    {
      id: '2',
      name: 'Coffee',
      image: require('@app/assets/images/Coffee.png'),
    },
    {
      id: '3',
      name: 'Tea',
      image: require('@app/assets/images/Tea.png'),
    },
    {
      id: '4',
      name: 'Cream',
      image: require('@app/assets/images/Cream.png'),
    },
    {
      id: '5',
      name: 'Beer',
      image: require('@app/assets/images/Beer.png'),
    },
    {
      id: '6',
      name: 'Donuts',
      image: require('@app/assets/images/Donuts.png'),
    },
    {
      id: '7',
      name: 'Cake',
      image: require('@app/assets/images/Cake.png'),
    },
    {
      id: '9',
      name: 'Meat',
      image: require('@app/assets/images/Meat.png'),
    },
  ];

  const oneFood = ({item}) => (
    <View style={styles.item}>
      <View style={styles.foodContainer}>
        <Image source={item.image} style={styles.food} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  const headerComponent = () => {
    return <Text style={styles.listHeadLine}>Categories</Text>;
  };
  const itemSeperator = () => {
    return <View style={styles.seperator} />;
  };
  return (
    <ScrollView>
      <Image style={styles.location} source={require('@app/assets/images/location.png')} />
      <TDTextSearch placeholder={'Choose an address >'} />
      <View style={styles.banner}>
        <Image source={require('@app/assets/images/banner.png')} />
      </View>
      <FlatList
        data={foodType}
        renderItem={oneFood}
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={headerComponent}
        ItemSeparatorComponent={itemSeperator}
        numColumns={4}
        ListEmptyComponent={<Text>No Categories Available</Text>}
      />
      <View
        style={{
          paddingTop: 5,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black', fontSize: 16}}>{'Best Restaurant '}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BestRestaurant');
          }}>
          <Text style={{color: '#3AC5C9', fontSize: 15, fontWeight: 'bold', textAlign: 'right', marginRight: 10}}>See all</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreenMain;

const styles = StyleSheet.create({
  location: {
    padding: 15,
    position: 'absolute',
    width: 24,
    height: 40,
    left: 7,
    top: 50,
  },
  banner: {
    marginLeft: 35,
    marginTop: 8,
  },
  listHeader: {
    width: 345,
    height: 28,
    left: 15,
    marginTop: 18,
    fontFamily: 'Helvetica Neue',
    display: 'flex',
    lineHeight: 28,
  },
  listHeadLine: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
  },
  seperator: {
    padding: 10,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    width: Dimensions.get('window').width / 4,
    padding: 10,
  },
  foodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  food: {
    height: 60,
    width: 60,
  },
  name: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
  },
  bestres: {
    position: 'absolute',
    width: 345,
    height: 28,
    left: 15,
    top: 600,
  },
  topres: {
    position: 'absolute',
    width: 345,
    height: 20,
    left: 15,
    top: 650,
  },
});
