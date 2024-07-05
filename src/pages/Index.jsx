import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">Welcome to the TensorFlow Compatibility Investigation</h1>
      <p>Choose an approach to investigate TensorFlow compatibility with React Native:</p>
      <div className="space-x-2">
        <Button variant="outline" onClick={() => handleNavigate('/webassembly-approach')}>WebAssembly Approach</Button>
        <Button variant="outline" onClick={() => handleNavigate('/api-approach')}>API-Based Approach</Button>
      </div>
    </div>
  );
};

export default Index;