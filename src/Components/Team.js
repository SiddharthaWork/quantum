import React from 'react';
import PickMeals from "../Assets/image1.png";
import ChooseMeals from "../Assets/image2.png";
import DeliveryMeals from "../Assets/image3.png";
import image1 from "../Assets/image4.png";
import image2 from "../Assets/image6.png";
import image3 from "../Assets/image7.png";


const Team = () => {
    
    const workInfoData = [
        {
            image: PickMeals,
            title: "Abinash Rana",
            text: "Project Director",
        },
        {
            image: ChooseMeals,
            title: "Atush Maharjan",
            text: "Chief Financial Officer",
        },
        {
            image: DeliveryMeals,
            title: "Bipin Budhathoki",
            text: "Chief Technology Officer",
        },
        {
            image: image1,
            title: "Sabin Sharma",
            text: "Managing Director",
        },
        {
            image: image2,
            title: "Saugat Bhusal",
            text: "Sales and Marketing",
        },
        {
            image: image3,
            title: "Sushan Maharjan",
            text: "Lead Designer",
        },



    ];
    return (
        <div id="team" className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Young Energy</p>
                <h1 className="primary-heading">Meet Our Team</h1>
                <p className="primary-text">
                Young, Vibrant and Passionate
                </p>
            </div>
            <div className="work-section-bottomm">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.id}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" style={{ width: '300px', height: 'auto' }} />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Team;