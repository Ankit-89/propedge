import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';

const ViewUnitItem = ({ item, index, navigation }) => (

    <>
        {item ?
            <TouchableOpacity onPress={() => navigation.navigate('UnitDetail', {
                id: item.id
            })}>
                <View style={styles.viewItemContainer}>
                    <View style={styles.unitContainer}>
                        <FastImage
                            style={styles.image}
                            source={{
                                uri: item.image.url,
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        <Text style={styles.unitName}>{item.owner.name}</Text>
                        <View style={styles.infoContainer}>
                            <View style={styles.childInfoContainer}>
                                <Text style={[styles.unitHeaderText, { textAlign: 'left', }]}>Sr. No</Text>
                                <Text style={[styles.unitValueText, { textAlign: 'left' }]} numberOfLines={2}>{item.serial_number}</Text>
                            </View>
                            <View style={styles.childInfoContainer}>
                                <Text style={styles.unitHeaderText}>Dwelling</Text>
                                <Text style={styles.unitValueText} numberOfLines={2}>{item.dwelling}</Text>
                            </View>
                            <View style={styles.childInfoContainer}>
                                <Text style={[styles.unitHeaderText, { textAlign: 'right' }]}>Unit Type</Text>
                                <Text style={[styles.unitValueText, { textAlign: 'right' }]} numberOfLines={2}>{item.type}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            : null
        }
    </>

);
export default ViewUnitItem; 