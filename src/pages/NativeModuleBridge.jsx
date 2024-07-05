import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const NativeModuleBridge = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">Native Module Bridge</h1>
      <p>Investigate the feasibility of using a native module bridge for TensorFlow compatibility with React Native version 0.71.19.</p>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  );
};

export default NativeModuleBridge;