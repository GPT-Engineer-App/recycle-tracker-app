import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Our Application</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            This is the main entry point of the application. Use the navigation
            buttons below to explore different features.
          </p>
        </CardContent>
      </Card>
      <div className="flex space-x-4">
        <Button onClick={() => navigate("/feature1")}>Feature 1</Button>
        <Button onClick={() => navigate("/feature2")}>Feature 2</Button>
      </div>
    </div>
  );
};

export default Index;