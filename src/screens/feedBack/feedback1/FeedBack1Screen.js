import React, {useState, useEffect} from 'react'
import styles from './style'
import { View, Text, Modal, Pressable, ScrollView,  } from 'react-native'

import Slider from '@react-native-community/slider'
import CustomSlider from '../components/slider/Slider'

import {COLORS} from '../../../constants'

// Icons
import LikeFilledIcon from '../assests/icons/LikeFilledIcon.svg'
import LikeOutlineIcon from '../assests/icons/LikeOutlineIcon.svg'
import DislikeOutlineIcon from '../assests/icons/DislikeOutlineIcon.svg'
import DislikeFilledIcon from '../assests/icons/DislikeFilledIcon.svg'

export default function FeedBack1Screen({navigation}) {
  const [sliderValue, setSliderValue] = useState(0)

  const [feedBackObjArr, setFeedBackObjAr] = useState([
    {
      id: "colorTheme",
      text: "Color theme",
      value: null
    },
    {
      id: "easeOfUse",
      text: "Ease of use",
      value: null
    },
    {
      id: "icons",
      text: "Icons",
      value: null
    },
    {
      id: "animations",
      text: "Animations",
      value: null
    },
    {
      id: "easyToNavigate",
      text: "Easy to navigate",
      value: null
    },
  ])
  

  const handleNextBtn = ()=>{
    let newFeedBackObj = {}
    feedBackObjArr.forEach(obj => {
      let valueToAdd = ''
      if (obj.value)
        valueToAdd = 'like'
      if (!obj.value)
        valueToAdd = 'dislike'
      newFeedBackObj[obj.id] = valueToAdd
    });
    newFeedBackObj["uiRating"] = sliderValue
    console.log(newFeedBackObj)
    navigation.navigate("FeedBack2Screen",newFeedBackObj)
  }

  // UI components
  const FeedBackItem = ({label,value,index})=>{
    const handleClick = (val)=>{
      let tempFeedBackobjArr = [...feedBackObjArr]
      tempFeedBackobjArr[index].value = val
      setFeedBackObjAr(tempFeedBackobjArr)
    }
    return(
      <View 
        style={[
          styles.feedBackItem,
          {borderColor:value===null?COLORS.grey100 : value?COLORS.green:COLORS.red}
        ]}
      >

        <Text 
          style={[
            styles.feedBackLabel,
            {color:value===null?COLORS.textBlack : value?COLORS.green:COLORS.red}
          ]}
        >
          {label}
        </Text>

            <View style={styles.feedBackIconContainer}>
              {value == null || !value? <LikeOutlineIcon style={styles.likeIcon} onPress={()=>handleClick(true)}/>:
                <LikeFilledIcon style={styles.likeIcon}/>}
              {value == null || value? <DislikeOutlineIcon onPress={()=>handleClick(false)}/>: <DislikeFilledIcon />}
            </View>

      </View>
    )
  }

  return (
    <View style={styles.mainSection}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>How was the look and feel of the App ?</Text>


      <Text style={styles.subHeading}>rate our ui:</Text>

      <View style={styles.ratingLabelContainer}>
        <Text style={styles.ratingLabel}>Very Bad</Text>
        <Text style={styles.ratingLabel}>Very Good</Text>
      </View>
      {/* <Slider 
        style={styles.slider} 
        minimumValue={0} 
        maximumValue={10} 
        minimumTrackTintColor={COLORS.blue}
        maximumTrackTintColor={COLORS.textBlack60}
        thumbTintColor="black"
        value={sliderValue}
        onSlidingComplete={(value)=>setSliderValue(Math.floor(value))}
      />   */} 
      <CustomSlider
        boundaryMin={0} 
        boundaryMax={10}
        initVal={sliderValue}
        onSlide={(val)=>setSliderValue(val)}
      />


      <Text style={styles.subHeading}>Yay or Nay :</Text>

      <View style={styles.feedBackList}>
          {
            feedBackObjArr.map((obj,index)=>
              <FeedBackItem label={obj.text} value={obj.value} index={index} key={obj.id}/>
            )
          }
      </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={handleNextBtn}>
          <Text style={styles.btnLabel}>Next</Text>
        </Pressable>
      </View>

    </View>
  )
}