import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const SearchCity = ({ previousSearches, onPress }) => {
  
  return (
    <FlatList
      data={previousSearches}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(item)}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      )
      }
    />
  )
}