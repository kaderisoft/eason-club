import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { primary, secondary, lightGray } from '@/config/style.config'

import Avatar from '@comp/Avatar'

const css = StyleSheet.create({
  profile_header: {
    padding: 20,
    backgroundColor: 'white',
  },
  profile_info: {
    position: 'relative',
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile_statistics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profile_btn: {
    position: 'absolute',
    bottom: 0,
    right: -50,
    width: 125,
    height: 38,
    borderWidth: 2,
    borderRadius: 38 / 2,
    overflow: 'hidden',
  },
  profile_btn_inner: {
    position: 'relative',
    top: 1,
    left: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    borderRadius: 34 / 2,
    justifyContent: 'center',
    backgroundColor: primary,
  },
})

export default ({ style }) => {
  const nav = useNavigation()

  const [avatar, setAvatar] = useState('')
  const [nickname, setNickname] = useState('')
  const [brief, setBrief] = useState('')
  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const userInfo = await AsyncStorage.getItem('use_info')
      const info = userInfo && JSON.parse(userInfo)
      setAvatar(info.avatar)
      setNickname(info.nickname)
      setBrief(info.brief)
    })()
  }, [])

  return (
    <View style={[style, css.profile_header]}>
      <View style={css.profile_info}>
        <Avatar size={75} src={avatar} />
        <View style={{ marginLeft: 16 }}>
          <Text style={{ marginBottom: 5, fontSize: 20 }}>{nickname}</Text>
          <Text style={{ color: secondary }}>{brief}</Text>
        </View>
        <View style={css.profile_btn}>
          <TouchableWithoutFeedback onPress={() => nav.navigate('Club')}>
            <View style={css.profile_btn_inner}>
              <Text>个人空间</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={css.profile_statistics}>
        {[
          { label: '我的社团', num: 3, route: 'MyClub' },
          { label: '我的关注', num: 54, route: 'Follow' },
          { label: '我的活动', num: 16, route: 'MyActivity' },
        ].map(({ label, num, route }) => (
          <TouchableWithoutFeedback
            key={label}
            onPress={() => nav.navigate(route)}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ marginBottom: 5, fontSize: 19 }}>{num}</Text>
              <Text style={{ color: lightGray }}>{label}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  )
}
