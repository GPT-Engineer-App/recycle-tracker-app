#import "TensorFlowLiteModule.h"

@implementation TensorFlowLiteModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(loadModel:(NSString *)modelPath callback:(RCTResponseSenderBlock)callback) {
  NSString *path = [[NSBundle mainBundle] pathForResource:modelPath ofType:nil];
  if (!path) {
    callback(@[@"Model file not found", [NSNull null]]);
    return;
  }

  TfLiteModel *model = TfLiteModelCreateFromFile([path UTF8String]);
  if (!model) {
    callback(@[@"Failed to create model", [NSNull null]]);
    return;
  }

  TfLiteInterpreterOptions *options = TfLiteInterpreterOptionsCreate();
  self.interpreter = TfLiteInterpreterCreate(model, options);
  TfLiteModelDelete(model);
  TfLiteInterpreterOptionsDelete(options);

  if (!self.interpreter) {
    callback(@[@"Failed to create interpreter", [NSNull null]]);
    return;
  }

  callback(@[[NSNull null], @"Model loaded successfully"]);
}

RCT_EXPORT_METHOD(runModel:(NSData *)input callback:(RCTResponseSenderBlock)callback) {
  if (!self.interpreter) {
    callback(@[@"Model is not loaded", [NSNull null]]);
    return;
  }

  TfLiteTensor *inputTensor = TfLiteInterpreterGetInputTensor(self.interpreter, 0);
  TfLiteTensorCopyFromBuffer(inputTensor, [input bytes], [input length]);

  if (TfLiteInterpreterInvoke(self.interpreter) != kTfLiteOk) {
    callback(@[@"Failed to invoke interpreter", [NSNull null]]);
    return;
  }

  TfLiteTensor *outputTensor = TfLiteInterpreterGetOutputTensor(self.interpreter, 0);
  size_t outputSize = TfLiteTensorByteSize(outputTensor);
  NSMutableData *outputData = [NSMutableData dataWithLength:outputSize];
  TfLiteTensorCopyToBuffer(outputTensor, [outputData mutableBytes], outputSize);

  callback(@[[NSNull null], outputData]);
}

@end