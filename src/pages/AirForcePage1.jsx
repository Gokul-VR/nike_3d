import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AirMag from "../components/AirForce1";
import Loader from "../components/Loader";

export default function AirForcePage1() {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const colors = [
    "#FFFFFF", // White
    "#9F1919", // Red
    "#808080", // Gray
  ];

  const handleColorPickerChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="text-white">
      <div className="grid grid-cols-12 gap-8 p-5">
        {/* 3D Model Section */}
        <div className="col-span-12 md:col-span-7 h-[400px] md:h-[600px] w-full relative">
          <p className="absolute text-9xl md:text-[200px] font-outline-2 text-transparent whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Air force
          </p>
          <Canvas>
            <OrbitControls
              enableZoom={true}
              autoRotate={true}
              autoRotateSpeed={1.0}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 15, 5]} intensity={2} />
            <Suspense fallback={<Loader />}>
              <AirMag selectedColor={selectedColor} />
            </Suspense>
          </Canvas>
        </div>

        {/* Content Section */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
          <div>
            <h4 className="mt-1 font-extralight">Limited Edition</h4>
            <div className="flex justify-between items-center">
              <h2 className="text-5xl md:text-7xl font-shoes">
                Nike Air Force 1 '07
              </h2>
            </div>
          </div>

          <div className="mt-5">
            <p className="font-extralight">Color</p>
            <div className="flex gap-3 mt-2 items-center">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`w-10 h-10 rounded-full cursor-pointer transition-transform hover:scale-110 border border-gray-400 ${
                    selectedColor === color ? "ring-2 ring-white" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
              <div className="relative">
                <input
                  type="color"
                  value={selectedColor}
                  onChange={handleColorPickerChange}
                  className="w-10 h-10 rounded-full cursor-pointer border border-gray-400 opacity-0 absolute"
                />
                <div
                  className="w-10 h-10 rounded-full border border-gray-400 cursor-pointer"
                  style={{ backgroundColor: selectedColor }}
                />
              </div>
            </div>
          </div>
          <button className="bg-white text-black w-full py-3 mt-7 text-xl font-bold hover:bg-black hover:border hover:text-white rounded-lg">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
