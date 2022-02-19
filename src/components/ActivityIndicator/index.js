import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Theme} from '../../utils/common';

const ActivityHud = (props) => {
  return (
    <ActivityIndicator
      size="small"
      color={props.color ? props.color: Theme}
      style={{justifyContent: 'center', flex: 1}}
    />
  );
};

export default ActivityHud;
