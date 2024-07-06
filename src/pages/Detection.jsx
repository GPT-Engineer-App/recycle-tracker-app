import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const fetchDetectionResults = async () => {
  // Mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        aluminumCans: 5,
        hdpe2Bottles: 3,
        pet1Bottles: 7,
        glassBottles: 2,
        milkCartons: 4,
        totalItems: 21,
      });
    }, 1000);
  });
};

const Detection = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['detectionResults'],
    queryFn: fetchDetectionResults,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading detection results</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Detection Results</h1>
      <Card>
        <CardHeader>
          <CardTitle>Detected Items</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Aluminum Cans: {data.aluminumCans}</p>
          <p>HDPE2 Bottles: {data.hdpe2Bottles}</p>
          <p>PET1 Bottles: {data.pet1Bottles}</p>
          <p>Glass Bottles: {data.glassBottles}</p>
          <p>Milk Cartons: {data.milkCartons}</p>
          <p>Total Items: {data.totalItems}</p>
        </CardContent>
      </Card>
      <Button onClick={() => toast('Detection started!')}>Start New Detection</Button>
    </div>
  );
};

export default Detection;