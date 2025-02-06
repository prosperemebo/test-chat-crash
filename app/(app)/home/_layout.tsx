import React from 'react'
import { Tabs } from 'expo-router'
import { useTheme } from 'styled-components/native'
import { TabBarIcon, TabBarIconWrapper } from '@/components/navigation'

export default function HomeLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.nav.bottomTabBackgroundColor },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => (
            <TabBarIconWrapper>
              <TabBarIcon
                contentFit={'contain'}
                source={require('@/assets/images/tabBarIcons/chatIcon.png')}
                tintColor={color}
              />
            </TabBarIconWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Meet',
          tabBarIcon: ({ color }) => (
            <TabBarIconWrapper>
              <TabBarIcon
                contentFit={'contain'}
                source={require('@/assets/images/tabBarIcons/meetIcon.png')}
                tintColor={color}
              />
            </TabBarIconWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <TabBarIconWrapper>
              <TabBarIcon
                contentFit={'contain'}
                source={require('@/assets/images/tabBarIcons/profileIcon.png')}
                tintColor={color}
              />
            </TabBarIconWrapper>
          ),
        }}
      />
    </Tabs>
  )
}
