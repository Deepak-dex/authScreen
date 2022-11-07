import React, {useState, useEffect} from 'react'
import styles from './style'
import { View, Text, Pressable, ScrollView, TextInput  } from 'react-native'

import Slider from '@react-native-community/slider'

import {COLORS} from '../../../constants'

// Icons
import LikeFilledIcon from '../assests/icons/LikeFilledIcon.svg'
import LikeOutlineIcon from '../assests/icons/LikeOutlineIcon.svg'
import DislikeOutlineIcon from '../assests/icons/DislikeOutlineIcon.svg'
import DislikeFilledIcon from '../assests/icons/DislikeFilledIcon.svg'




// UI components
const FeedBackItem = ({obj,index,feedBackObjArr,setFeedBackObjArr})=>{
  const handleClick = (value)=>{
    let tempFeedBackobjArr = [...feedBackObjArr]
    tempFeedBackobjArr[index].value = value

    if (tempFeedBackobjArr[index].type === "self"){
      if(value)
        tempFeedBackobjArr[index].ans.value = "yes"
      else
      tempFeedBackobjArr[index].ans.value = "no"
    }

    setFeedBackObjArr(tempFeedBackobjArr)
  }

  const handleDesc = (value)=>{
    let tempFeedBackobjArr = [...feedBackObjArr]
    tempFeedBackobjArr[index].ans.value = value
    setFeedBackObjArr(tempFeedBackobjArr)
  }

  return(
    <View style={styles.feedBackItem}>
      <View style={styles.feedBackHeader}>
          <Text style={styles.feedBackLabel}>{obj.text}</Text>

          <View style={styles.feedBackIconContainer}>
            {obj.value == null || !obj.value? <LikeOutlineIcon style={styles.likeIcon} onPress={()=>handleClick(true)}/>:
              <LikeFilledIcon style={styles.likeIcon}/>}
            {obj.value == null || obj.value? <DislikeOutlineIcon onPress={()=>handleClick(false)}/>: <DislikeFilledIcon />}
          </View>
      </View>
      {
          obj.value && obj.type != "self"? obj.type === "desc"? 
          <FeedBackDesc value={obj.ans.value} placeholder={obj.ans.placeholder} handleChange={handleDesc} />
          :<FeedBackRating value={obj.ans.value} index={index} feedBackObjArr={feedBackObjArr} setFeedBackObjArr={setFeedBackObjArr} /> 
          :null
      }

    </View>
  )
}

const FeedBackDesc = ({value,placeholder,handleChange})=>{
  return(
    <View style={styles.textAreaContainer}>
      <Text style={styles.textAreaProgress}>{value.length}/255</Text>
      <TextInput 
        value={value}
        placeholder={placeholder}
        onChangeText = {handleChange}
        numberOfLines={5}
        multiline={true}
        style={styles.textArea}
      />
    </View>
  )
}

const FeedBackRating = ({value,index,feedBackObjArr,setFeedBackObjArr})=>{
  const handleRating = (value)=>{
    let tempFeedBackobjArr = [...feedBackObjArr]
    tempFeedBackobjArr[index].ans.value = value
    setFeedBackObjArr(tempFeedBackobjArr)
  }
  return(
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingHeader}>Rate your experience:</Text>
        <View style={styles.ratingLabelContainer}>
          <Text style={styles.ratingLabel}>Very Bad</Text>
          <Text style={styles.ratingLabel}>Very Good</Text>
        </View>
        <Slider 
          style={styles.slider} 
          minimumValue={0} 
          maximumValue={10} 
          minimumTrackTintColor={COLORS.blue}
          maximumTrackTintColor={COLORS.textBlack60}
          thumbTintColor="black"
          step={1}
          value={value}
          onSlidingComplete={(handleRating)}
        />
      </View>
  )
}

export default function FeedBack2Screen({navigation,route}) {
  const [feedBackObjArr, setFeedBackObjArr] = useState([
    {
      id: "billRecharge",
      type: "rating",
      text: "Have you made any bill payment or did recharge?",
      value: null,
      ans: {
        id: "billRechargeDescription",
        value: 0
      }
    },
    {
      id: "paymentIssues",
      type: "desc",
      text: "Faced any issues while payment ?",
      value: null,
      ans: {
        id: "paymentIssuesDescription",
        value: "",
        placeholder: "placeholder"
      }
    },
    {
      id: "flightsBooked",
      type: "rating",
      text: "Did you book your bus ticket or a flight ticket?",
      value: null,
      ans: {
        id: "flightsBookedDescription",
        value: 0
      }
    },
    {
      id: "bookingIssues",
      type: "desc",
      text: "Faced any issues while booking a ticket?",
      value: null,
      ans: {
        id: "bookingIssuesDescription",
        value: "",
        placeholder: "placeholder"
      }
    },
    {
      id: "appPerformance",
      type:"self",
      text: "Was the app fast and Smooth?",
      value: null,
      ans: {
        id: "appPerformance",
        value: '',
        placeholder: "placeholder"
      }
    },
    {
      id: "transactionAnalysis",
      type:"self",
      text: "Was the transaction analysis helpful?",
      value: null,
      ans: {
        id: "transactionAnalysis",
        value: '',
        placeholder: "placeholder"
      }
    },
    {
      id: "bugsFound",
      type: "desc",
      text: "Found any Bugs/Issues ?",
      value: null,
      ans: {
        id: "bugsFoundDescription",
        value: "",
        placeholder: "placeholder"
      }
    },
  ])
  
 const handleNextBtn = ()=>{
  let newFeedbackObj = route.params
  feedBackObjArr.forEach(obj=>{
    let valueToAdd = ''
    if(obj.value)
      valueToAdd = 'yes'
    else if(!obj.value)
      valueToAdd = 'no'
    newFeedbackObj[obj.id] = valueToAdd

    newFeedbackObj[obj.ans.id] = obj.ans.value
  })
  navigation.navigate("FeedBack3Screen",newFeedbackObj)
 }

  return (
    <View style={styles.mainSection}>
      <Text style={styles.heading}>Help us improve by answering some basic questions :</Text>


      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.feedBackList}
        >
          {
            feedBackObjArr.map((obj,index)=>
              <FeedBackItem obj={obj} index={index} key={obj.id} feedBackObjArr={feedBackObjArr} setFeedBackObjArr={setFeedBackObjArr}/>
            )
          }
      </ScrollView>

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={()=>navigation.goBack()}>
          <Text style={styles.btnLabel}>Back</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleNextBtn}>
          <Text style={styles.btnLabel}>Next</Text>
        </Pressable>
      </View>

    </View>
  )
}