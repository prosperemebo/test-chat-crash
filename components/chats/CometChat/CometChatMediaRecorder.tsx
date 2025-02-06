import React, { useEffect } from 'react'
import { MediaRecorderStyle, MediaRecorderStyleInterface } from '@cometchat/chat-uikit-react-native'
import { ButtonWrapper, GradientIconWrapper, SendButtonIcon, StopButtonIcon } from '../styledComponents'
import { useCometChatTheme } from '@/hooks/useCometChatTheme'
import { nPURPLE, WHITE } from '@/theme/color'
import {
  StyleSheet,
  View,
  Text,
  NativeModules,
  FlatList,
  PermissionsAndroid,
  Alert,
  Platform,
  Linking,
  TextStyle,
  ViewProps,
  AppState,
} from 'react-native'

let recordedTime = 0,
  stopRecordingIntervalId: any = null
let recordingStatedAt = 0
export interface CometChatMediaRecorderInterface {
  onClose?: Function
  onPlay?: Function
  onPause?: Function
  onStop?: Function
  onSend?: Function
  onStart?: Function
}

let timerIntervalId: any = null
export const CometChatMediaRecorder = (props: CometChatMediaRecorderInterface) => {
  const { onClose, onPause, onPlay, onSend, onStop, onStart } = props

  const [time, setTime] = React.useState(0)
  const [recordedFile, setRecordedFile] = React.useState('')
  const [recordedPlaying, setRecordedPlaying] = React.useState(false)

  const theme = useCometChatTheme()

  const _style = new MediaRecorderStyle({
    audioBarTint: nPURPLE,
    submitIconTint: Boolean(recordedFile) ? theme?.palette.getPrimary() : theme?.palette.getAccent400(),
  })

  const { audioBarTint, timerTextFont, timerTextstyle, timerTextColor } = _style

  const cleaner = async () => {
    const microphonePermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)

    if (!microphonePermission && Platform.OS === 'android') return

    NativeModules.FileManager.deleteFile((success: any) => console.log('Filepath delete', success))
    NativeModules.FileManager.releaseMediaResources((result: any) => {})

    clearInterval(timerIntervalId)
    setRecordedFile('')

    recordedPlaying && setRecordedPlaying(false)
  }

  useEffect(() => {
    recordingInitiator()

    return () => {
      cleaner()
    }
  }, [])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'background') {
        _onStop()
      }
    })

    return () => {
      subscription.remove()
    }
  }, [])

  function permissionAlert() {
    Alert.alert('', localize('MICROPHONE_PERMISSION'), [
      {
        style: 'cancel',
        text: localize('CANCEL'),
      },
      {
        style: 'default',
        text: localize('SETTINGS'),
        onPress: () => {
          Linking.openSettings()
        },
      },
    ])
  }

  const recordingInitiator = async () => {
    const microphonePermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)

    if (microphonePermission || Platform.OS === 'ios') {
      NativeModules.FileManager.startRecording((filepath: any) => {
        if (Platform.OS === 'ios') {
          try {
            let resObj = JSON.parse(filepath)
            if (resObj?.granted === false) {
              permissionAlert()
              onClose && onClose()
            } else {
              startInterval()
            }
          } catch (error) {
            permissionAlert()
            onClose && onClose()
          }
        }
      })

      Platform.OS === 'android' && startInterval()
    } else {
      permissionAlert()
      onClose && onClose()
      return null
    }
  }

  const startInterval = () => {
    recordingStatedAt = Date.now()
    timerIntervalId = setInterval(timer, 1000)
  }

  const _onStop = () => {
    NativeModules.FileManager.releaseMediaResources((result: string) => {
      console.log(time, 'Filepath _stopRecorderAudio', result)
      recordedTime = Date.now() - recordingStatedAt
      setRecordedFile(JSON.parse(result)?.file)
      onStop && onStop(JSON.parse(result)?.file)
    })

    clearInterval(timerIntervalId)
  }

  const _onStart = () => {
    _onPause()
    setTime(0)
    startInterval()
    setRecordedFile('')
    setRecordedPlaying(false)

    NativeModules.FileManager.deleteFile((success: any) => {
      console.log('Filepath delete', success)
      NativeModules.FileManager.startRecording((result: any) => {
        console.log('Filepath onRecorderAudioStarted', result)
      })
    })

    onPause && onPause()
    onStart && onStart()
  }

  const _onPlay = () => {
    NativeModules.FileManager.playAudio((filepath: any) => {
      console.log(recordedTime, 'Filepath _playRecorderAudio', filepath)
      onPlay && onPlay()
      setRecordedPlaying(true)
      stopRecordingIntervalId = setTimeout(() => {
        onPause && onPause()
        setRecordedPlaying(false)
        clearTimeout(stopRecordingIntervalId)
      }, recordedTime)
    })
  }

  const _onPause = () => {
    NativeModules.FileManager.pausePlaying((filepath: any) => {
      console.log('Filepath onRecorderAudioPaused', filepath)
      onPause && onPause()
      setRecordedPlaying(false)
      clearTimeout(stopRecordingIntervalId)
      console.log('timeout cleared', stopRecordingIntervalId)
    })
  }

  const _onClose = () => {
    _onPause()
    setRecordedFile('')
    setRecordedPlaying(false)
    NativeModules.FileManager.releaseMediaResources((filepath: any) => {
      console.log('Filepath onClose', filepath)
    })
    onClose && onClose()
  }

  const _onSend = () => {
    NativeModules.FileManager.releaseMediaResources((result: any) => {
      console.log('Filepath _stopRecorderAudio', result)
    })

    onSend && onSend(recordedFile)
  }

  const timer = () => {
    setTime((time) => time + 1)
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  }

  const _render = ({ item, index }: any) => {
    return <View style={[Style.soundBar, audioBarTint && { backgroundColor: audioBarTint }] as ViewProps} />
  }

  if (time === 1200 && !recordedFile) {
    _onStop()
  }

  const soundBars = Array.from(Array(time).keys())

  return (
    <View style={Style.container}>
      <View style={[Style.soundBarContainer]}>
        {Boolean(recordedFile) && (
          <>
            {!recordedPlaying ? (
              <ButtonWrapper onPress={_onPlay}>
                <GradientIconWrapper>
                  <SendButtonIcon name='play' />
                </GradientIconWrapper>
              </ButtonWrapper>
            ) : (
              <ButtonWrapper onPress={_onPause}>
                <GradientIconWrapper>
                  <SendButtonIcon name='pause' />
                </GradientIconWrapper>
              </ButtonWrapper>
            )}
          </>
        )}
        <View style={[Style.timerContainer, { flexDirection: Boolean(recordedFile) ? 'row-reverse' : 'row' }]}>
          <Text
            style={
              [
                timerTextFont && { fontFamily: timerTextFont },
                timerTextColor ? { color: timerTextColor } : { color: WHITE },
                timerTextstyle && { fontStyle: timerTextstyle },
                !Boolean(recordedFile) && { marginRight: 10 },
              ] as TextStyle[]
            }
          >
            {formatTime(time)}
          </Text>
          <FlatList
            data={soundBars}
            keyExtractor={(item) => item.toString()}
            renderItem={_render}
            horizontal={true}
            style={{
              marginLeft: Boolean(recordedFile) ? 10 : 0,
              marginRight: Boolean(recordedFile) ? 10 : 0,
              width: Boolean(recordedFile) ? '75%' : '85%',
            }}
          />
        </View>
      </View>
      <View style={Style.buttonContainer}>
        <ButtonWrapper onPress={_onClose}>
          <GradientIconWrapper disabled>
            <StopButtonIcon color={WHITE} name='delete' />
          </GradientIconWrapper>
        </ButtonWrapper>

        {Boolean(recordedFile) ? (
          <ButtonWrapper onPress={_onSend} disabled={!Boolean(recordedFile)}>
            <GradientIconWrapper disabled={!Boolean(recordedFile)}>
              <SendButtonIcon name='paper-plane' />
            </GradientIconWrapper>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper onPress={_onStop}>
            <GradientIconWrapper>
              <SendButtonIcon name='stop-circle' />
            </GradientIconWrapper>
          </ButtonWrapper>
        )}
      </View>
    </View>
  )
}

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  imageStyle: {},
  buttonStyle: {},
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  soundBarContainer: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  timerContainer: {
    marginLeft: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  soundBar: {
    width: 5,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
  },
})
