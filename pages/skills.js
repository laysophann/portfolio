import Layout from '../components/Layout';
import NightSkyBackground from '../components/NightSkyBackground';
import Section from '../components/section';

function SkillsPage() {
  return (
    <Layout>
      <NightSkyBackground />
      <Section
        title="Skills"
        content="I have experience in front-end development, including HTML, CSS, and JavaScript. I also have expertise in using React and Next.js for building modern web applications."
      />
    </Layout>
  );
}

export default SkillsPage;
