import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'

import { styles } from './styles'
import { color, IcSearch } from '../../theme'

export const SearchField = ({
  value,
  onChangeText,
  placeholder,
  onFocus,
  onBlur,
  onPress,
  renderIcon,
  props
}) => {
  return (
    <View style={styles.searchView}>
      <TextInput
        style={styles.inputText}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={color.secondary}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
      <TouchableOpacity style={styles.searchIcon} onPress={onPress}>
        {renderIcon()}
      </TouchableOpacity>
    </View>
  )
}
