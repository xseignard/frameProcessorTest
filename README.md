## How to run

```bash
yarn
yarn android
yarn start
```

## Crashes with

```
FATAL EXCEPTION: mrousavy/VisionCamera.video

com.facebook.jni.CppException: Compiling JS failed: 1:1:invalid empty parentheses '( )' Buffer size 3 starts with: 280a29

FATAL EXCEPTION: mrousavy/VisionCamera.video
Process: com.frameprocessortest, PID: 10642
com.facebook.jni.CppException: Compiling JS failed: 1:1:invalid empty parentheses '( )' Buffer size 3 starts with: 280a29
	at com.mrousavy.camera.frameprocessor.FrameProcessor.call(Native Method)
	at com.mrousavy.camera.core.VideoPipeline._init_$lambda$0(VideoPipeline.kt:111)
	at com.mrousavy.camera.core.VideoPipeline.$r8$lambda$EMriwS_FKhtjTFtppM84Z5V8tiI(Unknown Source:0)
	at com.mrousavy.camera.core.VideoPipeline$$ExternalSyntheticLambda0.onImageAvailable(Unknown Source:2)
	at android.media.ImageReader$1.run(ImageReader.java:916)
	at android.os.Handler.handleCallback(Handler.java:942)
	at android.os.Handler.dispatchMessage(Handler.java:99)
	at android.os.Looper.loopOnce(Looper.java:201)
	at android.os.Looper.loop(Looper.java:288)
	at android.os.HandlerThread.run(HandlerThread.java:67)
```
