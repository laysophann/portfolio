import Layout from '../components/Layout';
import NightSkyBackground from '../components/NightSkyBackground';

function HomePage() {
  return (
    <Layout>
      <NightSkyBackground />
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p>This is a simple and beautiful portfolio website showcasing my skills.</p>
    </Layout>
  );
}

export default HomePage;
