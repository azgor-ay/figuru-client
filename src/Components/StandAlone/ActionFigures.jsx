import { forwardRef, useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ShareAble/ToyCard";
import { AuthContext } from "../../AuthProvider";

const ActionFigures = () => {
  const { newToyAdded } = useContext(AuthContext);
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    fetch(`https://figuru.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, []);

  // Something Like a shop section but with sub categories
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("DC");
  useEffect(() => {
    fetch(`https://figuru.vercel.app/actionFigures?subCategory=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category, newToyAdded]);

  return (
    <div>
      {category && (
        <div className=" px-3 mb-6 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-6xl " id="actionFigures">
            Explore our awesome <span className="heading2">action figures</span>
          </h3>
          <Tabs className={"lg:shadow-xl py-3 lg:p-6 rounded-xl"}>
            <TabList>
              {subCategories.map((ctg) => (
                <Tab 

                onClick={() => setCategory(ctg.category)} key={ctg._id}>
                  {ctg.category}
                </Tab>
              ))}
            </TabList>

            {/* Sub Category of Action Figures */}
            {/* DC */}
              <TabPanel>
                <h2 className="text-2xl lg:text-5xl capitalize font-extrabold text-center py-5 mb-12 bg-clip-text text-transparent bg-gradient-to-br from-amber-500 to-amber-900 drop-shadow-md shadow-info-content">
                  World Class DCU Super Heros
                </h2>
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

            {/* Marvel */}
            <TabPanel>
              <h2 className="subCategoryTitle">World Class MCU Super Heros</h2>
              <div className="grid md:grid-cols-2 gap-10">
                {toys.map((toy) => (
                  <ToyCard key={toy._id} toy={toy}></ToyCard>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default ActionFigures;
