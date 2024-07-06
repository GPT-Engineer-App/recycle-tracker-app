package com.yourapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import org.tensorflow.lite.Interpreter;

import java.nio.ByteBuffer;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.File;

public class TensorFlowLiteModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private Interpreter tflite;

    TensorFlowLiteModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "TensorFlowLite";
    }

    @ReactMethod
    public void loadModel(String modelPath, Callback callback) {
        try {
            File file = new File(reactContext.getFilesDir(), modelPath);
            FileInputStream inputStream = new FileInputStream(file);
            FileChannel fileChannel = inputStream.getChannel();
            MappedByteBuffer mappedByteBuffer = fileChannel.map(FileChannel.MapMode.READ_ONLY, 0, file.length());
            tflite = new Interpreter(mappedByteBuffer);
            callback.invoke(null, "Model loaded successfully");
        } catch (IOException e) {
            callback.invoke(e.getMessage(), null);
        }
    }

    @ReactMethod
    public void runModel(ByteBuffer input, Callback callback) {
        if (tflite == null) {
            callback.invoke("Model is not loaded", null);
            return;
        }
        ByteBuffer output = ByteBuffer.allocateDirect(4 * 4); // Adjust size as needed
        tflite.run(input, output);
        callback.invoke(null, output);
    }
}