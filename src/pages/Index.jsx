import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Object Detection Counter</h1>
      <p className="text-lg">Start detecting objects and counting them effortlessly.</p>
      <Button onClick={() => navigate("/detection")}>Start Detection</Button>
    </div>
  );
};

export default Index;