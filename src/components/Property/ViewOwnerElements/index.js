import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Keyboard, TextInput, Alert } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Header';
import { styles } from '../ViewOwnerElements/styles';
import LowerMenuAreaGroup from './lowerMenuAreaGroup';
import UpperMenuContainer from './upperMenuContainer';
import Modal from 'react-native-modalbox';
import ImagePicker from 'react-native-image-crop-picker';
import ActivityHud from '../../ActivityIndicator';
import Pusher from 'pusher-js/react-native';
import store from '../../../rematch';

export default function ViewOwnerElements(props) {
  const { id, selectedPage, appointmentId, index, alreadyEnd } = props.route.params;
  //Redux State
  const propertyState = useSelector(state => state.AuditElement);
  const loading = useSelector(
    state => state.loading.models.AuditElement.GetOwnerElementUnits,
  );

  const dispatch = useDispatch();
  //Use Ref
  const confirmModal = useRef(null);
  const submitModal = useRef(null);

  //Use State
  const [isEndAuditEnabled, setEndAuditEnabled] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [selectedMenuArea, setselectedMenuArea] = useState({});
  const [selectedGroup, setselectedGroup] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSubmitDisable, setSubmitDisable] = useState(true);
  const [currentItem, setCurrentItem] = useState(null);
  const [commentHolder, setCommentHolder] = useState('');
  const [imageHolder, setImageHolder] = useState(undefined);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  //Hooks
  const insets = useSafeAreaInsets();

  //Temp image Ids stores
  let imagesID = [];

  Pusher.logToConsole = false;
  var pusher = new Pusher('01d03018e4ab0b0766f3', {
    cluster: 'ap2',
  });

  //Call API
  useEffect(() => {
    console.log('#####', appointmentId);
    console.log('########', id);
    dispatch.AuditElement.GetOwnerElementUnits({ id: id });
    //Pusher subscribe
    pusherSubscribe();
    console.log('ALREADY', alreadyEnd);
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  //Mark menu check area selected
  useEffect(() => {
    if (
      propertyState.elementUnits &&
      propertyState.elementUnits.checklist_areas &&
      propertyState.elementUnits.checklist_areas.length > 0
    ) {
      setselectedMenuArea(propertyState.elementUnits.checklist_areas[selectedMenuIndex])
      preSelectSubmissionElement()
      isEndBookingEnabled()
      let data = {
        "property_unit": "62045ea2363b8471e57fad1c",
        "checklist_area": "5dff03d3218b91425b9d5fb2",
        "checklist_group": "5dff03d3218b91425b9d5fb3",
        "checklist_item": "5dff03d3218b91425b9d5fb3",
        "auditor_feedback": {
          "is_defected": false,
          "images": [
            {
              "url": "https://propedge-dev.s3.ap-southeast-2.amazonaws.com/public/images/c30f40788bd9984002788b00617214e132e7db55.jpg",
              "id": "620650328a74685f8c563ca6"
            }
          ],
          "comment": "No Defect Found"
        },
        "owner_feedback_status": "pending",
        "created_at": "2022-02-11T12:02:06.042Z",
        "updated_at": "2022-02-11T12:02:06.042Z",
        "id": "6206503e8a74685f8c563cbf"
      }
      // showElementpath(data, propertyState.elementUnits)
    }
  }, [propertyState.elementUnits]);

  function preSelectSubmissionElement() {
    let selectedItems = []
    let addToGroup = []
    propertyState.elementUnits.checklist_areas.forEach((area, i) => {
      area.checklist_groups.forEach((group, i) => {
        group.checklist_items.forEach((item, i) => {
          const addNewItem = addItemToSelectedItems(item, group.id, area.id)
          if (addNewItem) {
            selectedItems.push(addNewItem)
            addToGroup.push(group.id)
          }
        })
      })
    });
    setSelectedItems(selectedItems);
    let uniqueGroupId = addToGroup.filter(onlyUnique)
    setselectedGroup(uniqueGroupId)
  }

  function isEndBookingEnabled() {
    let elementItems = []
    propertyState.elementUnits.checklist_areas.forEach((area, i) => {
      area.checklist_groups.forEach((group, i) => {
        group.checklist_items.forEach((item, i) => {
          if (item.is_disabled === false) {
            elementItems.push(item)
          }
        })
      })
    });

    //Check Owner submission object
    var isEndEnable = true
    for (var i = 0; i < elementItems.length; ++i) {
      var item = elementItems[i];
      if (item.submission && item.submission.owner_feedback) {
        // Do nothing
        console.log('SESSION ISN"T END YET')
      } else {
        isEndEnable = false
        console.log('END SESSION')
        break;
      }
    }
    setEndAuditEnabled(isEndEnable);
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const showElementpath = (data, elements) => {
    const area = elements.checklist_areas.filter(obj => obj.id == data.checklist_area)
    if (area.length > 0) {
      const group = area[0].checklist_groups.filter(obj => obj.id == data.checklist_group)

      if (group.length > 0) {
        const item = group[0].checklist_items.filter(obj => {
          return obj.id == data.checklist_item
        })
        if (item.length > 0) {
          Alert.alert('Auditor element has been submitted', `${area[0].name} -> ${group[0].name} -> ${item[0].name} \n Please open element & do needful.`)
        }
      }
    } else {
      Alert.alert('Auditor element has been submitted Please open element & do needful.')
    }
  }

  function pusherSubscribe() {
    if (store.getState().AuditElement.startAudit) {
      var channel = pusher.subscribe(
        store.getState().AuditElement.startAudit.data.pusher_channel,
      );
      channel.bind('auditor:feedback_submitted', function (data) {
        console.log('EVENT: auditor:feedback_submitted', data);
        if (data && data.checklist_area && data.checklist_group && data.checklist_item) {
          // showElementpath(data, propertyState.elementUnits)
          Alert.alert('Auditor element has been submitted Please open element & do needful.')
        }
        dispatch.AuditElement.GetOwnerElementUnits({ id: id });
      });

      channel.bind('auditor:end_session', function (data) {
        console.log('EVENT: auditor:end_session', data);
        isEndBookingEnabled()
      });
    }
  }

  const submitElement = async () => {
    let data = {};
    if (currentItem.hasDefect === 1) {
      data = {
        id: store.getState().AuditElement.startAudit.data.id,
        body: {
          submission_id: currentItem.item.submission.id,
          is_dispute: currentItem.hasDefect === 1 ? false : true,
          comment: currentItem.comment === undefined ? '' : currentItem.comment,
        },
      };
    } else {
      data = {
        id: store.getState().AuditElement.startAudit.data.id,
        body: {
          submission_id: currentItem.item.submission.id,
          is_dispute: currentItem.hasDefect === 1 ? false : true,
          image_ids: imagesID,
          comment: currentItem.comment === undefined ? '' : currentItem.comment,
        },
      };
    }
    const response = await dispatch.AuditElement.SubmitOwnerElement(data);
    console.log(response);
    setCurrentItem(null);
    setSubmitDisable(true);
    dispatch.AuditElement.GetOwnerElementUnits({ id: id });
  };

  const uploadImages = (images, index) => {
    console.log('index', index, 'Length', images.length);
    if (images.length === 0) {
      submitElement();
    } else if (index >= images.length) {
      // Call submit owner function
      console.log('Calling Submit element function', imagesID);
      submitElement();
    } else {
      // Upload images
      console.log('Upload image');
      dispatch.AuditElement.PostElementImage(images[index]).then(res => {
        console.log('Success Upload image', res);
        if (res.data) {
          imagesID.push(res.data.id);
        }
        let nextIndex = index + 1;
        uploadImages(images, nextIndex);
      });
    }
  };

  //Util function
  const launchCamera = (selectedItem, selectedGroupId, menuAreaId) => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 800,
      compressImageMaxHeight: 800,
      cropping: true,
      compressImageQuality: 0.7,
      includeBase64: true,
    }).then(image => {
      let newItems = [];
      newItems = selectedItems.map(obj => {
        if (
          obj.item === selectedItem &&
          obj.groupId === selectedGroupId &&
          obj.areaId === menuAreaId
        ) {
          obj.images = [...obj.images, image];
          if (
            obj.comment !== '' &&
            obj.comment !== undefined &&
            isSubmitDisable === true
          ) {
            setSubmitDisable(false);
          }
        }
        return obj;
      });
      setSelectedItems(newItems);
    });
  };
  // Set selected image & ask for the confirmation
  const removeImage = (selectedItem, selectedGroupId, menuAreaId, image) => {
    setImageHolder({
      item: selectedItem,
      groupId: selectedGroupId,
      areaId: menuAreaId,
      removedImage: image,
    });
    confirmModal.current.open();
  };

  const confirmRemoveImage = () => {
    const newItems = selectedItems.map(obj => {
      if (
        obj.item === imageHolder.item &&
        obj.groupId === imageHolder.groupId &&
        obj.areaId === imageHolder.areaId
      ) {
        obj.images = obj.images.map(img => {
          if (img && img.path !== imageHolder.removedImage.path) {
            return img;
          }
        });
      }
      return obj;
    });
    setSelectedItems(newItems);

    setImageHolder({
      item: '',
      groupId: '',
      areaId: '',
      removedImage: undefined,
    });

    confirmModal.current.close();
  };

  const updateMenuArea = (menuArea, menuIndex) => {
    setselectedMenuArea(menuArea);
    setSelectedMenuIndex(menuIndex)
    if (!isEndAuditEnabled) {
      setSubmitDisable(true)
    }
  };

  const updateGroupId = (groupId, index) => {
    //Check groupId exists
    let hasGroup = null
    if (selectedGroup.length > 0) {
      hasGroup = selectedGroup.find(obj => {
        return obj == groupId
      })
    }

    //Yes then remove
    if (hasGroup) {
      // remove
      const index = selectedGroup.findIndex(obj =>
        obj === groupId
      );
      let newGroups = [
        ...selectedGroup.slice(0, index),
        ...selectedGroup.slice(index + 1),
      ];
      setselectedGroup(newGroups)
    } else {
      //else add 
      let newGroups = selectedGroup.concat(groupId);
      setselectedGroup(newGroups)
    }
  };

  const isItemSelected = (selectedItem, selectedGroupId, menuAreaId) => {
    const filteredItems =
      selectedItems &&
      selectedItems.find(obj => {
        return (
          obj.item === selectedItem &&
          obj.groupId === selectedGroupId &&
          obj.areaId === menuAreaId
        );
      });
    return filteredItems;
  };

  // Add CheckList_item to arrays
  const addItemToSelectedItems = (selectedItem, selectedGroupId, menuAreaId) => {
    const hasItem =
      selectedItems &&
      selectedItems.find(obj => {
        return (
          obj.item === selectedItem &&
          obj.groupId === selectedGroupId &&
          obj.areaId === menuAreaId
        );
      });

    if (!hasItem && selectedItem.submission) {
      let isOwnerSubmitted = false
      console.log(selectedItem);
      if (selectedItem.submission && selectedItem.submission.owner_feedback && selectedItem.submission.owner_feedback !== undefined) {
        isOwnerSubmitted = true
      }
      const add = {
        item: selectedItem,
        groupId: selectedGroupId,
        areaId: menuAreaId,
        images: [],
        hasDefect: -1,
        comment: '',
        isSubmitted: isOwnerSubmitted,
      };
      return add
    } else {
      return null
    }

  };

  const addItem = (selectedItem, selectedGroupId, menuAreaId) => {
    let newItems = [];
    const hasItem =
      selectedItems &&
      selectedItems.find(obj => {
        return (
          obj.item === selectedItem &&
          obj.groupId === selectedGroupId &&
          obj.areaId === menuAreaId
        );
      });

    if (!hasItem) {
      const add = {
        item: selectedItem,
        groupId: selectedGroupId,
        areaId: menuAreaId,
        images: [],
        hasDefect: -1,
        comment: '',
        isSubmitted: false,
      };
      newItems = selectedItems.concat(add);
      setSubmitDisable(true);
    } else if (hasItem && selectedItems.length > 0) {
      const index = selectedItems.findIndex(
        obj =>
          obj.item === selectedItem &&
          obj.groupId === selectedGroupId &&
          obj.areaId === menuAreaId,
      );
      newItems = [
        ...selectedItems.slice(0, index),
        ...selectedItems.slice(index + 1),
      ];
      if (hasItem.hasDefect == 1) setSubmitDisable(true);
    } else {
      newItems = [];
      setSubmitDisable(true);
    }
    setSelectedItems(newItems);
  };

  const confirmSubmit = () => {
    submitModal.current.open();
  };

  const updateItem = (
    selectedItem,
    selectedGroupId,
    menuAreaId,
    defectType,
    commentText,
  ) => {
    let newItems = [...selectedItems];
    const hasItem =
      selectedItems &&
      selectedItems.find(obj => {
        return (
          obj.item === selectedItem &&
          obj.groupId === selectedGroupId &&
          obj.areaId === menuAreaId
        );
      });

    if (hasItem) {
      let updateObject = { ...hasItem };
      const index = selectedItems.findIndex(
        obj =>
          obj.item === selectedItem &&
          obj.groupId === selectedGroupId &&
          obj.areaId === menuAreaId,
      );
      // Update Agree  or Dispute
      if (defectType !== null) {
        updateObject.hasDefect = defectType;
        if (defectType === 1) {
          setSubmitDisable(false);
          updateObject.comment = '';
          updateObject.images = [];
        } else {
          setSubmitDisable(true);
        }
      }
      //Update comment
      else if (commentText !== null) {
        updateObject.comment = commentText;
        openCloseComment(false);
        if (updateObject.images.length > 0 && isSubmitDisable === true) {
          setSubmitDisable(false);
        } else {
          setSubmitDisable(true);
        }
      }
      newItems[index] = updateObject;
      setCurrentItem(updateObject);
      setSelectedItems(newItems);
    }
  };

  // Comment Mode Screen
  const onCommentChange = comment => {
    setCommentHolder(comment);
  };

  const openCloseComment = value => {
    setShowComment(value);
  };

  const endAppointment = async () => {
    const res = await dispatch.AuditElement.EndAudit(store.getState().AuditElement.startAudit.data.id)
    if (res) {
      props.navigation.navigate('AppointmentList')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        isComment={showComment}
        commentButton={openCloseComment}
        navigation={props.navigation}
        title={showComment ? 'Comment' : 'Elements Unit'}
        elementUnit={'Elements'}
        appointmentId={appointmentId}
        selectedPage={selectedPage}
        index={index}
      />
      {loading ? (
        <ActivityHud color={'black'} />
      ) : propertyState.elementUnits &&
        propertyState.elementUnits.checklist_areas ? (
        <View>
          <UpperMenuContainer
            menuAreas={propertyState.elementUnits.checklist_areas}
            selectedMenuArea={selectedMenuArea}
            updateMenuArea={updateMenuArea}
          />
          <LowerMenuAreaGroup
            selectedMenuArea={selectedMenuArea}
            selectedGroup={selectedGroup}
            updateGroupId={updateGroupId}
            addItem={addItem}
            isItemSelected={isItemSelected}
            updateItem={updateItem}
            openComment={openCloseComment}
            launchCamera={launchCamera}
            removeImage={removeImage}
          />
        </View>
      ) : null}
      {showComment ? (
        <View style={[styles.commentView, { marginTop: insets.top + 40 }]}>
          <TextInput
            style={styles.commentInput}
            editable
            multiline
            numberOfLines={20}
            value={commentHolder}
            textAlignVertical="top"
            placeholder="Write your comment here"
            onChangeText={text => onCommentChange(text)}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
          {/* <View> */}
          <TouchableOpacity
            style={[
              styles.saveCommentButton,
              isKeyboardVisible
                ? styles.hasPaddingButton
                : styles.noPaddingButton,
            ]}
            onPress={() =>
              updateItem(
                currentItem.item,
                currentItem.groupId,
                currentItem.areaId,
                null,
                commentHolder,
              )
            }>
            <Text style={styles.submitButtonText}>Save</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      ) : (
        <></>
      )}

      {(selectedItems.length > 0 && currentItem && !currentItem.isSubmitted) || isEndAuditEnabled ? (
        <>
          {
            alreadyEnd ? null :
              <TouchableOpacity
                style={
                  (isSubmitDisable && !isEndAuditEnabled)
                    ? [styles.submitButton, { backgroundColor: '#7366B0' }]
                    : styles.submitButton
                }
                onPress={() => confirmSubmit()}
                disabled={isEndAuditEnabled ? false : isSubmitDisable}>
                {propertyState.actionLoading ? (
                  <ActivityHud color={'white'} />
                ) : (
                  <Text
                    style={
                      (isSubmitDisable && !isEndAuditEnabled)
                        ? [styles.submitButtonText, { opacity: 0.5 }]
                        : styles.submitButtonText
                    }>
                    {isEndAuditEnabled ? 'End Appointment' : `Submit`}
                  </Text>
                )}
              </TouchableOpacity>
          }
        </>

      ) : (
        <></>
      )}
      <Modal style={styles.modal} position={'center'} ref={confirmModal}>
        <Text style={styles.modalText}>
          Are you sure you want to delete the image?
        </Text>
        <View style={styles.modalButtons}>
          <TouchableOpacity
            onPress={() => confirmModal.current.close()}
            style={styles.modalCancel}>
            <Text style={styles.modalButtonTextCancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => confirmRemoveImage()}
            style={styles.modalConfirm}>
            <Text style={styles.modalButtonTextConfirm}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal style={styles.modal} position={'center'} ref={submitModal}>
        <Text style={styles.modalText}>
          {
            isEndAuditEnabled ? 'Are you sure you want to end appointment?' : `Are you sure you want to log the element as ${currentItem && currentItem.hasDefect == 1 ? 'agreed' : 'disputed'}?`
          }
        </Text>
        <View style={styles.modalButtons}>
          <TouchableOpacity
            onPress={() => submitModal.current.close()}
            style={styles.modalCancel}>
            <Text style={styles.modalButtonTextCancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (isEndAuditEnabled && store.getState().AuditElement.startAudit) {
                endAppointment()
              } else if (currentItem) {
                imagesID = [];
                uploadImages(currentItem.images, 0);
              }
              submitModal.current.close();
            }}
            style={styles.modalConfirm}>
            <Text style={styles.modalButtonTextConfirm}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}


