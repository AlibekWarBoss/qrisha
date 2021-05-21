import React, { useState} from "react";
import HomeData from "../../home";

const DashboardComponent = () => {
    const [Home, setHome] = useState(HomeData);

    return (
        <div className="wrapper">
            <div className="hot-deals">
                <h2 className="h2-info">
                    Аренда и покупка квартир 
                </h2>
                <div className="hot-deals-ads">
                    {Home.map((Home) => {
                        return (
                            <div className="home-info">
                                <span>{Home.location}</span>
                                <img src={Home.image} />
                                <span>{Home.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;
