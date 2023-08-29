"use client";
import NightSkyBackground from "../components/NightSkyBackground";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <NightSkyBackground />
      </div>
      <div className="text-white">
        <Navigation />
      </div>
    </div>
  );
}
