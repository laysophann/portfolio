import Layout from "../components/Layout";
import NightSkyBackground from "../components/NightSkyBackground";

function AboutPage() {
  return (
    <Layout>
      <div id="about" className=" bg-red-500 z-[1] top-9">
        <h2>About Me</h2>
        <p>
          I am a web developer passionate about creating interactive and
          engaging web experiences.
        </p>
      </div>
    </Layout>
  );
}

export default AboutPage;
