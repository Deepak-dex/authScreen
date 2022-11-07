import React, { useState,useEffect } from "react";
import { View, PanResponder, Animated, Text } from "react-native";
import s from './style'

export default function CustomSlider(props){

// ------------------ OPTIONS ------------------------ //
  // (Use props._VALUE_ in this section if needed)
  const minBoundary = 0;
  const maxBoundary = 10;
  const initVal = 1;
//   const colorHighlight = "#008ee6";

   // ----------------- Slider ----------------------- //
   const pan = React.useRef(new Animated.ValueXY()).current;
   const [forceRender, setForceRender] = React.useState(0);
   const animState = React.useRef(
   {
     displayMinVal:0,
     sliderWidth:0,
     stepWidth:0,
     minBoundary:0,
     maxBoundary:0,
     minBoundaryPosition:0,
     maxBoundaryPosition:0,
     offSet: 0,
     clampOffSet: 0,
     initOffSet: 0,
   }).current;
   
   const [sliderHeight, setSliderHeight] = React.useState(0);
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const [sliderCenter, setSliderCenter] = React.useState(0);
  const [initOffset, setInitOffset] = React.useState(0);
  const [minBoundaryPosition, setMinBoundaryPosition] = React.useState(0);
  const [maxBoundaryPosition, setMaxBoundaryPosition] = React.useState(0);

  useEffect(() => {
    console.log('hi')
  }, [minBoundary])


  const setSliderSize = (height, width) =>
  {
    setSliderHeight(height);
    const sWidth = width - height // - height : Avoid the slider to overlap the borders
    setSliderWidth(sWidth);
    animState.sliderHeight = height;
    animState.sliderWidth = sWidth;
    const stepWidth = sWidth / (maxBoundary - minBoundary);
    animState.stepWidth = stepWidth;
    animState.minBoundary = minBoundary;
    animState.maxBoundary = maxBoundary;

    const center = sWidth / 2;
    setSliderCenter(center);
    const initOff = (initVal - ((maxBoundary - minBoundary) / 2)) * stepWidth;
    setInitOffset(initOff);
    animState.initOffSet = initOff;
    animState.minBoundaryPosition = (-sWidth / 2) - initOff;
    animState.maxBoundaryPosition = (sWidth / 2) - initOff;
    setMinBoundaryPosition((-sWidth / 2) - initOff);
    setMaxBoundaryPosition((sWidth / 2) - initOff);

    placeSlider();
  };

  const placeSlider = () =>
  {
    const newVal =
      pan.x._value +
      animState.offSet +
      animState.initOffSet -
      animState.clampOffSet;
    setForceRender(newVal); // Update the state so the render function is called (and elements are updated on screen)
    
    let filterVal = Math.trunc((newVal + animState.sliderWidth/2 + animState.stepWidth/2) / animState.stepWidth);
    filterVal = Math.min(maxBoundary, filterVal);
    filterVal = Math.max(minBoundary, filterVal);
    animState.displayMinVal = filterVal;
    // for value
    props.onSlide(filterVal)
  };

  const getPanResponder = () =>
  {
    return PanResponder.create(
    {
        onMoveShouldSetResponderCapture: () => true, //Tell iOS that we are allowing the movement
        onMoveShouldSetPanResponderCapture: () => true, // Same here, tell iOS that we allow dragging
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () =>
        {
          const clamp = Math.max(animState.minBoundaryPosition, Math.min(animState.maxBoundaryPosition, pan.x._value));
          animState.clampOffSet = animState.clampOffSet + pan.x._value - clamp;
          pan.setOffset({x:clamp, y:0});
        },
        onPanResponderMove: (e, gesture) =>
        {
          placeSlider();
          Animated.event([null, { dx: pan.x, dy: pan.y }], {useNativeDriver:false})(e, {dx:gesture.dx, dy:0});
        },
        onPanResponderRelease: (e, gesture) =>
        {
          animState.offSet = animState.offSet + pan.x._value;
          pan.flattenOffset();
        }
    });
  };
  const [panResponder, setPanResponder] = React.useState(getPanResponder());

  // ----------------- Render ----------------------- //
  return (
    <View style={s.mainContainer}>
      <View style={s.container}>
        {/* <View style={s.labelValue}>
          <Text style={s.labelValueText}>{animState.displayMinVal}</Text>
        </View> */}
        <View
          style={s.sliderContainer}
          onLayout={(event) => setSliderSize(event.nativeEvent.layout.height, event.nativeEvent.layout.width)}
        >
          <View style={s.lineContainer}>
            <Animated.View style={[
              s.line,
              [{ translateX: pan.x.interpolate(
                {
                  inputRange: [Math.min(minBoundaryPosition, maxBoundaryPosition), Math.max(minBoundaryPosition, maxBoundaryPosition)],
                  outputRange: [
                    Math.min(minBoundaryPosition + initOffset - sliderWidth/2, maxBoundaryPosition + initOffset - sliderWidth/2),
                    Math.max(minBoundaryPosition + initOffset - sliderWidth/2, maxBoundaryPosition + initOffset - sliderWidth/2)
                  ],
                  extrapolate: 'clamp'
                })
              }],
              ]} />
          </View>
          <Animated.View
            style={[
              s.draggable,
              { transform:
                [{ translateX: pan.x.interpolate(
                  {
                    inputRange: [Math.min(minBoundaryPosition, maxBoundaryPosition), Math.max(minBoundaryPosition, maxBoundaryPosition)],
                    outputRange: [Math.min(minBoundaryPosition, maxBoundaryPosition), Math.max(minBoundaryPosition, maxBoundaryPosition)],
                    extrapolate: 'clamp'
                  })
                }]
              },
              {left:sliderCenter + initOffset}
            ]}
            {...panResponder.panHandlers}
          >
            <View style={s.circle} />
          </Animated.View>

          <View style={[s.boundary, {left:0 }]}/>
        </View>
      </View>
    </View>
  );
}