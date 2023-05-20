import { forwardRef, useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ShareAble/ToyCard";
import { AuthContext } from "../../AuthProvider";

const ActionFigures = () => {
  const { newToyAdded } = useContext(AuthContext);
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, []);

  // Something Like a shop section but with sub categories
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("DC");
  useEffect(() => {
    fetch(`http://localhost:5000/actionFigures?subCategory=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category, newToyAdded]);

  return (
      <div className="p-12 text-center" >
        <h3 className="heading" id="actionFigures">
          Explore our awesome <span className="heading2">action figures</span>
        </h3>
        <Tabs className={"shadow-xl p-6 rounded-xl"}>
          <TabList>
            {subCategories.map((ctg) => (
              <Tab onClick={() => setCategory(ctg.category)} key={ctg._id}>
                {ctg.category}
              </Tab>
            ))}
          </TabList>

          {/* Sub Category of Action Figures */}
          {/* Marvel */}
          <TabPanel>
            <h2 className="subCategoryTitle">World Class MCU Super Heros</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {toys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          </TabPanel>
          {/* DC */}
          <TabPanel>
            <h2 className="subCategoryTitle">World Class DCU Super Heros</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {toys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          </TabPanel>
          {/* The Boys */}
          <TabPanel>
            <h2 className="subCategoryTitle">
              World Class Conflicted Super Humans
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {toys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          </TabPanel>
          {/* Transformers */}
          <TabPanel>
            <h2 className="subCategoryTitle">Transformers Earth Saviors</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {toys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          </TabPanel>
          {/* Indian */}
          <TabPanel>
            <h2 className="subCategoryTitle">Indian Desi Super Heros</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {toys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
  );
};

export default ActionFigures;
