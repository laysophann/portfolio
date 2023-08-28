import Layout from '../components/Layout';
import NightSkyBackground from '../components/NightSkyBackground';

function AboutPage() {
  return (
    <Layout>
      <NightSkyBackground />
      <div className="content-container">
        <h2>About Me</h2>
        <p>I am a web developer passionate about creating interactive and engaging web experiences.</p>
        {/* Additional content */}
      </div>
    </Layout>
  );
}

export default AboutPage;
