import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useState } from "react";
import styles from './popularjobs.style'

import { COLORS , SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { useRouter } from 'expo-router';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
   
  const router = useRouter();
  const {data , isLoading , error} = useFetch("search" , {
    query : "React developer",
    num_pages : "1",
  })
  const [selectedJob, setSelectedJob] = useState();

  const handlePress = (item) => {
   console.log("hello");
  };

  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? 
      (<Text>Somethings Wrong</Text>):(
      <FlatList 
      data= {data}
      renderItem={(item) => (
        <PopularJobCard 
        item = {item}
        selectedJob={selectedJob}
        handlePress={handlePress}
        />
      )}
      keyExtractor={item => item?.job_id}
      contentContainerStyle={{columnGap: SIZES.medium}}
      horizontal
      />
      )}

      </View>
    </View>
  )
}

export default Popularjobs