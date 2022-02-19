import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Text, FlatList, SafeAreaView } from "react-native";
import SearchHeader from "./SearchHeader";
import ViewUnitItem from '../ViewUnits/ViewUnitItem';
import { styles } from './styles';

import { connect } from 'react-redux';
import { Theme } from "../../../utils/common";
import ActivityHud from "../../ActivityIndicator";
import NoDataView from "../../NoDataView";

function SearchUnit({ navigation, loading }) {

    const propertyState = useSelector((state) => state.Property);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch.Property.setSearchUnit({})
    }, [])

    const searchUnit = (keyword) => {
        dispatch.Property.SearchUnit(keyword);
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchHeader navigation={navigation} searchUnit={searchUnit} />
            {
                propertyState.isIdle === true ? <ActivityHud />
                    :
                    propertyState.searchUnits !== 'undefined' && propertyState.searchUnits !== undefined ?
                        <>
                            {
                                propertyState.searchUnits.isNodata === true
                                    ?
                                    <NoDataView title="No Units found, please contact your administrator!!" />
                                    :
                                    <FlatList
                                        style={styles.flatListContainer}
                                        data={propertyState.searchUnits.arrSearchUnit}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item, index }) => <ViewUnitItem item={item} index={index} navigation={navigation} />}
                                        keyExtractor={item => item.id}
                                    />
                            }
                        </>
                        :
                        null
            }

        </SafeAreaView>
    )
}

const mapState = state => ({
    loading: state.loading.models.Property,
})

export default connect(mapState)(SearchUnit)
