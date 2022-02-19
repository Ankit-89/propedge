import { StyleSheet } from 'react-native';
import {
    Dimensions
} from 'react-native';
import {
    FontFamily,
    LightGray
} from '../../../utils/common'
export const { width, height } = Dimensions.get('screen');



export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewItemContainer: {
        flex: 1,
    },
    upperItem: {
        height: 120,//width * 0.30,
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectElementHeader: {
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    checkListAreaContainer: {
        width: width * 0.90,
        height: 50,
        backgroundColor: '#1AFFEE',
        marginTop: 20,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    areaList: {
        textTransform: "capitalize",
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 7,
    },
    selectedArea: {
        backgroundColor: 'rgba(255, 255, 255, 0.541);',
        borderRadius: 15,
    },
    menuAreaText: {
        fontFamily: FontFamily.Mont.Regular,
        fontSize: 15,
        color: '#1D2B41',
        opacity: 0.5,
        paddingHorizontal: 10
    },
    menuAreaTextSelected: {
        fontFamily: FontFamily.Mont.SemiBold,
        color: '#1D2B41',
        fontSize: 15,
        paddingHorizontal: 10
    },
    viewGroupContainer: {
        display: "flex",
        marginTop: 120,//width * 0.30,
        // backgroundColor: '#F5F5F5',
    },
    lowerGroupItem: {
        marginBottom: height * 0.07,
        backgroundColor: '#F5F5F5'
    },
    collapseView: {
        height: height * 0.09,
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 1.5,
    },
    collapseViewCollapsed: {
        height: height * 0.09,
        marginBottom: 2,
        // marginTop: 1.5,
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
    },
    itemHeaderOption: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: LightGray,
        borderRadius: 100,
        flexBasis: "10%",
        marginLeft: 15
    },
    itemHeaderIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    textHeader: {
        flexBasis: "70%",
        marginLeft: 20
    },
    textHeaderItem: {
        fontFamily: FontFamily.Mont.SemiBold,
        fontSize: 18,
        textTransform: 'capitalize',
    },
    rightArrow: {
        flexBasis: "10%"
    },
    rightArrowIcon: {
        width: 18,
        height: 18,
    },
    parentSelectionContainer: {
        minHeight: height * 0.05,
        backgroundColor: '#FFF',
        width: width,
        marginBottom:2
    },
    selectionContainer: {
        minHeight: height * 0.05,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: width,
    },
    innerItemContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        marginRight: 20,
        alignItems: 'center'
    },
    innerItemsParent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 5,
        zIndex: 1,
        flexWrap: 'wrap'
    },
    innerItems: {
        padding: 5,
        backgroundColor: '#F1F1F1',
        borderRadius: 50,
        width: 'auto',
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20
    },
    innerItemsCheckBox: {
        margin: 3,
        height: 30,
        width: 30
    },
    innerItemsText: {
        fontFamily: FontFamily.Mont.Light,
        textAlign: 'center',
        marginLeft: 8
    },
    innerItemsTextSelected: {
        fontFamily: FontFamily.Mont.SemiBold,
        textAlign: 'center',
        marginLeft: 8
    },
    switchButton: {
        height: 20,
        width: 40,
    },
    auditorFeedBackContainer: {
        flexBasis: '100%',
        paddingLeft: 40,
        paddingRight: 10,
        marginTop: 40,
    },
    auditorFeedBackContainerText: {
        color: '#1D2B41',
        fontWeight: '700',
        fontSize: 16,
    },
    capturedImagesContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 10,
        flexBasis: '100%',
    },
    capturedImages: {
        height: 100,
        width: 100,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 20,
    },
    defectFoundText: {
        flexBasis: '100%',
        marginLeft: 40,
        marginTop: 10,
        color: '#DC5858',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: '600',
    },
    noDefectText: {
        flexBasis: '100%',
        marginLeft: 40,
        marginTop: 10,
        color: '#62D366',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: '600',
    },
    commentDisplayView: {
        marginLeft: 40,
        marginRight:10,
        marginTop: 10,
        display: 'flex',
        borderColor: '#B0B0B0',
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
    },
    commentLableText: {
        fontSize: 15,
        fontWeight: 'normal',
    },
    noDefectOwnerText: {
        marginTop: 10,
        color: '#62D366',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: '600',
    },
    elementDisputedText: {
        marginTop: 10,
        color: '#DC5858',
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: '600',
    },
    defectContainerButtons: {
        flexBasis: '100%',
        marginLeft: 40,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    defectContainerButton: {
        borderColor: '#0F0059',
        borderWidth: 1,
        padding: 5,
        margin: 3,
        borderRadius: 100,
        paddingHorizontal: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    defectContainerButtonText: {
        fontFamily: FontFamily.Mont.Bold,
        fontSize: 15,
        textAlign: 'center',
        width: 100
    },
    defectActionContainerText: {
        fontFamily: FontFamily.Mont.Bold,
        fontSize: 15,
        textAlign: 'center',
    },
    selectedDisputeButton: {
        padding: 5,
        margin: 3,
        borderRadius: 100,
        paddingHorizontal: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F0059',
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 300,
        borderRadius: 10
    },
    modalText: {
        fontFamily: FontFamily.Mont.Regular,
        color: '#1D2B41',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center',
        marginBottom: 10
    },
    modalCancel: {
        marginHorizontal: 10,
        borderRadius: 60,
        borderWidth: 1,
        height: 44,
        width: 120,
        justifyContent: 'center'
    },
    modalButtonTextCancel: {
        fontFamily: FontFamily.Mont.Regular,
        color: '#1D2B41',
        fontSize: 16,
        textAlign: 'center',
    },
    modalConfirm: {
        marginHorizontal: 10,
        borderRadius: 60,
        height: 44,
        width: 120,
        justifyContent: 'center',
        backgroundColor: '#1D2B41',
    },
    modalButtonTextConfirm: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '900',
        textAlign: 'center',
    },
    modalButtons: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        width: width * 0.60,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    submitButton: {
        zIndex: 1000,
        position: 'absolute',
        bottom: 34,
        width: width * 0.60,
        left: width * 0.20,
        backgroundColor: '#0F0059',
        height: 45,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButton: {
        zIndex: 1000,
        position: 'absolute',
        bottom: 34,
        width: width * 0.60,
        left: width * 0.20,
        backgroundColor: '#0F0059',
        height: 45,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButtonText: {
        fontFamily: FontFamily.Mont.Black,
        fontSize: 16,
        // fontWeight: '600',
        color: 'white'
    },

    disputeContainerButtons: {
        marginLeft: 40,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    disputeContainerButton: {
        padding: 5,
        margin: 3,
        paddingHorizontal: 0,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    commentIcon: {
        height: 20,
        width: 20,
        marginRight: 8,
    },
    cameraIcon: {
        height: 20,
        width: 20,
        marginRight: 8,
    },
    seperator: {
        backgroundColor: 'black',
        opacity: 0.2,
        marginHorizontal: 16,
        width: 1,
        height: 20,
        alignSelf: 'center',
    },
    commentView: {
        height: height,
        backgroundColor: "#F5F5F5",
        width: width,
        zIndex: 10000,
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        // marginTop: 90,
        display: 'flex',
        alignItems: 'center',
    },
    commentInput: {
        width: width * 0.9,
        height: height * 0.3,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 30,
        padding: 10,
        backgroundColor: '#FFF',
    },
    saveCommentButton: {
        width: width * 0.75,
        backgroundColor: '#1D2B41',
        height: 45,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        // bottom: 230,
    },
    hasPaddingButton: {
        bottom: Platform.OS === 'ios' ? height * 0.55 : height * 0.48,
    },
    noPaddingButton: {
        bottom: 230,
    },
    closeFloat: {
        position: 'absolute',
        zIndex: 100,
        right: 1,
    },
    closeBotton: {
        height: 20,
        width: 20,
    },
    divider: {
        borderColor: '#EFEFEF',
        borderWidth: 1,
        position: 'absolute',
        left: 30,
        top: 0,
        height: height * 2,
        zIndex: 0,
    },
});
