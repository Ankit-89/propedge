import React from 'react';
import { useState } from "react";
import { Pressable, View } from "react-native";
import { Theme } from '../../utils/common';

const Switch = ({ }) => {
    const [isEnable, setIsEnable] = useState(true);
    return (
        <Pressable style={{
            backgroundColor: isEnable ? Theme : 'grey',
            width: 48,
            height: 28,
            borderRadius: 45,
            justifyContent: 'center',
        }}
            onPress={() => {
                setIsEnable((prev) => !prev);
            }}
        >
            <View
                style={{
                    backgroundColor: 'white',
                    width: 22,
                    height: 22,
                    borderRadius: 30,
                    elevation: 1,
                    position: 'absolute',
                    ...isEnable ? {
                        right: 4
                    } : {
                        left: 4
                    }
                }}
            />
        </Pressable>
    );
};

export default Switch;