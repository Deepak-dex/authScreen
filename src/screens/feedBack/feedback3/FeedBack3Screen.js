import React, {useState, useEffect} from 'react'
import styles from './style'
import { View, Text, Pressable, ScrollView, TextInput, TouchableOpacity  } from 'react-native'

import Slider from '@react-native-community/slider'

import {COLORS} from '../../../constants'

import axios from 'axios'

// Icons
import StarFilledIcon from "../assests/icons/StarFilledIcon.svg"
import StarOutlineIcon from "../assests/icons/StarOutlineIcon.svg"
import img from "../../../../assets/down.png"


// Star 
const CustomRatingBar = ({maxRating,setRating,rating}) => {
  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setRating(item)}>
            {
              item <= rating
                  ? <StarFilledIcon height={38}/>
                  : <StarOutlineIcon height={38}/>
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


export default function FeedBack3Screen({navigatoin,route}) {
  const [rating, setRating] = useState(1)
  const [overallFeedback, setOverallFeedback] = useState('')
  const [sliderValue, setSliderValue] = useState(0)

  const handleSubhmit = ()=>{
    let feedbackObj = route.params
    feedbackObj["overallRating"] = rating;
    feedbackObj["mobileNo"] = "8369118960";
    feedbackObj["finalFeedBack"] = overallFeedback;
    feedbackObj["recommendationScore"] = sliderValue;
    console.log(feedbackObj)

    axios.post("https://apis.kleio.me/api/userFeedback",feedbackObj)
    .then(res=>console.log(res))

  }
  
  return (
    <View style={styles.mainSection}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>How would you rate your experience with Kpay?</Text>
        <CustomRatingBar maxRating={[1,2,3,4,5]} rating={rating} setRating={setRating} />


        <Text style={styles.heading}>Tell us more about experience / or any issues you faced/ or the features you would demand from us</Text>
        <View style={styles.textAreaContainer}>
          <Text style={styles.textAreaProgress}>{overallFeedback.length}/255</Text>
          <TextInput
            multiline={true}
            numberOfLines={10}
            maxLength={255}
            style={styles.textArea}
            placeholder={"we are all ears !!!"}
            value={overallFeedback}
            onChangeText={setOverallFeedback}
          />
        </View>


        <Text style={styles.heading}>How likely you are to recommend kpay to your friends?</Text>
        <View style={styles.ratingLabelContainer}>
          <Text style={styles.ratingLabel}>Very Bad</Text>
          <Text style={styles.ratingLabel}>{sliderValue}</Text>
          <Text style={styles.ratingLabel}>Very Good</Text>
        </View>
        <Slider 
          style={styles.slider} 
          minimumValue={0} 
          maximumValue={10} 
          minimumTrackTintColor={COLORS.blue}
          maximumTrackTintColor={COLORS.textBlack60}
          thumbTintColor="black"
          value={sliderValue}
          onSlidingComplete={(val)=>setSliderValue(Math.floor(val))}
        />

    </ScrollView>

        <Pressable style={styles.btn} onPress={handleSubhmit}>
          <Text style={styles.btnLabel}>Submit</Text>
        </Pressable>

    </View>
  )
}