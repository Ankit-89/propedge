import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, Image, TouchableOpacity, SafeAreaView, Text, View, TextInput, ActivityIndicator } from "react-native";
import UpperContainer from './upperContainer';
import LowerContainer from './lowerContainer';
import Header from '../../Header';
import { height, styles, width } from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modalbox';
import * as Images from '../../../assets/Images/map';
import { useFocusEffect } from '@react-navigation/native';
function ViewUnit(props) {
    const { id, property_unit_id, isCompleted } = props.route.params;
    const confirmModal = useRef(null);
    const submitModal = useRef(null);
    const waitingModal = useRef(null);
    const showEvidence = useRef(null);
    const propertyState = useSelector((state) => state.Property);
    const submissionStatus = useSelector((state) => state.Appointment);
    const dispatch = useDispatch();
    const [selectedElementUnit, setSelectedElement] = useState(undefined);
    const [selectedParent, setSelectedParent] = useState(undefined);
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [capturedImages, setImages] = useState([])
    const [selectedItems, setSelectedItems] = useState([]);
    const [sendReady, setSendReady] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const { user } = useSelector(state => state.Auth);
    const [isLoading, setLoading] = useState(true);
    const [isEnding, setEnding] = useState(false);
    const [commentHolder, setCommentHolder] = useState({
        parent: '',
        unit: '',
        item: '',
        comment: ''
    })
    const [evidenceHolder, setEvidenceHolder] = useState({})
    const [imageHolder, setImageHolder] = useState({
        selectedParent: '',
        selectedElementUnit: '',
        key: '',
        image: undefined,
    })
    const checkEnding = () => {
        setEnding(true);
        propertyState.elementUnits && propertyState.elementUnits.map((groups) => {
                groups.checklist_groups.map((checklist) => {
                    checklist.checklist_items.map((items) => {
                        if(!items.is_disabled) {
                            if(!items.submission) {
                                setEnding(false); 
                            }else if(items.submission && items.submission.owner_feedback_status == 'pending') {
                                setEnding(false); 
                            }
                            
                        }
                    }) 
                    
                })
        })
    }
    
    useEffect(() => {
        if(isLoading) {
            dispatch.Property.GetElementUnits({ id: property_unit_id });
            setLoading(false)
        }
        
        if (submissionStatus.waitingForOwnerFeedback) {
            isWaiting();
            setSendReady(false);
        }
        checkEnding();
    }, [submissionStatus, waitingModal, dispatch, checkEnding]);

    useFocusEffect(
        React.useCallback(() => {
        // if (submissionStatus.waitingForOwnerFeedback) {
            const interval = setInterval(() => {
                if(submissionStatus.waitingForOwnerFeedback){
                    dispatch.Property.GetElementUnits({ id: property_unit_id });
                }
                
            }, 10000);
            return () => clearInterval(interval);
            
        // }
            
        }, [])
      );
    const isWaiting = () => {
        waitingModal.current.open();
    }
    const selectedElement = (elementUnit, index) => {
        setSelectedElement(elementUnit);
        setSelectedMenu(index)
    }

    const selectedParentElement = (parent, index) => {
        if (parent === selectedParent) {
            setSelectedParent('')
        } else {
            setSelectedParent(parent)
        }

    }

    const ucWord = (text) => {
        const words = text.replace(/_/g, ' ');
        var separateWord = words.toLowerCase().split(' ');
        for (var i = 0; i < separateWord.length; i++) {
            separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }
        return separateWord.join(' ');
    }

    const confirmSubmit = () => {
        setSendReady(false);
        submitModal.current.open();
    }

    const commentModal = (value) => {
        if (!value) {
            setShowComment(value)
        } else {
            setShowComment(value)
        }

    }

    const setComment = () => {
        if (commentHolder.comment && commentHolder.comment.trim().length > 0) {
            let newItems = [];
            newItems = selectedItems.map(obj => {
                if (obj.parent === commentHolder.parent && obj.unit === commentHolder.unit && obj.item === commentHolder.item) {
                    obj.hasDefect = true;
                    obj.comment = commentHolder.comment;
                }
                return obj;
            })
            setSelectedItems(newItems);
            setCommentHolder(
                {
                    parent: '',
                    unit: '',
                    item: '',
                    comment: ''
                }
            )
            setShowComment(false)
        }

    }
    const launchCamera = (selectedParent, selectedElementUnit, key) => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 800,
            compressImageMaxHeight: 800,
            cropping: true,
            compressImageQuality: 0.7,
            includeBase64: true
        }).then(async (image) => {
            const form = new FormData();
            form.append('file', {
                uri: image.path,
                type: image.mime,
                name: image.path.substr(image.path.lastIndexOf('/') + 1)
            });
            const config = {
                method: 'POST',
                body: form
            };
            const response = await dispatch.Appointment.uploadImage(form);
            let newItems = []
            newItems = selectedItems.map(obj => {
                if (obj.parent === selectedParent && obj.unit === selectedElementUnit && obj.item === key) {
                    obj.images = [...obj.images, response];
                }
                return obj
            })
            setImages(newItems);
        });
    }

    const hasDefect = (selectedParent, selectedElementUnit, key, value, edit, isDelete) => {
        let newItems = [];
        if (!isDelete) {
            if (!value) {
                newItems = selectedItems.map(obj => {
                    if (obj.parent === selectedParent && obj.unit === selectedElementUnit && obj.item === key) {
                        obj.hasDefect = value;
                        obj.comment = 'No defect found';
                    }
                    return obj;
                })
                setSelectedItems(newItems);
            } else {
                commentModal(true);
                setCommentHolder({
                    parent: selectedParent,
                    unit: selectedElementUnit,
                    item: key,
                    comment: edit !== 'noEdit' ? edit : ''
                })
            }
            setSendReady(true);
        } else {
            newItems = selectedItems.map(obj => {
                if (obj.parent === selectedParent && obj.unit === selectedElementUnit && obj.item === key) {
                    obj.comment = '';
                    obj.hasDefect = false;
                }
                return obj;
            })
            setSelectedItems(newItems);
            setSendReady(false);
        }

    }

    const onCommentChange = (comment) => {
        setCommentHolder({
            ...commentHolder,
            comment: comment
        });
    }
    const isSelected = (selectedParent, selectedElementUnit, key) => {
        const filteredItems = selectedItems.find(obj => {
            return obj.parent === selectedParent && obj.unit === selectedElementUnit && obj.item === key
        })
        return filteredItems
    }

    const addItem = (selectedParent, selectedElementUnit, key, item) => {
        let newItems = [];
        setSelectedItems([]); //clear selected items
        const hasItem = selectedItems && selectedItems.find(obj => {
            return obj.parent == selectedParent && obj.unit == selectedElementUnit && obj.item == key
        })

        if (!hasItem) {
            newItems = [...selectedItems, {
                parent: selectedParent,
                unit: selectedElementUnit,
                item: key,
                images: [],
                hasDefect: item.submission && item.submission.auditor_feeback && item.submission.auditor_feeback.is_defected ? true : false,
                comment: '',
                checkList: item
            }];
        } else if (hasItem && selectedItems.length > 0) {
            const index = selectedItems.findIndex(obj => obj.parent === selectedParent && obj.unit === selectedElementUnit && obj.item === key);
            newItems = [
                ...selectedItems.slice(0, index),
                ...selectedItems.slice(index + 1)
            ]
        }
        // alert(JSON.stringify(newItems.parent))
        // newItems = selectedItems.filter((v, i, a) => a.findIndex(t => (t.parent === v.parent && t.unit === v.unit && t.item === v.item)) === i);
        setSelectedItems(newItems);
    }

    const updateItem = (selectedParent, selectedElementUnit, key, value) => {
        const newItems = selectedItems.map((obj) => {
            if (obj.parent === selectedParent && obj.unit === selectedElementUnit && obj.item === key) {
                obj.checkList.is_disabled = value;
                if(value) {
                    obj.images = [];
                    obj.comment = '';
                }
            }
            return obj;
        })
        dispatch.Appointment.ChangeElementStatus({
            value: value,
            checklist_area_id: selectedElementUnit,
            checklist_group_id: selectedParent,
            checklist_item_id: key,
            property_unit_id: property_unit_id,
        })
        setSelectedItems(newItems);
    }

    const removeImage = (selectedParent, selectedElementUnit, key, image) => {
        setImageHolder({
            selectedParent, selectedElementUnit, key, image
        })
        confirmModal.current.open();
    }

    const endAppointment = async () => {
       const res = await dispatch.Appointment.EndAppointment({id: id});
       if(res.ended) {
        props.navigation.goBack();
       }
    }

    const confirmRemoveImage = () => {

        const newItems = selectedItems.map(obj => {
            if (obj.parent === imageHolder.selectedParent && obj.unit === imageHolder.selectedElementUnit && obj.item === imageHolder.key) {
                const imgs = obj.images.map(img => {
                    if (img && img.path !== imageHolder.image.path) {
                        return img
                    }
                })
                if(!imgs || imgs[0] == 'null' || imgs[0] == null){
                    obj.images = [];
                    obj.comment = '';
                }
            }
            return obj
        })
        setSelectedItems(newItems);

        setImageHolder({
            selectedParent: '',
            selectedElementUnit: '',
            key: '',
            image: undefined
        })
        confirmModal.current.close();
        setSendReady(false);
    }
    const submitAll = () => {
        selectedItems.map((obj) => {
            if (!obj.checkList.is_disabled) {
                if (obj.comment !== '') {
                    let data = {};
                    if (obj.hasDefect) {
                        data = {
                            id: id,
                            access_token: user.data.access_token,
                            checklist_area_id: obj.unit,
                            checklist_group_id: obj.parent,
                            checklist_item_id: obj.item,
                            image_ids: obj.images.map((img) => img.id),
                            is_defected: obj.hasDefect,
                            comment: obj.comment
                        }
                    } else {
                        data = {
                            id: id,
                            access_token: user.data.access_token,
                            checklist_area_id: obj.unit,
                            checklist_group_id: obj.parent,
                            checklist_item_id: obj.item,
                            image_ids: obj.images.map((img) => img.id),
                            is_defected: obj.hasDefect,
                        }
                    }
                    dispatch.Appointment.submitAppointment(data);
                }
            }else {
                setSendReady(true);
            }
        })
        submitModal.current.close()
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header isComment={showComment} commentButton={commentModal} navigation={props.navigation} title={showComment ? 'Comment' : 'Elements Unit'} />
            {
                propertyState.elementUnits && propertyState.elementUnits.length && propertyState.isIdle ?
                    <View style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', marginTop: 20 }}>
                        <UpperContainer showComment={showComment} selectedMenu={selectedMenu} ucWord={ucWord} setSelectedElement={setSelectedElement} selectedElementUnit={selectedElementUnit} selectedElement={selectedElement} navigation={props.navigation} eu={propertyState.elementUnits} data={propertyState.elementUnits} selectedParent={selectedParent} />
                        <LowerContainer isCompleted={isCompleted} setEvidenceHolder={setEvidenceHolder} showEvidence={showEvidence} isWaiting={isWaiting} updateItem={updateItem} selectedMenu={selectedMenu} ucWord={ucWord} hasDefect={hasDefect} selectedItems={selectedItems} addItem={addItem} isSelected={isSelected} capturedImages={capturedImages} launchCamera={launchCamera} selectedElementUnit={selectedElementUnit} selectedElement={selectedElement} navigation={props.navigation} parents={propertyState.elementUnits} data={propertyState.elementUnits.filter((obj) => obj.id === selectedElementUnit)} selectedParent={selectedParent} setSelectedParent={selectedParentElement} removeImage={removeImage} />
                    </View>

                    :
                    <View style={styles.loader}>
                        <ActivityIndicator />
                    </View>
            }
            {
                showComment ?
                    <View style={styles.commentView}>
                        <TextInput
                            style={styles.commentInput}
                            editable
                            multiline
                            numberOfLines={20}
                            value={commentHolder.comment}
                            textAlignVertical="top"
                            placeholder="Write your comment here"
                            onChangeText={text => onCommentChange(text)}
                        />
                        <TouchableOpacity style={styles.commentButton} onPress={() => setComment()}>
                            <Text style={styles.submitButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <></>
            }
            {
                selectedItems.length > 0 && sendReady && !isCompleted ?
                    <TouchableOpacity style={styles.submitButton} onPress={() => confirmSubmit()}>
                        <Text style={styles.submitButtonText}>Send for owner's feedback</Text>
                    </TouchableOpacity>
                    : !sendReady && !isCompleted && isEnding ?
                    <TouchableOpacity style={styles.submitButton} onPress={() => endAppointment()}>
                        <Text style={styles.submitButtonText}>End Appointment</Text>
                    </TouchableOpacity>
                    :<></>
            }
            <Modal backdropPressToClose={false}  style={styles.modal} position={"center"} ref={confirmModal}>
                <Text style={styles.modalText}>Are you sure you want to delete the image?</Text>
                <View style={styles.modalButtons}>
                    <TouchableOpacity onPress={() => confirmModal.current.close()} style={styles.modalCancel}>
                        <Text style={styles.modalButtonTextCancel}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => confirmRemoveImage()} style={styles.modalConfirm}>
                        <Text style={styles.modalButtonTextConfirm}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal backdropPressToClose={false}  style={styles.modal} position={"center"} ref={submitModal}>
                <Text style={styles.modalText}>Are you sure you want to submit this element for owner's feedback?</Text>
                <View style={styles.modalButtons}>
                    <TouchableOpacity onPress={() => {
                        submitModal.current.close();
                        setSendReady(true);
                        }} style={styles.modalCancel}>
                        <Text style={styles.modalButtonTextCancel}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => submitAll()} style={styles.modalConfirm}>
                        <Text style={styles.modalButtonTextConfirm}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal swipeToClose={false} backdropPressToClose={false} style={styles.modalTransparent} position={"center"} ref={waitingModal}>
                <Image style={{ width: 200, height: 200 }} source={Images.Appointment.waiting} />
                <Text style={{ fontSize: 16, fontWeight: '900', color: '#fff' }}>Waiting for owner's feedback</Text>
            </Modal>
            <Modal backdropPressToClose={false} style={styles.modalTransparent} position={"bottom"} ref={showEvidence}>
                <View style={{height: height * 0.40, width: width, backgroundColor: '#fff', position: 'absolute', bottom: 0, borderTopRightRadius: 20, borderTopLeftRadius: 20, display: 'flex', alignItems: 'center'}}>
                       <View style={{flexWrap:'wrap', marginTop: 10, height: 30, display: 'flex', alignItems: 'center', flexDirection: 'row', width: '80%'}}>
                           <View style={{height: 5, width: 10, flexBasis: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 15}}>
                               <View style={{borderRadius: 100, backgroundColor: 'gray',height: 5, width: width*0.20}}></View>
                           </View>
                            <View style={{flexBasis: '20%'}}>
                                <View style={{borderRadius: 10, width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                                    <TouchableOpacity onPress={() => {
                                        showEvidence.current.close();
                                        setEvidenceHolder({});
                                    }}>
                                        <Image style={{resizeMode: 'cover'}} source={Images.Property.Close}  />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        <View style={{flexBasis: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '900', color: '#0F0059', marginLeft: -50}}>Owner's Evidence</Text>
                        </View>
                       </View>
                        <View style={{marginTop: 20, display: 'flex'}}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.capturedImagesContainerReview}>
                            {   
                                evidenceHolder && evidenceHolder.images ?
                                    evidenceHolder.images.map((i) => {
                                       return <Image style={styles.capturedImages} source={{ uri: i.url }} />
                                    })
                                    
                                :<Text>No Images Provided</Text>
                            }
                          </ScrollView>
                            {
                                evidenceHolder && evidenceHolder.comment ? 
                                <View style={{borderRadius: 13, borderColor: 'gray', borderWidth: 1, padding: 10, width: 400, height: 100, alignSelf: 'center'}}>
                                   <Text>
                                    {evidenceHolder.comment}
                                </Text>
                                </View>
                                :<Text>No Comment Provided</Text>
                            }
                        </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default ViewUnit;