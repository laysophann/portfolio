import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
        <p className="text-lg text-gray-400 mb-10">
          Want to get in touch? Feel free to reach out to me via email or connect with me
          on social media. I'm always excited to collaborate on new projects and
          opportunities!
        </p>
        <div>
          <a
            href="mailto:email@example.com"
            className="inline-block bg-lime-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold text-lg transition duration-300 hover:bg-lime-600"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-block text-lime-500 hover:text-lime-600 transition duration-300"
          >
            Connect on LinkedIn
          </a>
          {/* Add more social media links or contact methods as needed */}
        </div>
      </div>
    </section>
  );
}

export default Contact;