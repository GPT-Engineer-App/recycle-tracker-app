import React from 'react';
import CameraView from '@/components/CameraView';

const Camera = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-4">Camera View</h1>
      <CameraView />
    </div>
  );
};

export default Camera;