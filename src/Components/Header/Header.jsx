import Kulon from "../Kulon/Kulon";
import Logo from "../Logo/Logo";
import SocialNetworks from "../Social_networks/Social_networks";
import Menu from "../Menu/Menu";
import "./Header.css"

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Kulon />
          <Logo />
          <div className="col-lg-3 link_row">
            <SocialNetworks />
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
