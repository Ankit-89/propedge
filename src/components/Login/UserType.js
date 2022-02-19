import React, {useState} from 'react';
import {SafeAreaView, Image, View, TextInput, Text} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Images from '../../assets/Images/map';

function UserType({navigation}) {
  const [selected, setSelected] = useState(null);
  const selectType = value => {
    if (selected === value) {
      setSelected(null);
    } else {
      setSelected(value);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>You are?</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => selectType('auditor')}>
          <Image
            source={
              selected === 'auditor'
                ? Images.Login.AuditorSelected
                : Images.Login.Auditor
            }
            style={styles.userImage1}
          />
        </TouchableOpacity>
        <Text style={styles.headerTextInner}>Auditor</Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => selectType('owner')}>
          <Image
            source={
              selected === 'owner'
                ? Images.Login.OwnerSelected
                : Images.Login.Owner
            }
            style={styles.userImage2}
          />
        </TouchableOpacity>
        <Text style={styles.headerTextInner2}>Owner</Text>
      </View>
      {selected !== null ? (
        <TouchableOpacity
          style={styles.userTypeButton}
          onPress={() =>
            navigation.navigate('Login', {
              userType: selected,
            })
          }>
          <Text style={styles.userTypeButtonText}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.userTypeButtonSeparator}></View>
      )}
    </SafeAreaView>
  );
}

export default UserType;
