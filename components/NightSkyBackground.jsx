import { useEffect, useRef } from "react";
import * as THREE from "three";

function NightSkyBackground() {
  const sceneRef = useRef(null);
  const animationFrameIDRef = useRef(null);
  const scene = useRef(null);

  useEffect(() => {
    scene.current = new THREE.Scene();
    scene.current.background = new THREE.Color(0x00000f);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 4,
    });
    const starsVertices = [];

    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.current.add(stars);

    camera.position.z = 5;

    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      scene.current.rotation.x += 0.001;
      scene.current.rotation.y += 0.001;

      renderer.render(scene.current, camera);
      animationFrameIDRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleWindowResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      cancelAnimationFrame(animationFrameIDRef.current);
      scene.current.remove(stars);
      renderer.dispose();
    };
  }, []);

  return <div className="night-sky-background" ref={sceneRef} />;
}

export default NightSkyBackground;
