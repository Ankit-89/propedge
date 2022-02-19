
import { StyleSheet } from 'react-native';
import {
    BackGround,
    FontFamily,
    DarkGrey,
    White,
    Theme,
} from '../../../utils/common'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BackGround
    },
    viewStyle: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: White
    },
    settingsStyle: {
        backgroundColor: BackGround
    },
    settingsTextStyle: {
        fontFamily: FontFamily.Mont.Bold,
        color: Theme,
        fontSize: 22,
        padding: 20
    },
    subTextStyle: {
        fontFamily: FontFamily.Mont.Regular,
        color: Theme,
        marginLeft: 15,
        fontSize: 16,
        lineHeight: 16,
    },
    imageStyle: {
        height: 40,
        width: 300,
    },
    iconStyle: {
        height: 25,
        width: 25
    },
    iconStyleNext: {
        marginRight: 5,
        height: 20,
        width: 20,
    },
    innerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainSubView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: DarkGrey,
        padding: 15,
        backgroundColor: White
    },
    subViewStyle: {
        height: 40,
        width: 40,
        marginLeft: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: DarkGrey
    }
});