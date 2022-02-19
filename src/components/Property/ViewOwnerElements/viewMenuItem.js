
import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';

const ViewMenuItem = ({ item, selectedMenuArea, updateMenuArea, menuIndex }) => (
    <View style={[styles.areaList, selectedMenuArea.id === item.id ? styles.selectedArea : '']}>
        <TouchableOpacity onPress={() => 
            updateMenuArea(item, menuIndex)}
        >
         <Text style={selectedMenuArea.id === item.id ? styles.menuAreaTextSelected : styles.menuAreaText}>{item.name}</Text>
        </TouchableOpacity>
    </View>
);
export default ViewMenuItem; 