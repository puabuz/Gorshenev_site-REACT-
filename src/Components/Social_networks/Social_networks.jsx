import instPng from "../../icon/1_inst.png";
import vkPng from "../../icon/1_vk.png";
import youtubePng from "../../icon/1_youtube.png";
import "./Social_networks.css";

const SocialNetworks = () => {
  return (
    <>
    <div className="margin_bottom"></div>
          <div className="container">
          <div className="row">
        <div className="row wow animate__animated animate__zoomIn">
          <div className="col-md-4 col-sm-4 col-4">
            <a
              className="inst_link"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/gorshenev_project"
            >
              <img className="inst" src={instPng} alt="inst" />
            </a>
          </div>
          <div className="col-md-4 col-sm-4 col-4">
            <a
              className="vk_link"
              target="_blank"
              rel="noreferrer"
              href="https://vk.com/gorshenev_project"
            >
              <img className="vk" src={vkPng} alt="vk" />
            </a>
          </div>
          <div className="col-md-4 col-sm-4 col-4">
            <a
              className="youtube_link"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCa2z_fx27Kugy0bqTxYBCrg"
            >
              <img className="youtube" src={youtubePng} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
          </div>
      
    </>
  );
};

export default SocialNetworks;
