import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to TensorFlow Lite Native Bridge</h1>
      <p className="mb-4">This application demonstrates the integration of TensorFlow Lite with React Native.</p>
      <Button onClick={() => navigate('/camera')}>Go to Camera</Button>
    </div>
  );
};

export default Index;