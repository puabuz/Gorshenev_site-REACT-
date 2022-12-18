import kulon from "../../img/kulon.png";
import "./Contacts.css";

const Contacts = () => {
  return (
    <>
      <div className="container contact_box">
        <div className="row">
          <div className="col-lg-6 mx-auto padding_contact">
            <div className="col-lg-3 mx-auto col-sm-1 mx-auto col-2 mx-auto">
              <div className="img_contacts">
                <img className="img__contacts" src={kulon} alt="###" />
              </div>
            </div>
            Организация региональных концертов:
            <br />
            <a className="phone" href="tel:+79112210242">
              +7 911 221-02-42
            </a>
            <br />
            <a href="mailto:angry_music@inbox.ru">angry_music@inbox.ru</a>
          </div>
          <div className="col-lg-6 mx-auto padding_contact">
            <div className="col-lg-3 mx-auto col-sm-1 mx-auto col-2 mx-auto">
              <div className="img_contacts">
                <img className="img__contacts" src={kulon} alt="###" />
              </div>
            </div>
            Организация концертов, спец. проекты:
            <br />
            <a className="phone" href="tel:+79111006767">
              +7 911 100 67 67
            </a>
            <br />
            <a href="mailto:panker1814@gmail.com">panker1814@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
