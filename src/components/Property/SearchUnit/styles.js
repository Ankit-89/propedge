
import { StyleSheet } from 'react-native';
import FontSize from '../../../utils/common/FontsSize';
import {
    White5,
    ScreenWidth,
    Theme,
    FontFamily,
    Shadow,
    LightGray
} from '../../../utils/common'
import { height } from '../../../screens/Login';

const horizontalPadding = 15;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    headerOption: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: LightGray,
        borderRadius: 13,
    },
    headerIcon: {
        width: 16, 
        height: 16 
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: LightGray,
        borderRadius: 13,
        marginLeft:15,
        // marginHorizontal: 15,
        paddingHorizontal: 10,
    },
    searchIcon: {
        width: 16,
        height: 16,
        alignSelf: 'center'
    },
    searchInput: {
        marginLeft: 10,
        height: 40,
        fontFamily: FontFamily.Mont.Light,
        fontSize: FontSize(13),
        flex: 1,
    },
    flatListContainer: {
        paddingTop: 15,
        backgroundColor: White5
    }   
});