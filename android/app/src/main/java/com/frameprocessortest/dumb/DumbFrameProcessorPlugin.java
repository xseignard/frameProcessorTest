package com.frameprocessortest.dumb;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.mrousavy.camera.frameprocessor.Frame;
import com.mrousavy.camera.frameprocessor.FrameProcessorPlugin;

import java.util.HashMap;
import java.util.Map;

public class DumbFrameProcessorPlugin extends FrameProcessorPlugin {
  DumbFrameProcessorPlugin(@Nullable Map<String, Object> options) {
    super(options);
  }

  @Nullable
  @Override
  public Object callback(@NonNull Frame frame, @Nullable Map<String, Object> arguments) {
    Map<String, Object> result = new HashMap<>();
    result.put("dumb", "result");
    return result;
  }
}