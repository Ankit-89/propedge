import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Switch
} from 'react-native';
import { height, styles } from './styles';
import Collapsible from 'react-native-collapsible';
import * as Images from '../../../assets/Images/map';
import Modal from 'react-native-modalbox';
import {
    PureRoundedCheckbox,
} from "react-native-rounded-checkbox";
function CollapsableView({ isCompleted, setEvidenceHolder, showEvidence, isWaiting, updateItem, selectedMenu, ucWord, hasDefect, item, data, selectedElementUnit, selectedParent, index, setSelectedParent, launchCamera, removeImage, isSelected, addItem, selectedItems }) {
    const [isLoading, setLoading] = useState(true);
    const [selectedElements, setSelectedElements] = useState([]);
    useEffect(() => {
        const selectedElemHolder = [];
       item.checklist_items.map(async (obj) => {
           if(obj.submission) {
            if(obj.submission && obj.submission.owner_feedback_status == 'pending') {
                isWaiting();
            } else if ( obj.submission.owner_feedback_status == 'agree' ||  obj.submission.owner_feedback_status == 'dispute') {
                if(isLoading)
                setSelectedParent(item.id, index)
            }
            selectedElemHolder.push(obj);
            addItem(selectedParent, selectedElementUnit, obj.id, obj)
           }
           
        })
        Promise.all(selectedElemHolder).then((res) => {
            // alert(JSON.stringify(selectedItems))
            setSelectedElements(res);
            setLoading(false);
        })
    }, [])

    const selectable = (order) => {
        if(selectedItems.length) {
            if(order >= 1) {
                const lastSelectedElems = selectedItems[selectedItems.length -1];
                if(order == lastSelectedElems.checkList.order && !lastSelectedElems.checkList.submission){
                    return false;
                }if(order < lastSelectedElems.checkList.order) {
                    return true;
                }
                else {
                    if(((order - 1) == lastSelectedElems.checkList.order && lastSelectedElems.checkList.is_disabled) || ((order - 1) == lastSelectedElems.checkList.order && lastSelectedElems.checkList.submission && lastSelectedElems.checkList.submission.owner_feedback_status != 'pending')) {
                        return false;
                    }else {
                        return true;
                    }
                }
                
            }else {
                return true
            }
        }else {
            if(order == 1) {
                return false;
            }else {
                return true;
            }
        }
    }

    return (!isLoading ? <View>
        <TouchableOpacity style={item.id !== selectedParent ? styles.collapseViewCollapsed : styles.collapseView} onPress={() => setSelectedParent(item.id, index)}>
            <View style={styles.headerOption}>
                <Image style={styles.headerIcon} source={{ uri: item.icon.url }} />
            </View>
            <View style={styles.textHeader}>
                <Text style={styles.textHeaderItem}>{ucWord(item.name)}</Text>
            </View>
            <View style={styles.rightArrow}>
                <Image style={styles.rightArrowIcon} source={item.id !== selectedParent ? Images.Property.ArrowClose : Images.Property.ArrowOpen} />
            </View>
        </TouchableOpacity>
        <View style={item.id === selectedParent ? { marginTop: 0, width: '100%', height: 10, display: 'flex', flexDirection: 'row', backgroundColor: '#fff' } : { display: 'none' }}>
            <View style={selectedItems.length > 0 ? { marginTop: -14, marginLeft: 29, minHeight: 8, borderLeftWidth: 2, borderLeftColor: 'gray', display: 'flex' } : { marginTop: -14, marginLeft: 29, minHeight: 10, borderLeftWidth: 2, borderLeftColor: 'gray', display: 'flex' }}></View>
        </View>
        
        <Collapsible style={{ backgroundColor: '#fff' }} collapsed={item.id !== selectedParent}>
            {
                (selectedParent !== '' || item.submission) && item.checklist_items.map((item) => {
                    return (
                        <>
                            <View style={{ marginLeft: 13, width: '100%', height: 40, display: 'flex', flexDirection: 'row' }}>
                                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: -3 }}>
                                    <TouchableOpacity
                                    disabled={selectable(item.order)}
                                     onPress={() => {
                                        addItem(selectedParent, selectedElementUnit, item.id, item)
                                    }}>
                                        {
                                           item.submission ? 
                                             <Image style={styles.innerItemsCheckBox} source={Images.Property.CircleChecked}></Image>
                                           :
                                           isSelected(selectedParent, selectedElementUnit, item.id) || selectedItems.length && selectedItems[0].checkList.order > item.order ? 
                                                <Image style={styles.innerItemsCheckBox} source={Images.Property.CircleSelected}></Image>
                                            : 
                                                <Image style={styles.innerItemsCheckBox} source={Images.Property.CircleUnSelected}></Image>
                                        }
                                        
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 5 }}>
                                    <Text>{ucWord(item.name)}</Text>
                                </View>
                                {
                                    isSelected(selectedParent, selectedElementUnit, item.id) && Object.keys(isSelected(selectedParent, selectedElementUnit, item.id)).length > 0 || !item.submission && item.submission || selectedItems.length && selectedItems[0].checkList.order > item.order ?
                                        <>
                                            {
                                                !item.is_disabled ?
                                                 <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => launchCamera(selectedParent, selectedElementUnit, item.id)}>
                                                    <Image style={styles.innerItemsIcon} source={Images.Property.Camera} />
                                                </TouchableOpacity>
                                                :<></>
                                            }
                                           
                                            <View style={{ position: 'absolute', top: 5, right: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Switch
                                                    disabled={item.submission && Object.keys(item.submission).length > 0}
                                                    trackColor={{ false: "#767577", true: "#88B421" }}
                                                    thumbColor={!item.is_disabled ? "#f4f3f4" : "#f4f3f4"}
                                                    ios_backgroundColor="#3e3e3e"
                                                    onValueChange={(val) => {
                                                        // if(val) {
                                                        //     addItem(selectedParent, selectedElementUnit, item.id, item)
                                                        // }
                                                        updateItem(selectedParent, selectedElementUnit, item.id, !val)
                                                        // alert(JSON.stringify(isSelected(selectedParent, selectedElementUnit, item.id)))
                                                    }}
                                                    value={isSelected(selectedParent, selectedElementUnit, item.id) ? !isSelected(selectedParent, selectedElementUnit, item.id).checkList.is_disabled :item.is_disabled}

                                                />
                                            </View>
                                        </>
                                        :
                                        <></>
                                }
                            </View>
                            <ScrollView style={isSelected(selectedParent, selectedElementUnit, item.id) || item.submission && item.submission.auditor_feedback.images ? { marginTop: -5, marginLeft: 30, borderLeftWidth: 1.5, borderLeftColor: 'gray', display: 'flex', minHeight: 30 } : { marginTop: -5, marginLeft: 30, minHeight: 30, borderLeftWidth: 1.5, borderLeftColor: 'gray', display: 'flex', minHeight: 30 }}>
                                {
                                    item.submission && item.submission.auditor_feedback.images || isSelected(selectedParent, selectedElementUnit, item.id) && isSelected(selectedParent, selectedElementUnit, item.id).images.length > 0 ?
                                        <View style={{ height: 'auto', position: 'relative', paddingBottom: 50 }}>
                                            <Text style={{ color: '#0F0059', fontWeight: '600', fontSize: 16, marginLeft: 30 }}>Auditor’s feedback</Text>
                                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.capturedImagesContainer}>
                                                {
                                                    item.submission && item.submission.auditor_feedback.images ? 
                                                        item.submission && item.submission.auditor_feedback.images.map((i) => {
                                                            return (
                                                                i ?
                                                                    <View key={i.path}>
                                                                        <TouchableOpacity style={{display: isCompleted || item.submission && Object.keys(item.submission).length > 0 ? 'none': 'flex', ...styles.closeFloat}} onPress={() => removeImage(selectedParent, selectedElementUnit, item.id, i)}>
                                                                            <Image style={styles.closeBotton} source={Images.Property.Close} />
                                                                        </TouchableOpacity>
                                                                        <Image style={styles.capturedImages} source={{ uri: i.url }} />
                                                                    </View>
                                                                    : null
                                                            )
                                                        })
                                                    :
                                                    isSelected(selectedParent, selectedElementUnit, item.id).images.map(i => {

                                                        return (
                                                            i ?
                                                                <View key={i.path}>
                                                                    <TouchableOpacity style={{display: isCompleted? 'none': 'flex', ...styles.closeFloat}} disabled={item.submission && item.submission} style={styles.closeFloat} onPress={() => removeImage(selectedParent, selectedElementUnit, item.id, i)}>
                                                                        <Image style={styles.closeBotton} source={Images.Property.Close} />
                                                                    </TouchableOpacity>
                                                                    <Image style={styles.capturedImages} source={{ uri: i.url }} />
                                                                </View>
                                                                : null
                                                        )
                                                    })
                                                }
                                            </ScrollView>

                                            {
                                                item.submission && item.submission.auditor_feedback ? 
                                                !item.submission.auditor_feedback.is_defected ?
                                                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                        <Text style={styles.noDefectText}>{item.submission.auditor_feedback.comment}</Text>
                                                        <TouchableOpacity disabled={true} style={{display: isCompleted || item.submission && Object.keys(item.submission).length > 0 ? 'none': 'flex', flexBasis: '40%', marginBottom: 10}} onPress={() => hasDefect(selectedParent, selectedElementUnit, item.id, true, 'noEdit', true)}>
                                                            <Image source={Images.Appointment.bin} style={{ width: 20, height: 20 }} />
                                                        </TouchableOpacity>
                                                    </View>
                                                    : item.submission.auditor_feedback.is_defected ?
                                                        <>
                                                            <Text style={styles.foundDefectText}>Auditor has found the defect</Text>
                                                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                                                <View style={styles.hasDefectTrue}>
                                                                    <Text style={styles.noDefectTextTrue}>{item.submission.auditor_feedback.comment}</Text>

                                                                </View>
                                                                <View style={{ display: isCompleted || item.submission && Object.keys(item.submission).length > 0 ? 'none': 'flex', flexDirection: 'row', flexBasis: '20%', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                    <TouchableOpacity disabled={true} style={{ marginLeft: 20 }} onPress={() => hasDefect(selectedParent, selectedElementUnit, item.id, true, isSelected(selectedParent, selectedElementUnit, item.id).comment, false)}>
                                                                        <Image source={Images.Appointment.pencil} style={{ width: 20, height: 20 }} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity disabled={true} onPress={() => hasDefect(selectedParent, selectedElementUnit, item.id, true, 'noEdit', true)}>
                                                                        <Image source={Images.Appointment.bin} style={{ width: 20, height: 20 }} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </>
                                                        :
                                                        <></>
                                                :
                                                !isSelected(selectedParent, selectedElementUnit, item.id).hasDefect && isSelected(selectedParent, selectedElementUnit, item.id).comment === '' ?
                                                    <>
                                                        <View style={styles.defectContainer}>
                                                            <Text style={styles.defectContainerText}>Have you found any defect</Text>
                                                        </View>
                                                        <View style={styles.defectContainerButtons}>
                                                            <TouchableOpacity style={styles.defectContainerButton} onPress={() => hasDefect(selectedParent, selectedElementUnit, item.id, true, 'noEdit', false)}>
                                                                <Text style={styles.defectContainerButtonText}>Yes</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity style={styles.defectContainerButton} onPress={() => hasDefect(selectedParent, selectedElementUnit, item.id, false, 'noEdit', false)}>
                                                                <Text style={styles.defectContainerButtonText}>No</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </>
                                                    : !isSelected(selectedParent, selectedElementUnit, item.id).hasDefect ?
                                                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                            <Text style={styles.noDefectText}>{isSelected(selectedParent, selectedElementUnit, item.id).comment}</Text>
                                                            <TouchableOpacity style={{flexBasis: '40%', marginBottom: 10}} onPress={() => hasDefect(selectedParent, selectedElementUnit, item.id, true, 'noEdit', true)}>
                                                                <Image source={Images.Appointment.bin} style={{ width: 20, height: 20 }} />
                                                            </TouchableOpacity>
                                                        </View>
                                                        : isSelected(selectedParent, selectedElementUnit, item.id).hasDefect ?
                                                            <>
                                                                <Text style={styles.foundDefectText}>Auditor has found the defect</Text>
                                                                <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                                                    <View style={styles.hasDefectTrue}>
                                                                        <Text style={styles.noDefectTextTrue}>{isSelected(selectedParent, selectedElementUnit, item.id).comment}</Text>

                                                                    </View>
                                                                    <View style={{ display: 'flex', flexDirection: 'row', flexBasis: '20%', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => hasDefect(selectedParent, selectedElementUnit, item.id, true, isSelected(selectedParent, selectedElementUnit, item.id).comment, false)}>
                                                                            <Image source={Images.Appointment.pencil} style={{ width: 20, height: 20 }} />
                                                                        </TouchableOpacity>
                                                                        <TouchableOpacity onPress={() => hasDefect(selectedParent, selectedElementUnit, item.id, true, 'noEdit', true)}>
                                                                            <Image source={Images.Appointment.bin} style={{ width: 20, height: 20 }} />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                            </>
                                                            :
                                                            <></>
                                            }
                                        </View>
                                        : <></>
                                }
                                {
                                    item.submission && item.submission.owner_feedback ? 
                                        <View style={{display: 'flex', padding: 4, marginBottom: 10}}>
                                            <Text style={{color: '#0F0059', fontWeight: '600', fontSize: 16, marginLeft: 20}}>Owner's feedback</Text>
                                            {
                                                item.submission.owner_feedback.comment !== '' ?      
                                                <Text style={styles.foundDefectText2}>The element has been logged as disputed. Check the evidence submitted by owner by clicking below button.</Text>
                                                :
                                                <Text style={styles.foundDefectText2}>The element has been logged as not disputed</Text>
                                                
                                            }
                                            {
                                                item.submission.owner_feedback.images.lenght || item.submission.owner_feedback.comment ?
                                                    <TouchableOpacity onPress={() => {
                                                        setEvidenceHolder(item.submission.owner_feedback )
                                                        showEvidence.current.open()
                                                    }} style={{marginBottom: 10, padding: 10, marginLeft: 20, borderColor: '#0F0059', borderWidth: 1, width: 150, display: 'flex', borderRadius: 100, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                                                        <Text style={{fontWeight: '900', color: '#0F0059'}}>View Evidence</Text>
                                                    </TouchableOpacity>
                                                :<></>
                                            }
                                            
                                        </View>
                                    : <></>
                                }
                            </ScrollView>
                        </>
                    )
                })
            }
        </Collapsible>
    </View> : <></>)

};

export default CollapsableView;