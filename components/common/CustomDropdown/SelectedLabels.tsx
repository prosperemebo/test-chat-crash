import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { Animated } from 'react-native'
import {
  TagContainer,
  AnimatedTag,
  TagText,
  CloseButton,
  AnimatedSingleValue,
  SingleValueText,
  CloseIcon
} from './styles'
import { SelectedLabelsRef, SelectedLabelProps, AnimatedTagRef } from './types'


export const SelectedLabels = forwardRef<SelectedLabelsRef, SelectedLabelProps>(({
  multiSelect,
  data,
  value,
  selectedLabels,
  handleRemoveItem
}, ref) => {
  const animatedTags = useRef<AnimatedTagRef[]>([])

  const removeTagWithAnimation = (tagValue: string) => {
    const tag = animatedTags.current.find(t => t.value === tagValue)
    if (!tag) return

    Animated.parallel([
      Animated.timing(tag.animation.translateX, {
        toValue: -20,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(tag.animation.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      })
    ]).start(() => {
      handleRemoveItem(tagValue)
      animatedTags.current = animatedTags.current.filter(t => t.value !== tagValue)
    })
  }

  useImperativeHandle(ref, () => ({
    removeTagWithAnimation
  }))

  useEffect(() => {
    if (!multiSelect || !Array.isArray(value)) return

    value.forEach(tagValue => {
      if (!animatedTags.current.find(tag => tag.value === tagValue)) {
        const newTag = {
          value: tagValue,
          animation: {
            translateX: new Animated.Value(-20),
            opacity: new Animated.Value(0)
          }
        }
        animatedTags.current.push(newTag)

        Animated.parallel([
          Animated.timing(newTag.animation.translateX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
          }),
          Animated.timing(newTag.animation.opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
          })
        ]).start()
      }
    })

    const tagsToRemove = animatedTags.current
      .filter(tag => !value.includes(tag.value))
      .map(tag => tag.value)

    tagsToRemove.forEach(tagValue => {
      removeTagWithAnimation(tagValue)
    })
  }, [value, multiSelect])

  if (!value) return null

  if (!multiSelect) {
    const singleValueAnimation = useRef({
      translateX: new Animated.Value(-20),
      opacity: new Animated.Value(0)
    }).current

    useEffect(() => {
      Animated.parallel([
        Animated.timing(singleValueAnimation.translateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }),
        Animated.timing(singleValueAnimation.opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        })
      ]).start()
    }, [value])

    return (
      <AnimatedSingleValue
        style={{
          opacity: singleValueAnimation.opacity,
          transform: [{ translateX: singleValueAnimation.translateX }]
        }}
      >
        <SingleValueText>{selectedLabels}</SingleValueText>
      </AnimatedSingleValue>
    )
  }

  const selectedItems = data.filter(item =>
    Array.isArray(value) && value.includes(item.value!)
  )

  return (
    <TagContainer>
      {selectedItems.map(item => {
        const animatedTag = animatedTags.current.find(tag => tag.value === item.value!)
        if (!animatedTag) return null

        return (
          <AnimatedTag
            key={item.value}
            style={{
              opacity: animatedTag.animation.opacity,
              transform: [{ translateX: animatedTag.animation.translateX }]
            }}
          >
            <TagText>{item.label}</TagText>
            <CloseButton onPress={() => removeTagWithAnimation(item.value!)}>
              <CloseIcon name="close-circle" />
            </CloseButton>
          </AnimatedTag>
        )
      })}
    </TagContainer>
  )
})