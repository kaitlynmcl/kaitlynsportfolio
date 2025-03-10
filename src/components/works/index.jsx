import "./index.scss";
import merakeyLogo from "../../assets/merakey-logo.svg";
import talleyLogo from "../../assets/talley-logo.svg";
import perpayLogo from "../../assets/perpay-logo.svg";
import phlLogo from "../../assets/phl-logo.svg";

const Works = () => {
  return (
    <section className="works__section">
      <div className="works__content">
        <div className="works__header">
          <h3 className="works__title">works</h3>
        </div>

        <div className="works__container">
          <div className="works__work">
            <a href="https://perpay.com/">
              <img src={perpayLogo} className="works__logos" />
            </a>
          </div>

          <div className="works__work">
            <a href="https://www.merakey.org/">
              <img src={merakeyLogo} className="works__logos" />
            </a>
          </div>

          <div className="works__work">
            <a href="https://talley.com/">
              <img src={talleyLogo} className="works__logos" />
            </a>
          </div>

          <div className="works__work">
            <a
              href="https://www.philamarketplace.com/"
              className="works__logos"
            >
              <img src={phlLogo} />
            </a>
          </div>
        </div>
        <p className="works__pg">
          These sites represent the type of work I've developed professionally
          over the past five years. {""}
          <br className="works__spacing" />
          Powered by backend frameworks such as Craft CMS and Django Rest
          Framework, they integrate frontend technologies including Angular,
          Contentful, GraphQL, React, Sass, and Twig.
        </p>
      </div>
    </section>
  );
};

export default Works;
