
import { StyleSheet } from 'react-native';
import {
    Dimensions
} from 'react-native';
import { FontFamily } from '../../utils/common';
import FontSize from '../../utils/common/FontsSize';

export const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 40,
        color: '#000'
    },
    headerTextInner: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '400',
        color: '#000'
    },
    headerTextInner2: {
        marginTop: 30,
        fontSize: 16,
        fontWeight: '400',
        color: '#000'
    },
    imageContainer: {
        //height: height * 0.30,
        marginBottom: height * 0.05,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userImage1: {
        resizeMode: 'contain',
        height: 190,
        width: 190,
    },
    userImage2: {
        resizeMode: 'contain',
        height: 150,
        width: 150,
    },
    userTypeButton: {
        width: width * 0.50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F0059',
        height: height * 0.05,
        borderRadius: 100,
    },
    userTypeButtonText: {
        color: '#FFF',
        // fontWeight: '600',
        fontFamily: FontFamily.Mont.Black,
        fontSize: FontSize(14)
    },
    userTypeButtonSeparator: {
        height: height * 0.05,
    }
})