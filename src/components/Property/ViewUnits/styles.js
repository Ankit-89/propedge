
import { StyleSheet } from 'react-native';
import FontSize from '../../../utils/common/FontsSize';
import {
    BackGround,
    White5,
    ScreenWidth,
    Theme,
    FontFamily,
    Shadow,
    LightGray
} from '../../../utils/common'

const horizontalPadding = 15;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        borderRadius: 15,
        height: ScreenWidth * 0.35,
        backgroundColor: 'grey'
    },
    flatListContainer: {
        paddingTop: 15,
        backgroundColor: White5
    },
    viewItemContainer: {
        flex: 1,
        marginBottom: 20
    },
    unitContainer: {
        marginHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: Shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 3,
    },
    ownerName: {
        fontSize: FontSize(18),
        fontFamily: FontFamily.Mont.Bold,
        color: Theme,
        marginLeft: 15,
        marginTop: 35
    },
    unitName: {
        fontSize: FontSize(18),
        fontFamily: FontFamily.Mont.Bold,
        color: Theme,
        marginLeft: 15,
        marginTop: 15
    },
    infoContainer: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 15,
        marginHorizontal: 15,
        marginBottom: 15,
    },
    childInfoContainer: {
        flex: 1
    },
    unitHeaderText: {
        fontSize: FontSize(11),
        fontFamily: FontFamily.Mont.Regular,
        color: '#1D2B4170',
        textAlign: 'center',

    },
    unitValueText: {
        fontSize: FontSize(12),
        fontFamily: FontFamily.Mont.SemiBold,
        color: Theme,
        textAlign: 'center',
        marginTop: 10,
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
        height: 16,
        resizeMode: 'contain'
    },
    headerTitle: {
        fontFamily: FontFamily.Mont.SemiBold,
        fontSize: FontSize(19),
        color: Theme,
        alignSelf: 'center'
    }
});