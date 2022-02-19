import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import * as Images from '../../assets/Images/map';

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: '300',
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  bannerImage: {
    resizeMode: 'contain',
    flex: 0.7,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bold: { fontWeight: 'bold' },
});

export default [
  {
    key: 1,
    title: <Text style={styles.title}>View Appointment</Text>,
    text: (
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
    ),
    banner: (
      <Image
        source={Images.OnBoarding.image1}
        style={styles.bannerImage}
      />
    ),
  },
  {
    key: 2,
    title: <Text style={styles.title}>Defect Tracking</Text>,
    text: (
      <Text style={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
    ),
    banner: (
      <Image
        source={Images.OnBoarding.image2}
        style={styles.bannerImage}
      />
    ),
  },
  {
    key: 3,
    title: <Text style={styles.title}>Check Evidence</Text>,
    text: (
      <Text style={styles.text}>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
    ),
    banner: (
      <Image
        source={Images.OnBoarding.image3}
        style={styles.bannerImage}
      />
    ),
  },
];