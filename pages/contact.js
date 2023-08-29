import Layout from '../components/Layout';
import NightSkyBackground from '../components/NightSkyBackground';
import Section from '../components/section';

function ContactPage() {
  return (
    <Layout>
      <Section
        id="contact"
        title="Contact Me"
        content="Feel free to get in touch with me! You can reach me at myemail@example.com or connect with me on LinkedIn."
      />
    </Layout>
  );
}

export default ContactPage;
