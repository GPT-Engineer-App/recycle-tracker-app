import React from "react";
import CameraView from "@/components/CameraView";
import ResultsDisplay from "@/components/ResultsDisplay";
import { useDispatch, useSelector } from "react-redux";
import { incrementItem } from "@/store/slices/detectionSlice";
import { Button } from "@/components/ui/button";

const Detection = () => {
  const dispatch = useDispatch();
  const detection = useSelector((state) => state.detection);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <CameraView />
      <div className="flex space-x-4">
        <Button onClick={() => dispatch(incrementItem("aluminumCans"))}>Capture</Button>
        <Button onClick={() => dispatch(incrementItem("hdpe2Bottles"))}>Capture HDPE2</Button>
      </div>
      <ResultsDisplay detection={detection} />
    </div>
  );
};

export default Detection;