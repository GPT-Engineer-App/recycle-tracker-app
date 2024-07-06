import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Our Application</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This is the main entry point of the application. Use the navigation to explore more features.</p>
          <Button onClick={() => navigate('/features')}>Explore Features</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;