/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Platform, StyleSheet, View} from 'react-native';
import {
  Camera,
  Frame,
  VisionCameraProxy,
  runAtTargetFps,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useFrameProcessor,
} from 'react-native-vision-camera';

const plugin = VisionCameraProxy.initFrameProcessorPlugin('dumb');

const dumb = (frame: Frame) => {
  'worklet';
  if (plugin == null) {
    throw new Error('Failed to load Frame Processor Plugin!');
  }
  return plugin.call(frame);
};

const App = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('front');
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

  if (device == null) {
    return null;
  }

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      format={format}
      isActive={!!device}
      frameProcessor={frameProcessor}
      pixelFormat={Platform.OS === 'ios' ? 'native' : 'yuv'}
    />
  );
};

export default App;
