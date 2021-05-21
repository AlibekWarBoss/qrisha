import React, { useState } from "react";
import { FaFireAlt } from "react-icons/fa";
import HomeData from "../../home";

const HomeComponent = () => {
    const [Home, setHome] = useState(HomeData);

    return (
        <div className="hot-deals">
            <h2 className="h2-info">
                Дома <FaFireAlt />
            </h2>
            <div className="hot-deals-ads">
                {Home.map((Home) => {
                    return (
                        <div className="hot-deal-info">
                            <span>{Home.location}</span>
                            <img src={Home.image} />
                            <span>{Home.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeComponent;
