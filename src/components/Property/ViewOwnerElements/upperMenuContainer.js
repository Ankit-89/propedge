import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import ViewMenuItem from "./viewMenuItem";

// MenuArea is a array of Checklist areas
// SelectedMenuArea is a single CheckList
// UpdateMenuArea is a const method which will use to update check-list areas

const UpperMenuContainer = ({ menuAreas, selectedMenuArea, updateMenuArea }) => (
    <View style={styles.viewItemContainer}>
        <View style={styles.upperItem}>
            <Text style={styles.selectElementHeader}>Select element in Unit (Owner)</Text>
            <View style={styles.checkListAreaContainer}>
                <FlatList
                    data={menuAreas}
                    renderItem={({ item, index }) =>
                        <ViewMenuItem
                            item={item}
                            selectedMenuArea={selectedMenuArea}
                            updateMenuArea={updateMenuArea}
                            menuIndex={index}
                        />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    </View>
);

export default UpperMenuContainer;