import headshot from "../../assets/kaitlyn.png";
import "./index.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__header">
          <h3 className="contact__title">contact</h3>
        </div>

        <div className="contact__wrapper">
          <div className="contact__section">
            <img src={headshot} className="contact__image" />
          </div>

          <div className="contact__pg">
            <p>
              Interested in working with me? <br />
              <a
                href="mailto:kaitlynmclaughlin25@gmail.com"
                className="contact__link"
              >
                <span className="contact__link-text">Get in touch.</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
