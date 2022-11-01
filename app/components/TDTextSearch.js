/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import {images} from '@app/assets/images'
import {Colors, Fonts, Images} from '@app/themes';

const TDTextSearch = ({
  showEye,
  value,
  onChangeText,
  placeholder,
  title,
  image,
  contentStyle,
  titleStyle,
  imageStyle,
  onPress,
  ...props
}) => {
  const [hide, isHide] = useState(false);
  return (
    <View style={styles.content}>
      <Text style={{color: Colors.gray70, fontSize: Fonts.size.medium}}>{title ?? ''}</Text>
      <View style={styles.textinputContent}>
        <TextInput multiline={false} style={styles.textinput} placeholderTextColor={Colors.gray60} placeholder={placeholder} />
      </View>
    </View>
  );
};

export default TDTextSearch;

const styles = StyleSheet.create({
  content: {marginTop: 16},
  textinputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    height: 52,
    backgroundColor: Colors.transparent,
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 40,
  },
  textinput: {
    ...Fonts.style.large_regular,
    flex: 1,
    paddingVertical: 10,
  },
});
