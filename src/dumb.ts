import {Frame, VisionCameraProxy} from 'react-native-vision-camera';

const plugin = VisionCameraProxy.initFrameProcessorPlugin('dumb');

export const dumb = (frame: Frame) => {
  'worklet';
  if (plugin == null) {
    throw new Error('Failed to load Frame Processor Plugin!');
  }
  return plugin.call(frame);
};
