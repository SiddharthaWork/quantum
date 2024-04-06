import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";


const Work = () => {
    const workInfoData = [
         {
            image: PickMeals,
            title: "Machine Learning",
            text: "sidhahdasjdoas hdasjdaskdkas jdhsakdjsadasdasd  sdadsa",
         },
         {
            image: ChooseMeals,
            title: "App Development",
            text: "sidhahdasjdoash dasjdaskdkasjd hsakdjsadasdasd  sdadsa",
         },
         {
            image: DeliveryMeals,
            title: "Web Development",
            text: "sidhahdasj doashdasjdaskd sgadffadasd sds sdsd  kasjdhsakdjsadasdasd  sdadsa",
         },
        


        ];
  return (
    <div id="services" className="work-section-wrapper">
           <div className="work-section-top">
            <p className="primary-subheading">FEATURED SERVICES</p>
            <h1 className="primary-heading">Services we provide</h1>
            <p className="primary-text">
                We provide various services they are :
            </p>
           </div>
           <div className="work-section-bottom">
            {
                workInfoData.map((data) => (
                    <div className="work-section-info" >
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                        </div>
                ) )
            }
           </div>
    </div>
  );
}

export default Work;