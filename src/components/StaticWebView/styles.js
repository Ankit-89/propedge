
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

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BackGround
    },
    headerOption: {
        marginLeft: 15,
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
});