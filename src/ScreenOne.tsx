/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Platform, StyleSheet, View} from 'react-native';
import {
  Camera,
  runAtTargetFps,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {dumb} from './dumb';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ScreenProps = StackScreenProps<RootStackParamList, 'ScreenOne'>;

export const ScreenOne = ({navigation}: ScreenProps) => {
  const {bottom} = useSafeAreaInsets();
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    {videoResolution: {width: 480, height: 640}},
  ]);

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    runAtTargetFps(10, () => {
      'worklet';
      const result = dumb(frame);
      console.log('result', result);
    });
  }, []);

  if (!hasPermission) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Request Permission" onPress={requestPermission} />
      </View>
    );
  }

  const onPress = () => {
    navigation.navigate('ScreenTwo', {nextScreen: 'ScreenThree'});
  };

  if (device == null) {
    return null;
  }

  return (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        format={format}
        isActive={!!device}
        frameProcessor={frameProcessor}
        pixelFormat={Platform.OS === 'ios' ? 'native' : 'yuv'}
        onError={console.log}
      />
      <View
        style={{
          position: 'absolute',
          bottom,
          left: 0,
          right: 0,
        }}>
        <Button title="Go to ScreenTwo" onPress={onPress} />
      </View>
    </>
  );
};
