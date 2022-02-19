import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import * as Images from '../../../assets/Images/map';
import FastImage from "react-native-fast-image";

// element ==  CheckList item
// item == Check list Group
// SelectedGroup == Check List selected Group
// selectedMenuAreaId == selected Check List Area ID
// updateGroupId == Method to update groupId
// addItem == Method to add item to selectedItems use state
// isItemSelected == Method to get object from checkList Item, groupID & areaID
// updateItem == Method to update object value
// openComment == Method to show/hide comment Model
// launchCamera == Method to open camera
const OwnerFeedback = ({ element, item, selectedGroup, selectedMenuAreaId, updateGroupId, addItem, isItemSelected, updateItem, openComment, launchCamera, removeImage }) => (
    <>
        {
            element.submission.owner_feedback && element.submission.owner_feedback !== null ?
                <OwnerFeedbackView ownerFeedback={element.submission.owner_feedback} />
                :
                <>
                    <View style={styles.defectContainerButtons}>
                        <TouchableOpacity
                            style={isItemSelected(element, item.id, selectedMenuAreaId).hasDefect === 1 ? [styles.defectContainerButton, { backgroundColor: '#0F0059' }] : styles.defectContainerButton}
                            onPress={() =>
                                updateItem(element, item.id, selectedMenuAreaId, 1)
                            }>
                            <Text style={isItemSelected(element, item.id, selectedMenuAreaId).hasDefect === 1 ? [styles.defectContainerButtonText, { color: 'white' }] : styles.defectContainerButtonText}>
                                Agree
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={isItemSelected(element, item.id, selectedMenuAreaId).hasDefect === 0 ? [styles.defectContainerButton, { backgroundColor: '#0F0059' }] : styles.defectContainerButton}
                            onPress={() =>
                                updateItem(element, item.id, selectedMenuAreaId, 0)
                            }>
                            <Text style={isItemSelected(element, item.id, selectedMenuAreaId).hasDefect === 0 ? [styles.defectContainerButtonText, { color: 'white' }] : styles.defectContainerButtonText}>
                                Dispute
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {
                        isItemSelected(element, item.id, selectedMenuAreaId).hasDefect === 0 ?
                            <>
                                <View style={styles.disputeContainerButtons}>
                                    <TouchableOpacity
                                        style={styles.disputeContainerButton}
                                        onPress={() =>
                                            launchCamera(element, item.id, selectedMenuAreaId)
                                        }>
                                        <Image style={styles.cameraIcon} source={Images.Property.Camera} />
                                        <Text style={styles.defectActionContainerText}>Add Photo</Text>
                                    </TouchableOpacity>
                                    <View style={styles.seperator}></View>
                                    <TouchableOpacity
                                        style={styles.disputeContainerButton}
                                        onPress={() =>
                                            openComment(true)
                                        }>
                                        <Image style={styles.commentIcon} source={Images.Property.Comment} />
                                        <Text style={[styles.defectActionContainerText]}>Add Comment</Text>
                                    </TouchableOpacity>
                                </View>
                                {
                                    isItemSelected(element, item.id, selectedMenuAreaId).images.length > 0 ?
                                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.capturedImagesContainer}>
                                            {
                                                isItemSelected(element, item.id, selectedMenuAreaId).images.map(i => {
                                                    return (
                                                        i ?
                                                            <View key={i.path}>
                                                                <TouchableOpacity style={styles.closeFloat} onPress={() =>
                                                                    removeImage(element, item.id, selectedMenuAreaId, i)
                                                                }>
                                                                    <Image style={styles.closeBotton} source={Images.Property.Close} />
                                                                </TouchableOpacity>
                                                                <Image style={styles.capturedImages} source={{ uri: `data:${i.mime};base64,${i.data}` }} />
                                                            </View>
                                                            : null
                                                    )
                                                })
                                            }
                                        </ScrollView>
                                        : null
                                }
                                {
                                    isItemSelected(element, item.id, selectedMenuAreaId).comment !== undefined && isItemSelected(element, item.id, selectedMenuAreaId).comment !== '' ?
                                        <View style={styles.commentDisplayView}>
                                            <Text style={styles.commentLableText}>
                                                {isItemSelected(element, item.id, selectedMenuAreaId).comment}
                                            </Text>
                                        </View>
                                        : null
                                }

                            </>

                            : null
                    }
                </>

        }
    </>
)

// Set Owner Feedback from API data
const OwnerFeedbackView = ({ ownerFeedback }) => (
    <>
        <View style={styles.auditorFeedBackContainer}>
            <Text style={styles.auditorFeedBackContainerText}>
                Owner’s feedback(You)
            </Text>
            <Text style={ownerFeedback.is_dispute === true ? styles.elementDisputedText : styles.noDefectOwnerText}>{ownerFeedback.is_dispute ? 'The element has been logged as disputed.' : 'The element has been logged as confirmed.'}</Text>
        </View>
        {
            ownerFeedback.images && ownerFeedback.images.length > 0 && (
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.capturedImagesContainer}>
                    {
                        ownerFeedback.images.map(imageObj => {
                            return (
                                imageObj ?
                                    <View key={imageObj.id}>
                                        <FastImage
                                            style={styles.capturedImages}
                                            source={{
                                                uri: imageObj.url,
                                                priority: FastImage.priority.normal,
                                            }}
                                            resizeMode={FastImage.resizeMode.cover}
                                        />
                                    </View>
                                    : null
                            )
                        })
                    }
                </ScrollView>
            )
        }
        {
            ownerFeedback.is_dispute && ownerFeedback.comment && ownerFeedback.comment !== undefined && (
                <View style={styles.commentDisplayView}>
                    <Text style={styles.commentLableText}>
                        {ownerFeedback.comment ?? ''}
                    </Text>
                </View>
            )
        }

    </>
)

export default OwnerFeedback;