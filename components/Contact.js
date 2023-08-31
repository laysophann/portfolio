import React from "react";

const skillsData = [
  {
    title: "Email",
    icon: "email.png",
    link: "https://mail.google.com/mail/u/1/#inbox",
  },
  {
    title: "Linkedin",
    icon: "linkedin.png",
    link: "https://www.linkedin.com/in/lay-sophann-7750b8205/",
  },
  {
    title: "Twitter",
    icon: "twitter.png",
    link: "https://twitter.com/sophannlay",
  },
  {
    title: "Instagram",
    icon: "instagram.png",
    link: "https://www.instagram.com/laysophann/",
  },
  {
    title: "Facebook",
    icon: "facebook.png",
    link: "https://www.facebook.com/sophann.lay.967",
  },
  {
    title: "Telegram",
    icon: "telegram.png",
    link: "https://web.telegram.org/k/",
  },
];

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center font-mono">
        <h2 className="text-3xl font-bold text-white mb-6">Connect Me ()</h2>
        <p className="text-lg text-gray-400 mb-10 mx-3">
          Want to get in touch? Feel free to reach out to me via email or
          connect with me on social media. I am always excited to collaborate on
          new projects and opportunities!
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-4">
          {skillsData.map((skill) => (
            <a
              key={skill.title}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1 cursor-pointer hover:bg-slate-800"
            >
              <img
                src={`/icons/${skill.icon}`}
                alt={`${skill.title} Icon`}
                className="h-12"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
