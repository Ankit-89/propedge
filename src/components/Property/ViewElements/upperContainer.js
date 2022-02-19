import React from "react";
import {
    View,
    Text,
    FlatList
} from 'react-native';
import ViewElementList from './viewElementList';
import { styles } from './styles';

const UpperContainer = ({ showComment, setSelectedElement, ucWord, eu, data, navigation, selectedElement, selectedElementUnit, selectedParent }) => (
    <View style={styles.viewItemContainer}>
        {
            data && !selectedElementUnit ? setSelectedElement(data[0].id) : null
        }
        <View style={styles.upperItem}>
            {
                !showComment ?
                    <Text style={styles.unitHeader}>Select element in Unit</Text>
                :<></>
            }
            
            <View style={styles.unitsContainer}>
                <FlatList
                    // data={selectedParent >= 0 ? Object.keys(eu[selectedParent][Object.keys(eu[selectedParent])[0]]): Object.keys(eu[0][Object.keys(eu[0])[0]])}
                    data={eu}
                    renderItem={({ item, index }) => <ViewElementList ucWord={ucWord} item={item} index={index} navigation={navigation} data={data} selectedElement={selectedElement} selectedElementUnit={selectedElementUnit}/>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    </View>
);
export default UpperContainer; 