import logoImg from "../../img/logogo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <>
      <div className="col-lg-6 col-sm-12">
                <a href="index.html">
                  <img
                    className="logo_png"
                    src={logoImg}
                    alt="Gorshenev-project"
                  />
                </a>
              </div>
    </>
  );
};

export default Logo;
