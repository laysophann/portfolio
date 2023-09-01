import React from "react";
import contacts from "../utils/ContactData";

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
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1 cursor-pointer hover:bg-slate-800"
            >
              <img
                src={`/icons/${contact.icon}`}
                alt={`${contact.title} Icon`}
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
