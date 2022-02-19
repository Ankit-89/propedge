import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { styles } from './styles';
import * as Images from '../../assets/Images/map';
import { WebView } from 'react-native-webview';
import ActivityHud from '../ActivityIndicator';
import RenderHtml from 'react-native-render-html';

function StaticWebView({ navigation, route }) {
    const loading = useSelector(state => state.loading.models.Menu);
    const { width } = useWindowDimensions();

    const source = {
        html: `
        <p style='text-align:center;'>
        ${route.params.content}
        </p>
        `
    };

    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity style={styles.headerOption} onPress={() => navigation.goBack(null)}>
                <Image style={styles.headerIcon} resizeMode="contain" source={Images.Menu.back} />
            </TouchableOpacity>
        ),
        headerTitle: route.params.title
    });

    const handlNavStatechange = (newNavState) => {
        console.log('New State:', newNavState);
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <RenderHtml
                contentWidth={width}
                source={source}
            /> */}
            {
                loading ? <ActivityHud /> :
                    <WebView
                        source={{ html: route.params.content }}
                    />
            }

        </SafeAreaView>
    )

}

export default StaticWebView;