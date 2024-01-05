import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'

import { COLORS , SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { useRouter } from 'expo-router';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
   
  const router = useRouter();
  const {data , isLoading , error} = useFetch(search , {
    query : 'React developer',
    num_pages : 1
  })


  
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
      (<Text>Somwthings Wrong</Text>):(
      <FlatList 
      data={[1,2,3,4,5,6,7,8,9]}
      renderItem={(item) => (
        <PopularJobCard 
        item = {item}
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