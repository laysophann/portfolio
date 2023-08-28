function Section({ title, content }) {
    return (
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{content}</p>
      </section>
    );
  }
  
  export default Section;
  