import VisionCamera

@objc(DumbFrameProcessorPlugin)
public class DumbFrameProcessorPlugin: FrameProcessorPlugin {
  public override init(options: [AnyHashable: Any]! = [:]) {
    super.init(options: options)
  }

  public override func callback(_ frame: Frame, withArguments arguments: [AnyHashable: Any]?) -> Any? {
    return [
      "dumb": "result"
    ]
  }
}
