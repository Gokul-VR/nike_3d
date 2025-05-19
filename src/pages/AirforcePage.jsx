import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AirMag from "../components/AirMag";
import Loader from "../components/Loader";
import Review from "../components/Review";

export default function AirMagPage() {
  // Material options
  const materialOptions = [
    "Sole Material",
    "Insole Material right",
    "MainMaterial",
    "Main Shoe Inside",
    "Laces",
    "Logo left",
    "Logo right",
    "Tag",
    "Flap"
  ];

  // Color palette
  const colors = [
    "#FFFFFF",
    "#F8F5E3",
    "#E1002A",
    "#13795B",
    "#009CDE",
    "#2B2E41",
    "#A6A8AB",
    "#3B2826",
    "#231F20"
  ];

  // State for which material is selected
  const [selectedMaterialIdx, setSelectedMaterialIdx] = useState(0);
  // State for each material's color
  const [materialColors, setMaterialColors] = useState(() => {
    const obj = {};
    materialOptions.forEach(opt => { obj[opt] = colors[0]; });
    return obj;
  });

  // Handlers
  const handleColorSelect = (color) => {
    setMaterialColors(prev => ({
      ...prev,
      [materialOptions[selectedMaterialIdx]]: color
    }));
  };
  const handleColorPickerChange = (e) => {
    handleColorSelect(e.target.value);
  };
  const handlePrev = () => {
    setSelectedMaterialIdx(idx => (idx === 0 ? materialOptions.length - 1 : idx - 1));
  };
  const handleNext = () => {
    setSelectedMaterialIdx(idx => (idx === materialOptions.length - 1 ? 0 : idx + 1));
  };

  return (
    <div className="text-white">
      {/* Material selector UI */}
      <div className="flex items-center justify-center mt-8 mb-4">
        <button onClick={handlePrev} className="mx-4 text-2xl">&#8592;</button>
        <div className="text-black text-lg font-normal bg-white rounded px-4 py-1">
          {materialOptions[selectedMaterialIdx]}{selectedMaterialIdx + 1}/{materialOptions.length}
        </div>
        <button onClick={handleNext} className="mx-4 text-2xl">&#8594;</button>
      </div>
      {/* Color options for selected material */}
      <div className="flex gap-4 justify-center items-center mb-8">
        {colors.map((color) => (
          <div
            key={color}
            className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 ${
              materialColors[materialOptions[selectedMaterialIdx]] === color ? "ring-2 ring-black" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
        {/* Color picker */}
        <div className="relative">
          <input
            type="color"
            value={materialColors[materialOptions[selectedMaterialIdx]]}
            onChange={handleColorPickerChange}
            className="w-10 h-10 rounded-full cursor-pointer border border-gray-300 opacity-0 absolute"
            style={{ left: 0, top: 0 }}
          />
          <div
            className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
            style={{ backgroundColor: materialColors[materialOptions[selectedMaterialIdx]] }}
          />
        </div>
      </div>
      <div className="mx-10 my-5  md:flex gap-8">
        <div className="h-96 md:h-[600px] w-full md:w-[600px] relative ">
          <p className="absolute text-9xl md:text-[200px]  font-outline-2 text-transparent whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Air force
          </p>
          <Canvas className="">
            <OrbitControls
              enableZoom={true}
              autoRotate={true}
              autoRotateSpeed={1.0}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 15, 5]} intensity={2} />
            <Suspense fallback={<Loader />}>
              <AirMag />
            </Suspense>
          </Canvas>
        </div>
        <div className="  md:ml-24 mb-8 md:mt-24">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
          </div>
          <div className="">
            <h4 className="mt-1 font-extralight">Limited Edition</h4>
            <div className="flex justify-between items-center md:items-start md:flex-col ">
              <h2 className="text-5xl md:text-8xl md:-mt-1 font-shoes ">
                Nike Air Force 1 '07
              </h2>
              <p className="text-3xl md:text-5xl -mt-2 md:-mt-4">$76,927</p>
            </div>
          </div>
          <div className=" mt-5">
            <p className="font-extralight">Size</p>
            <div className="flex gap-3 mt-2">
              <div className="border rounded-full w-fit hover:text-black hover:bg-white">
                <p className="py-2 px-3 ">37</p>
              </div>
              <div className="border rounded-full w-fit hover:text-black hover:bg-white">
                <p className="py-2 px-3 ">39</p>
              </div>
              <div className="border rounded-full w-fit hover:text-black hover:bg-white">
                <p className="py-2 px-3 ">40</p>
              </div>
              <div className="border rounded-full w-fit hover:text-black hover:bg-white">
                <p className="py-2 px-3 ">41</p>
              </div>
              <div className="border rounded-full w-fit hover:text-black hover:bg-white">
                <p className="py-2 px-3 ">42</p>
              </div>
            </div>
          </div>
          <button className="bg-white text-black w-full py-3 mt-7 text-xl font-bold hover:bg-black hover:border hover:text-white rounded">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
