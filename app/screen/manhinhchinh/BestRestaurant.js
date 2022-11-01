import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  FlatList,
  Dimensions,
  ViewBase,
  Ionicons,
  tag,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';

import SQLite from 'react-native-sqlite-storage';

import SQLiteHelper from '@app/utils/SQLiteHelper';
const sqliteH = new SQLiteHelper({name: 'tdcore.db', createFromLocation: 1});

import {Colors, Fonts, Images} from '@app/themes';
import {
  TDButtonPrimary,
  TDButtonSecondary,
  TDDividerWithTitle,
  TDTextInputAccount,
  TDTextSearch,
  TDHeader,
} from '@app/components';

const BestRestaurant = () => {
  const navigation = useNavigation();
  const restaurantCard = [
    {
      id: '1',
      name: 'LongHorn Steakhouse',
      location: '3605 Parker Rd',
      distance: '0.6km',
      image: require('@app/assets/images/LongHornSteakhouse.png'),
    },
    {
      id: '2',
      name: 'Famous Dave',
      location: '8558 Green Rd',
      distance: '1.6km',
      image: require('@app/assets/images/FamousDave.png'),
    },
    {
      id: '3',
      name: 'Hard Rock Cafe',
      location: '7529 E.Pecan St',
      distance: '2.7km',
      image: require('@app/assets/images/HardRockCafe.png'),
    },
    {
      id: '4',
      name: 'The Old Spaghetti Factory',
      location: '8558 Green Rd',
      distance: '0.6km',
      image: require('@app/assets/images/TheOldSpaghettiFactory.png'),
    },
    {
      id: '5',
      name: 'Denny',
      location: '3605 Parker Rd',
      distance: '1.4km',
      image: require('@app/assets/images/Denny.png'),
    },
  ];
  const oneRestaurant = ({item}) => (
    <ScrollView>
      <View style={styles.restaurantContainer}>
        <Image source={item.image} style={styles.restaurant} />
        <View><Text style={styles.titleRestaurant}>{item.name}</Text></View>
        
        <View><Image style={styles.star} source={require('@app/assets/images/star.png')} /></View>
        <Text style={styles.ratingText}>4.4</Text>
        <Text style={styles.reviewText}>({999})</Text>
        <Text style={styles.distanceText}>{item.distance}</Text>
      </View>
    </ScrollView>
  );
  const itemSeperator = () => {
    return <View style={styles.seperator} />;
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.tbr} source={require('@app/assets/images/TOPBESTRESTAURANT.png')} />
        <Image style={styles.human} source={require('@app/assets/images/human.png')} />
      </View>
      <View>
        <FlatList
          data={restaurantCard}
          renderItem={oneRestaurant}
          ItemSeparatorComponent={itemSeperator}
          ListEmptyComponent={<Text>No Restaurants Available</Text>}
        />
      </View>
    </ScrollView>
  );
};

export default BestRestaurant;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#3AC5C9',
  },
  tbr: {
    marginTop: 75,
    marginLeft: 30,
  },
  human: {
    marginTop: 40,
    marginRight: 20,
    marginBottom: 20,
  },
  titleRestaurant: {
    left: 135,
    bottom: 96,
    fontSize: 16,
  },
  restaurant: {
    width: 120,
    height: 95,
    
  },
  star: {
    left: 135,
    bottom: 70,
  },
  ratingText: {
    left: 160,
    bottom: 90,
  },
  reviewText: {
    left: 184,
    bottom: 105,
    fontSize: 10,
  },
  distanceText: {
    left: 220,
    bottom: 123,
  },
});
