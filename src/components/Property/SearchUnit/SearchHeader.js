import React from "react";
import { SafeAreaView, Image, View, TextInput } from "react-native";
import { styles } from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Images from '../../../assets/Images/map';

function SearchHeader({ navigation, searchUnit }) {
    const [keyword, setKeyword] = React.useState('');
    const inputRef = React.createRef();

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.headerOption} onPress={() => navigation.goBack(null)}>
                <Image style={styles.headerIcon} source={Images.Property.Close} />
            </TouchableOpacity>
            <View style={styles.searchInputContainer}>
                <Image style={styles.searchIcon} source={Images.Property.Search} />
                <TextInput
                    // re={inputRef}
                    autoFocus={true}
                    style={styles.searchInput}
                    placeholder="Search by Dwelling"
                    onChangeText={ (value) => {
                        setKeyword(value);
                    }}
                    onSubmitEditing={ () => {
                        searchUnit(keyword)
                    }}
                />
            </View>
            {/* <TouchableOpacity style={styles.headerOption}>
                <Image style={styles.headerIcon} source={Images.Property.Filter} />
            </TouchableOpacity> */}
        </View>
    )
}


export default SearchHeader;