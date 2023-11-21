import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const EventTab = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <Tabs>
        <TabList>
          <Tab>
            {" "}
            <h2 className="lg:text-2xl text-xs font-semi-bold text-red-500">
              All
            </h2>
          </Tab>

          <Tab>
            {" "}
            <h2 className="lg:text-2xl text-xs font-semi-bold text-red-500">
              2023
            </h2>
          </Tab>
          <Tab>
            {" "}
            <h2 className="lg:text-2xl text-xs font-semi-bold text-red-500">
              2022
            </h2>
          </Tab>
          <Tab>
            {" "}
            <h2 className="lg:text-2xl text-xs font-semi-bold text-red-500">
              2021
            </h2>
          </Tab>
          <Tab>
            {" "}
            <h2 className="lg:text-2xl text-xs font-semi-bold text-red-500">
              2020
            </h2>
          </Tab>
          <Tab>
            {" "}
            <h2 className="lg:text-2xl text-xs font-semi-bold text-red-500">
              2019
            </h2>
          </Tab>
          <Tab>
            {" "}
            <h2 className="lg:text-2xl text-xs font-semi-bold text-red-500">
              2018
            </h2>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>All</h2>
        </TabPanel>
        <TabPanel>
          <h2>2023</h2>
        </TabPanel>
        <TabPanel>
          <h2>2022</h2>
        </TabPanel>
        <TabPanel>
          <h2>2021</h2>
        </TabPanel>
        <TabPanel>
          <h2>2020</h2>
        </TabPanel>
        <TabPanel>
          <h2>2019</h2>
        </TabPanel>
        <TabPanel>
          <h2>2018</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default EventTab;
