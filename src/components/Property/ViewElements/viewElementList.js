import React, { useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';

const ViewElementList = ({ ucWord, item, selectedElement, data, selectedElementUnit, navigation, index }) => (
    <View style={[styles.unitList, selectedElementUnit === item.id ? styles.selectedUnit:'']}>
        <TouchableOpacity onPress={() => selectedElement(item.id, index)}>
         <Text style={selectedElementUnit === item.id ? styles.unitListTextSelected: styles.unitListText }>{ucWord(item.name)}</Text>
        </TouchableOpacity>
    </View>
);
export default ViewElementList; 