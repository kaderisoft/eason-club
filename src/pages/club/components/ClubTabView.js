import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { primary, secondary } from '@/config/style.config'
import CustomTabBar from '@comp/CustomTabBar'

const css = StyleSheet.create({
  tabBarUnderline: {
    backgroundColor: primary,
    borderRadius: 5,
  },
})

export default () => {
  return (
    <ScrollableTabView
      style={{ backgroundColor: 'white' }}
      tabBarActiveTextColor={primary}
      tabBarInactiveTextColor={secondary}
      tabBarUnderlineStyle={css.tabBarUnderline}
      scrollWithoutAnimation={true}
      renderTabBar={() => <CustomTabBar />}>
      <Text tabLabel="主页">My</Text>
      <Text tabLabel="动态">favorite</Text>
      <Text tabLabel="成员">project</Text>
      <Text tabLabel="招新">favorite</Text>
    </ScrollableTabView>
  )
}
