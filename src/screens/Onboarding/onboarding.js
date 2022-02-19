import React, { useEffect } from 'react';
import Walkthrough from '../../components/walkthrough';

import carousel from './carousel';
import buttons from './buttons';

const styles = {
	card: {
		borderColor: '#ddd',
	},
	dotStyle: {
		backgroundColor: '#39414F',
	},
	inactiveDotStyle: {
		backgroundColor: '#000',
	},
};

export default function Onboarding(props) {

  const gotoUserType = () => {
    props.navigation.navigate("UserType")
  };

  return (
  <>
    <Walkthrough
		carousel={carousel}
		buttons={buttons}
		styles={styles}
		done={gotoUserType}
	/>
  </>
  )
}