import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">Welcome to the TensorFlow Compatibility Investigation</h1>
      <p>Explore different approaches to integrate TensorFlow with React Native.</p>
      <Button onClick={() => navigate('/native-module-bridge')}>Explore Native Module Bridge</Button>
    </div>
  );
};

export default Index;