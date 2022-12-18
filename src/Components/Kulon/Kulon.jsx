import kulon from "../../img/kulon.png";
import "./Kulon.css";

const Kulon = () => {
  return (
    <>
      <div className="col-lg-3 col-sm-1 mx-auto col-2 mx-auto">
        <a href="index.html">
          <img className="kulon" src={kulon} alt="logo" />
        </a>
      </div>
    </>
  );
};

export default Kulon;
