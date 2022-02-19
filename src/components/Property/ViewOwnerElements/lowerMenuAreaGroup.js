import React from "react";
import { FlatList, View, Text } from "react-native";
import CheckListItems from "./checkListItems";
import { styles } from "./styles";


const LowerMenuAreaGroup = ({selectedMenuArea, selectedGroup, updateGroupId, addItem, isItemSelected, updateItem, openComment, launchCamera, removeImage}) => (
    <View style={styles.viewGroupContainer}>
        <View style={styles.lowerGroupItem}>
            <FlatList
                data={selectedMenuArea.checklist_groups}
                renderItem={({ item, index }) => 
                    <CheckListItems 
                        item={item} 
                        selectedGroup={selectedGroup}
                        selectedMenuAreaId={selectedMenuArea.id}
                        updateGroupId={updateGroupId}
                        addItem={addItem}
                        isItemSelected={isItemSelected}
                        updateItem={updateItem}
                        openComment={openComment}
                        launchCamera={launchCamera}
                        removeImage={removeImage}
                    />
                }
            />
        </View>
    </View>
);

export default LowerMenuAreaGroup;
