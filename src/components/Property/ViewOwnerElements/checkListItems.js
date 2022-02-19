import React from "react";
import { View, Image, Text, ScrollView, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Images from '../../../assets/Images/map';
import Collapsible from 'react-native-collapsible';

import { styles } from './styles';
import FastImage from "react-native-fast-image";
import OwnerFeedback from "./ownerFeedback";

const isGroupSelected = (groupId, selectedGroup) => {
    const filteredItems =
        selectedGroup &&
        selectedGroup.find(obj => {
            return (obj === groupId)
        });
    return (filteredItems) ? true : false;
};

const CheckListItems = ({ item, selectedGroup, selectedMenuAreaId, updateGroupId, addItem, isItemSelected, updateItem, openComment, launchCamera, removeImage }) => (
    <View>
        {/* Section header */}
        <TouchableOpacity style={!isGroupSelected(item.id, selectedGroup) ? styles.collapseViewCollapsed : styles.collapseView} onPress={() => updateGroupId(item.id)}>
            <View style={styles.itemHeaderOption}>
                <FastImage
                    style={styles.itemHeaderIcon}
                    source={{
                        uri: item.icon.url,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
            <View style={styles.textHeader}>
                <Text style={styles.textHeaderItem}>{item.name}</Text>
            </View>
            <View style={styles.rightArrow}>
                <Image style={styles.rightArrowIcon} source={!isGroupSelected(item.id, selectedGroup) ? Images.Property.ArrowClose : Images.Property.ArrowOpen} />
            </View>
        </TouchableOpacity>

        {/* Group Items with expand/collaps */}
        <Collapsible collapsed={!isGroupSelected(item.id, selectedGroup)}>
            <View style={styles.parentSelectionContainer}>
                <View style={styles.selectionContainer}>
                    {
                        selectedGroup.length !== 0 && Object.entries(item.checklist_items).map(([key, value]) => {
                            return (
                                <View style={styles.innerItemsParent} key={key}>
                                    {/* Item with check box */}
                                    <View style={styles.innerItemContainer}>
                                        <View style={styles.innerItems}>
                                            <TouchableOpacity onPress={() => {
                                                {
                                                    if (value.is_disabled === true) {
                                                        Alert.alert('PropEdge', 'Element has been disabled by auditor or admin.')
                                                    } else if (value.submission && value.submission.owner_feedback && value.submission.owner_feedback !== undefined) {
                                                        // Do nothing    
                                                    } else if (value.submission !== undefined && value.submission !== null) {
                                                        addItem(value, item.id, selectedMenuAreaId)
                                                    } else {
                                                        Alert.alert('PropEdge', 'Please wait for auditor to submit element or refresh the page & try again')
                                                    }
                                                }
                                            }}>
                                                <Image style={styles.innerItemsCheckBox} source={value.submission && value.submission.owner_feedback && value.submission.owner_feedback !== undefined ? Images.Property.ElementSubmitted : isItemSelected(value, item.id, selectedMenuAreaId) ? Images.Property.CircleSelected : Images.Property.CircleUnSelected}></Image>
                                            </TouchableOpacity>
                                            <Text style={isItemSelected(value, item.id, selectedMenuAreaId) ? styles.innerItemsTextSelected : styles.innerItemsText}>{value.name}</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <Image style={styles.switchButton} source={value.is_disabled === true ? Images.Property.SwitchDisabled : Images.Property.SwitchEnabled} resizeMode={"contain"} />
                                        </TouchableOpacity>
                                    </View>
                                    {
                                        isItemSelected(value, item.id, selectedMenuAreaId) &&
                                            Object.keys(isItemSelected(value, item.id, selectedMenuAreaId)).length > 0 ?
                                            <>
                                                {/* CheckList Item Submission parsing */}
                                                {
                                                    value.submission !== undefined && value.submission !== `undefined`
                                                        ?
                                                        <>
                                                            {/* Auditor’s feedback */}
                                                            <View style={styles.auditorFeedBackContainer}>
                                                                <Text style={styles.auditorFeedBackContainerText}>
                                                                    Auditor’s feedback
                                                                </Text>
                                                            </View>
                                                            {
                                                                value.submission.auditor_feedback && value.submission.auditor_feedback.images && value.submission.auditor_feedback.images.length > 0
                                                                    ?
                                                                    <>
                                                                        <ScrollView
                                                                            showsHorizontalScrollIndicator={false}
                                                                            horizontal={true}
                                                                            style={styles.capturedImagesContainer}>
                                                                            {
                                                                                // Auditor submitted image 
                                                                                Object.entries(value.submission.auditor_feedback.images).map(([key, value]) => {
                                                                                    return (
                                                                                        <View key={value.id}>
                                                                                            <FastImage
                                                                                                style={styles.capturedImages}
                                                                                                source={{
                                                                                                    uri: value.url,
                                                                                                    priority: FastImage.priority.normal,
                                                                                                }}
                                                                                                resizeMode={FastImage.resizeMode.cover}
                                                                                            />
                                                                                        </View>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ScrollView>

                                                                    </>

                                                                    : null
                                                            }
                                                            {
                                                                value.submission.auditor_feedback && value.submission.auditor_feedback.is_defected ?
                                                                    <Text style={styles.defectFoundText}>Auditor has found the defect</Text>
                                                                    :
                                                                    <Text style={styles.noDefectText}>No defect found</Text>
                                                            }
                                                            {/* Auditor's Comment */}
                                                            <View style={styles.commentDisplayView}>
                                                                <Text style={styles.commentLableText}>
                                                                    {value.submission.auditor_feedback.comment}
                                                                </Text>
                                                            </View>
                                                            {/* Owner's Action/Submitted View */}
                                                            <OwnerFeedback
                                                                element={value}
                                                                item={item}
                                                                selectedGroup={selectedGroup}
                                                                selectedMenuAreaId={selectedMenuAreaId}
                                                                updateGroupId={updateGroupId}
                                                                addItem={addItem}
                                                                isItemSelected={isItemSelected}
                                                                updateItem={updateItem}
                                                                openComment={openComment}
                                                                launchCamera={launchCamera}
                                                                removeImage={removeImage}
                                                            />
                                                        </>
                                                        : null
                                                }
                                            </>
                                            : null
                                    }
                                </View>

                            )
                        })
                    }
                    <View style={styles.divider}></View>

                </View>
            </View>
        </Collapsible>
    </View>
);

export default CheckListItems;