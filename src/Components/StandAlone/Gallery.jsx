import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Marvel Studios Action Figures</Tab>
      <Tab>DC Studios Action Figures</Tab>
      <Tab>The Boys Action Figures</Tab>
      <Tab>Transformers Action Figures</Tab>
      <Tab>Indian Action Figures</Tab>
    </TabList>

    <TabPanel>
      <h2>World Class MCU Super Heros</h2>
    </TabPanel>
    <TabPanel>
      <h2>World Class DCU Super Heros</h2>
    </TabPanel>
    <TabPanel>
      <h2>World Class Conflicted Super Humans</h2>
    </TabPanel>
    <TabPanel>
      <h2>Transformers Earth Saviors</h2>
    </TabPanel>
    <TabPanel>
      <h2>Desi Indian Super Heros</h2>
    </TabPanel>
  </Tabs>
);