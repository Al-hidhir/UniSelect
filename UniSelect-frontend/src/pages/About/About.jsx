// src/pages/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <main>
        <section className="about-section">
          <h2>About Our UniSelect</h2>
          <p>
            Welcome to the University Selector, your one-stop platform for
            exploring the diverse range of universities in Tanzania. Our
            comprehensive system provides students with the ability to search
            and discover the perfect institution that aligns with their academic
            interests and career aspirations.
          </p>
          <p>
            With a vast database of universities and their available courses,
            our system empowers you to make informed decisions about your higher
            education journey. Whether you're searching for a specific program
            or simply exploring your options, our user-friendly interface makes
            the process seamless and efficient.
          </p>
          <p>
            Our goal is to simplify the university selection process and help
            you find the institution that best suits your needs. Start your
            journey with us today and unlock a world of educational
            opportunities in Tanzania.
          </p>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <p>
            Using our University Selector is easy. Simply follow these steps:
          </p>
          <ol>
            <li>
              Enter the desired university or course you're interested in.
            </li>
            <li>
              Our system will search our comprehensive database and display the
              matching universities and their available programs.
            </li>
            <li>
              Explore the details of each university, including program
              offerings, admission requirements, and campus information.
            </li>
            <li>
              Compare your options and make an informed decision about the
              university that best fits your educational goals.
            </li>
          </ol>
        </section>

        <section className="about-section">
          <h2>Explore Tanzanian Universities</h2>
          <p>
            Our University Selector covers a wide range of higher education
            institutions across Tanzania, including both public and private
            universities. From prestigious research universities to specialized
            institutes, we have you covered. Discover the rich diversity of
            educational opportunities available in Tanzania and find the perfect
            fit for your academic and personal aspirations.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 UniSelect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
