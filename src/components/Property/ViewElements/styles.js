
import { StyleSheet } from 'react-native';
import {
    Dimensions
} from 'react-native';
import {
    LightGray
} from '../../../utils/common'
export const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    viewItemContainer: {
        flex: 1, 
        marginBottom: 20,
        width: '100%'
    },
    viewParentContainer: {
        display: "flex",
        marginTop: height * 0.12,
        backgroundColor: '#F5F5F5',
        marginBottom: 30
    },
    upperItem: {
        height: height * 0.15,
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    lowerItem: {
        marginBottom: height * 0.07,
    },
    unitHeader: {
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    unitsContainer: {
        width: width * 0.90,
        height: 60,
        backgroundColor: '#1AFFEE',
        marginTop: 20,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 20
    },
    unitList: {
        textTransform: "capitalize",
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginLeft: 2,
        paddingLeft: 20,
        paddingRight: 20
    },
    unitListText: {
        textTransform: "capitalize",
        fontSize: 16,
        color: 'gray',
        fontWeight: '400'
    },
    unitListTextSelected: {
        textTransform: "capitalize",
        fontSize: 16,
        color: '#1D2B41',
        fontWeight: '600'
    },
    selectedUnit: {
        backgroundColor: 'rgba(255, 255, 255, 0.541);',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    collapseView: {
        height: height * 0.09,
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        marginTop:1.5,
        borderBottomWidth: 0,
    },
    collapseViewCollapsed: {
        height: height * 0.09,
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 5
    },
    headerOption: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        flexBasis: "10%",
        marginLeft: 10
    },
    headerIcon: {
        width: 40, 
        height: 40 ,
        resizeMode: 'contain'
    },
    textHeader: {
        flexBasis: "70%",
        marginLeft: 20
    },
    textHeaderItem: {
        fontSize: 18,
        textTransform: 'capitalize',
        fontWeight: '500'
    },
    rightArrow: {
        flexBasis: "10%"
    },
    rightArrowIcon: {
        width: 18, 
        height: 18 ,
    },
    selectionContainer: {
        minHeight: height * 0.05,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: width,
    },
    parentSelectionContainer: {
        minHeight: height * 0.05,
        backgroundColor: '#FFF',
        width: width,
    },
    innerItemsParent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 5,
        zIndex: 1,
        flexWrap: 'wrap',
    },
    innerItems: {
        padding: 5,
        backgroundColor: '#F1F1F1',
        borderRadius: 50,
        width: 'auto',
        margin: 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20
    },
    innerItemsText: {
        textAlign: 'center',
        marginLeft: 2
    },
    innerItemsIcon: {
        width: 25,
        height: 20,
        marginLeft: 10
    },
    innerItemsCheckBox: {
        margin: 2
    },
    photoComment: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    },
    photoCommentText: {
        color: '#0F0059',
        fontSize: 14,
        fontWeight: '600'
    },
    capturedImagesContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 10,
        flexBasis: '100%',
        maxHeight: 110,
        minHeight: 110,
    },
    capturedImagesContainerReview: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 10,
        maxHeight: 110,
        minHeight: 110,
        width: width,
        paddingLeft: 20,
        paddingRight: 20
    },
    capturedImages: {
        height: 100,
        width: 100,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 20
    },
    closeBotton: {
        height: 20,
        width: 20
    },
    closeFloat: {
        position: 'absolute',
        zIndex: 100,
        right: 1
    },
    divider: {
        borderColor: '#EFEFEF',
        borderWidth: 1,
        position: 'absolute',
        left: 30,
    },
    defectContainer: {
        flexBasis: '100%',
        marginLeft: 40,
        marginTop: 40,
        maxHeight: 25
    },
    defectContainerText: {
        color: '#1D2B41',
        fontWeight: '700',
        fontSize: 13
    },
    defectContainerButtons: {
        flexBasis: '100%',
        marginLeft: 40,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        maxHeight: 40,
        minHeight:40
    },
    noDefectText: {
        flexBasis: '50%',
        marginLeft: 40,
        marginTop: 10,
        color: '#62D366',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: '600',
        maxHeight: 40,
        minHeight:40
    },
    noDefectTextTrue: {
        fontSize: 13,
    },
    hasDefectTrue: {
        marginLeft: 20,
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        width: width * 0.60,
        borderRadius: 10,
        borderColor: '#D2D2D2',
        flexBasis: '60%'
    },
    foundDefectText: {
        marginLeft: 30,
        marginTop: 10,
        fontStyle: 'italic',
        fontWeight: '600',
        fontSize: 16,
        color: '#DC5858'
    },
    foundDefectText2: {
        marginLeft: 20,
        marginTop: 3,
        fontStyle: 'italic',
        fontWeight: '400',
        fontSize: 16,
        color: '#DC5858'
    },
    defectContainerButton: {
        borderColor: '#1D2B41',
        borderWidth: 1,
        padding: 5,
        margin: 3,
        borderRadius: 100,
        width: 60,
    },
    defectContainerButtonText: {
        textAlign: 'center',
        fontWeight: '600'
    },
    commentView: {
        height: height,
        backgroundColor: "#F5F5F5",
        width: width,
        zIndex: 10000,
        position: 'absolute',
        top:0,
        left: 0,
        flex: 1,
        marginTop: 90,
        display: 'flex',
        alignItems: 'center',
    },
    commentInput: {
        width: width * 0.90,
        height: height * 0.30,
        borderRadius: 10,
        marginTop: -30,
        padding: 10,
        backgroundColor: '#FFF',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 300,
        borderRadius: 10,
        padding: 10
    },
    modalTransparent: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 300,
        borderRadius: 10,
        backgroundColor: 'transparent',
        zIndex: 500000
    },
    modalText: {
        color: '#1D2B41',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10
    },
    modalCancel: {
        margin: 10,
        borderRadius: 100,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 4,
        paddingBottom: 4,
        borderWidth: 1
    },
    modalButtonTextCancel: {
        color: '#1D2B41',
        fontSize: 16,
        fontWeight: '900',
        textAlign: 'center',
    },
    modalConfirm: {
        margin: 10,
        borderRadius: 100,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 4,
        paddingBottom: 4,
        borderWidth: 1,
        backgroundColor: '#1D2B41',
    },
    modalButtonTextConfirm: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '900',
        textAlign: 'center',
    },
    modalButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: width * 0.60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButton: {
        zIndex: 1000,
        position: 'absolute',
        bottom: 20,
        width: width * 0.80,
        left: width * 0.10,
        backgroundColor: '#0F0059',
        height: 45,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    commentButton: {
        width: width * 0.60,
        backgroundColor: '#1D2B41',
        height: 45,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    loader: {
        height: '70%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerItemsCheckBox: {
        marginLeft: 5,
        marginTop: -6,
        height: 32,
        width: 32
    },
});