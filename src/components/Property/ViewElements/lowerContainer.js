import React from "react";
import CollapsedView from './collapsedView';
import { FlatList, Text, View, ScrollView } from "react-native";
import { styles } from './styles';
const LowerContainer = ({ isCompleted, setEvidenceHolder, showEvidence, isWaiting, updateItem, selectedMenu, ucWord, hasDefect, selectedItems, addItem, isSelected, parents, data, navigation, selectedElement, selectedElementUnit, selectedParent, setSelectedParent, launchCamera, capturedImages, removeImage }) => (
    <View style={styles.viewParentContainer}>
        <View style={styles.lowerItem}>
            {
                selectedElementUnit && data.length && data[0].checklist_groups ?
                    <FlatList
                        data={data[0].checklist_groups}
                        renderItem={({ item, index }) => <CollapsedView isCompleted={isCompleted} setEvidenceHolder={setEvidenceHolder} showEvidence={showEvidence} isWaiting={isWaiting} updateItem={updateItem} selectedMenu={selectedMenu} ucWord={ucWord} hasDefect={hasDefect} selectedItems={selectedItems} addItem={addItem} isSelected={isSelected} launchCamera={launchCamera} item={item} index={index} navigation={navigation} data={data[0].checklist_groups} selectedElement={selectedElement} selectedElementUnit={selectedElementUnit} selectedParent={selectedParent} setSelectedParent={setSelectedParent} capturedImages={capturedImages} removeImage={removeImage}/>}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                : <></>
            }
        </View>
    </View>
);
export default LowerContainer; 