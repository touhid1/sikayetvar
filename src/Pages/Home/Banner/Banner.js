import React from "react";
import bannerImg from "../../../images/banner.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container w-100">
      <div className="row w-100">
        <div className="col-lg-6 col-sm-12  order-1 order-lg-0  banner-header">
          <h1>
            <strong>Çözüm için</strong> <br />
            Şikayetvar
          </h1>
          <div>
            <input type="text" placeholder="Marka, model, ürün ara" />
            <button id="ara">Ara</button>
            <button id="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 order-sm-0 banner-img">
          <img src={bannerImg} className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
