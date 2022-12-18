import frontImage from "../../img/Front_img.png";
import "./MainPhoto.css";

const MainPhoto = () => {
  return (
    <>
      <div className="container">
            <div className="row">
              <div className="text-center">
                <img
                  className="front_img col-lg-4"
                  src={frontImage}
                  alt="Front_img"
                />
              </div>
            </div>
          </div>
    </>
  );
};

export default MainPhoto;
