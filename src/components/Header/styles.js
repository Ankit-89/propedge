
import { StyleSheet } from 'react-native';
import FontSize from '../../utils/common/FontsSize';
import {
    BackGround,
    ScreenWidth,
    Theme,
    FontFamily,
    Shadow,
    LightGray
} from '../../utils/common'
 
const horizontalPadding = 15;

export const styles = StyleSheet.create({
    unitHeaderText: {
        fontSize: FontSize(13),
        fontFamily: FontFamily.Mont.Regular,
        color: '#1D2B4170',
        textAlign: 'center',

    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 3,
    },
    headerOption: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: LightGray,
        borderRadius: 13,
    },
    headerIcon: {
        width: 16, 
        height: 16 ,
        resizeMode: 'contain'
    },
    headerCloseIcon: {
        width: 30, 
        height: 30 ,
        resizeMode: 'contain'
    },
    headerTitle: {
        fontFamily: FontFamily.Mont.SemiBold,
        fontSize: FontSize(19),
        color: Theme,
        alignSelf: 'center'
    }
});