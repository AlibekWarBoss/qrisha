import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import cityData from "../../city-data";
import CarsComponent from "../Cars/CarsComponent";

const TabComponent = () => {
    const [cities, setCities] = useState(cityData);

    return (
        <Tabs>
            <TabList>
                <Tab>Квартиры</Tab>
                <Tab>Частные дома</Tab>
            </TabList>

            <TabPanel>
                <div className="tabpanel">
                    <CarsComponent cities={cities} setCities={setCities} />
                </div>
            </TabPanel>
            <TabPanel>
                <div className="tabpanel">Some dea</div>
            </TabPanel>
            <TabPanel>
                <div className="tabpanel">MOTO</div>
            </TabPanel>
            <TabPanel>
                <div className="tabpanel">WATER TRANSPORT</div>
            </TabPanel>
        </Tabs>
    );
};

export default TabComponent;
