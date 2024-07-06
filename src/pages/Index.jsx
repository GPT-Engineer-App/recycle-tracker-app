import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl">Welcome to Object Detection Counter</h1>
      <p>Start detecting objects and counting them with ease.</p>
      <Button onClick={() => navigate('/detection')}>Start Detection</Button>
    </div>
  );
};

export default Index;