import "./index.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__header">
          <h3 className="about__title">about</h3>
        </div>
        <div className="about__text">
          My name is Kaitlyn McLaughlin, and I'm a software engineer based in
          Philadelphia.
          <br />
          <br />
          <div>
            I enjoy building applications using modern technologies such as
            React, Python and Django Rest Framework. I’m passionate about
            building clean, efficient software solutions that are easy to
            maintain and scale. Throughout my career I've architected and
            launched new platforms, automated server pipelines, and contributed
            to the creation of atomic design systems for both large and small
            scale operations. My focus for the future is on continuous learning.
          </div>
          <br />
          <div>
            My background in creative writing lends an interesting perspective
            to coding; I still spend my time writing, but now I write in more
            than one language. In my free time you'll find me reading, walking,
            or chasing after my nieces. You can read my published work in
            <a
              href="https://www.clmp.org/readers/publisher/adanna-literary-journal/"
              className="about__link"
              target="_blank"
            >
              {" "}
              Adanna Literary Journal
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
