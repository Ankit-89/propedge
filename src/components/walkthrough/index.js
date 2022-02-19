import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Animated, PixelRatio, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { height } from './metrics';
import { ITEM_WIDTH, SLIDER_WIDTH, styles } from './styles';

import {
  scrollInterpolator,
  animatedStyles,
  AnimatedButton,
} from './animatedCarousel';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WalkThrough({ carousel: data, buttons, styles: externalStyles, done }) {
  const [state, setState] = useState({ index: 0 });

  const carousel = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const nextCard = () => {
    if (typeof carousel.current?.snapToNext === 'function')
      carousel.current.snapToNext();
    return state.index < data.length - 1
      ? setState((currentState) => ({ index: currentState.index + 1 }))
      : state.index;
  };

  const previousCard = () => {
    if (typeof carousel.current?.snapToNext === 'function')
      carousel.current.snapToPrev();
    return state.index > 0
      ? setState((currentState) => ({ index: currentState.index - 1 }))
      : state.index;
  };

  const pagination = () => (
    <Pagination
      dotsLength={data.length}
      activeDotIndex={state.index}
      containerStyle={styles.paginationContainer}
      dotContainerStyle={{ height: 0, padding: 0, marginTop: -16 }}
      dotStyle={[styles.dotStyle, {
        ...externalStyles.dotStyle
      }]}
      inactiveDotStyle={[styles.inactiveDotStyle, {
        ...externalStyles.inactiveDotStyle
      }]}
    />
  );

  const Item = ({ item }) => (
    <View style={[styles.itemContainer, {
      ...externalStyles.card
    }]}>
      <View style={styles.imageContainer}>
        {height > 640 && PixelRatio.getFontScale() <= 1.5 ? item.banner : undefined}
      </View>
      <View style={styles.textContainer}>
        {item.title}
        {item.text}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, state.index === 0 ? styles.firstPage : state.index === 1 ? styles.secondPage : styles.thirdPage, {
      ...externalStyles
    }]}>
      <Carousel
        ref={carousel}
        layout={'stack'}
        data={data}
        renderItem={({ item }) => <Item item={{ ...item }} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        slideStyle={{ width: ITEM_WIDTH }}
        containerCustomStyle={styles.carouselContainer}
        contentContainerCustomStyle={styles.carouselContentContainer}
        inactiveSlideShift={0}
        initialScrollIndex={0}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        inactiveSlideOpacity={0}
        inactiveSlideScale={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        onSnapToItem={(index) => setState({ index })}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        scrollEventThrottle={16}
        horizontal
        useScrollView
        enableSnap
        directionalLockEnabled
      />
      {pagination()}

      <View style={styles.buttonContainer}>
        {
          state.index === 2 ?
            <TouchableOpacity
              onPress={() => done()}
              style={[styles.doneButton, { ...buttons.doneButton.styles }]}
            >
              <Text style={styles.buttonTextStarted}>Get Started</Text>
            </TouchableOpacity>
            :

            <>
              <TouchableOpacity
                onPress={() => done()}
                style={[styles.previousButton, { ...buttons.previousButton.styles }]}
              >
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => nextCard()}
                style={[styles.nextButton, { ...buttons.nextButton.styles }]}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </>
        }

      </View>
    </SafeAreaView>
  );
}