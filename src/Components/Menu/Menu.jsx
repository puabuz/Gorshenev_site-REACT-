import "./Menu.css";


const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="col-lg-10 col-md-4 offset-md-2 col-sm-6 col-10 mx-auto contacts_block">
          <a className="home" href="/">
            АФИША
          </a>
        </div>
        {/* <div className="col-lg-10 col-md-4 offset-md-2 col-sm-6 col-10 mx-auto contacts_block">
          <a className="news" href="/news">
            НОВОСТИ
          </a>
        </div> */}
        <div className="col-lg-10 col-md-4 offset-md-2 col-sm-6 col-10 mx-auto contacts_block">
          <a className="contacts" href="/contacts">
            КОНТАКТЫ
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;
