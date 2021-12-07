import React from "react";
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid} from '@mui/material';
import Lottie from "react-lottie";
import animationData from "../../redux/actions/EmailLottie/email.json";
import Map from '../components/Map';
import "../css/support.css";

const ContactUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div>
      <div>
      <div className="Home-two">
        <div className="Home-three-one">
          <div className="Textinfor">
            <strong>1 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</strong>
            <p><span className='collig'>Phone:</span>+91 976885083</p>
            <p><span className='collig'>Email:</span>cookaholic@gmail.com</p>
            <p><span className='collig'>Fax:</span>+91 9768850839</p>
          </div>  
          <p className="Home-phrase animate__animated animate__flip">
            {" "}
            Want to Know More?? Drop Us a Mail   
          </p>
          <div className="container__item">
              <form className="form">
                <input type="email" className="form__field" placeholder="Your E-Mail Address" />
                <button type="button" className="btn btn--primary btn--inside uppercase">Send</button>
              </form>
            </div>
        </div>
        {/* right div  */}
        <div className="Home-three-two">
          <Lottie className="Home-lottie" options={defaultOptions} />
        </div>
      </div>
    </div>
    <div className="Map">
            <Map 
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyA7BNHLdPas_f5Z9P8w8exNjjJwXTXVl7M'}&callback=initMap`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `50vh`, margin: `auto`, border: '2px solid black' }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
    </div>
    </div>
  );
};

export default ContactUs;