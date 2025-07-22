
import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Bachamgari Mounika</h1>
          <p className="text-sm mt-2 md:mt-0">Aspiring Frontend Developer | React | JavaScript</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Hello, I'm Mounika 👋</h2>
        <p className="text-xl">I build responsive, user-friendly web applications and love solving real-world problems using technology.</p>
        <div className="mt-6 space-x-4">
          <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">View My Work</a>
          <a href="/MOUNIKA_REDDY_RESUME.pdf" download className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100">Download Resume</a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 py-12" id="about">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p>
          I'm currently pursuing B.Tech in Computer Science with a focus on Data Science. I'm passionate about frontend development and continuously learning new technologies like React and TypeScript. I enjoy turning design ideas into live, scalable applications.
        </p>
      </section>

      {/* Projects */}
      <section className="bg-gray-100 py-12 px-4" id="projects">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Job Market Insights</h4>
              <p>Analyzed job data using NLP and LDA from LinkedIn and Naukri, visualized key skills trends with Python.</p>
              <span className="text-sm text-gray-500">Python, Pandas, Matplotlib, NLP</span>
              <div className="mt-2 space-x-2">
                <a href="#" className="text-blue-600 text-sm underline">Live Demo</a>
                <a href="#" className="text-blue-600 text-sm underline">GitHub</a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Stock Price Prediction</h4>
              <p>Used LSTM and ANN models to predict stock trends with 85% accuracy.</p>
              <span className="text-sm text-gray-500">TensorFlow, Keras, Python</span>
              <div className="mt-2 space-x-2">
                <a href="#" className="text-blue-600 text-sm underline">Live Demo</a>
                <a href="#" className="text-blue-600 text-sm underline">GitHub</a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Oral Cancer Chatbot</h4>
              <p>Built a chatbot that interacts with patients and predicts cancer stages using deep learning.</p>
              <span className="text-sm text-gray-500">Flask, CNN, Python</span>
              <div className="mt-2 space-x-2">
                <a href="#" className="text-blue-600 text-sm underline">Live Demo</a>
                <a href="#" className="text-blue-600 text-sm underline">GitHub</a>
              </div>
            </div>
            {/* Project 4 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>
              <p>Designed and developed a personal portfolio site using HTML, CSS, and Bootstrap.</p>
              <span className="text-sm text-gray-500">HTML, CSS, Bootstrap</span>
              <div className="mt-2 space-x-2">
                <a href="#" className="text-blue-600 text-sm underline">Live Demo</a>
                <a href="#" className="text-blue-600 text-sm underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-4 py-12" id="skills">
        <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>Python</li>
          <li>Java</li>
          <li>SQL</li>
          <li>Git & GitHub</li>
          <li>TypeScript (Learning)</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-blue-50 py-12 px-4 text-center" id="contact">
        <h3 className="text-2xl font-bold mb-2">Contact Me</h3>
        <p>📧 bachanagarimounika@gmail.com</p>
        <p>📱 +91 9063673951</p>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="max-w-md mx-auto mt-6 text-left"
        >
          <input type="text" name="name" placeholder="Your Name" required className="block w-full border p-2 mb-2 rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="block w-full border p-2 mb-2 rounded" />
          <textarea name="message" placeholder="Your Message" required className="block w-full border p-2 mb-2 rounded" rows="4"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500">
        © 2025 Bachamgari Mounika. All rights reserved.
      </footer>
    </div>
  );
}
