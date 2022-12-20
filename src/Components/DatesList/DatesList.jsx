import vkPng from "../../icon/1_vk.png";
import './DatesList.css';
import dates from '../../dateList.json'

const DatesList = () => {
 
  
  return (
    <>
      {dates.map((item, idx) => {
        let background = 'razmer';
        if(idx % 2 === 0){
            background = 'odd';
        }
        return (
          <div key={idx}>
            <div className="container">
              <div className={background}>
                <div className="row wow animate__animated animate__fadeInRight">
                  <div className="col-lg-2 my-auto col-md-3 col-sm-4 mx-auto  col-6 strong data">
                    {item.date} {item.mounth}
                  </div>
                  <div className="col-lg-2 my-auto mx-auto col-md-3 mx-auto col-sm-4 mx-auto  col-8 text-center strong city">
                    {item.city}
                  </div>
                  <div className="col-lg-2 my-auto mx-auto col-md-3 mx-auto col-sm-12 mx-auto col-8 text-center text-center strong place">
                    {item.place}
                  </div>
                  <div className="col-lg-2 my-auto mx-auto col-md-12 mx-auto col-sm-12 mx-auto col-12 mx-auto strong tickets">
                    <a className="tickets_link" href={item.tickets}>
                      БИЛЕТЫ
                    </a>
                  </div>
                  <div className="col-lg-2 my-auto col-md-12 mx-auto col-sm-12 col-4 text-center link_social">
                    <a className="meeting" href={item.meeteng}>
                      <img className="meeting_link" src={vkPng} alt="(VK)" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DatesList;
