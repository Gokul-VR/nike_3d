import React from 'react'
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
    const { progress } = useProgress();
  return (
    <Html center>
      <div class="w-96 bg-black h-1">
        <div class="bg-white h-1" style={{ width: progress }}></div>
      </div>
      {progress} % loaded
    </Html>
  );
}
