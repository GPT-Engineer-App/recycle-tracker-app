#import <React/RCTBridgeModule.h>
#import <TensorFlowLiteC/TensorFlowLiteC.h>

@interface TensorFlowLiteModule : NSObject <RCTBridgeModule>
@property(nonatomic, assign) TfLiteInterpreter *interpreter;
@end