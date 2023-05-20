import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ShareAble/ToyCard";
import { AuthContext } from "../../AuthProvider";

const ActionFigures = () => {
  const {newToyAdded} = useContext(AuthContext)
  console.log(newToyAdded);
  const [subCategories, setSubCategories] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/categories`)
    .then(res => res.json())
    .then(data => setSubCategories(data))
  }, [])

  // Something Like a shop section but with sub categories
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Marvel");
  useEffect(() => {
    fetch(`http://localhost:5000/actionFigures?subCategory=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category, newToyAdded]);

  return (
    <div className="p-12">
      <h1 className="text-center text-6xl font-semibold">
        Welcome to <span className="font-extrabold">Figuru</span>
      </h1>
      <p className="text-center text-sm px-48 py-5">
        Figuru your ultimate destination for superhero action figures and
        collectibles. We are an online store dedicated to bringing you the most
        incredible and authentic superhero figures from across the universe.
        Whether you're a die-hard comic book fan, a movie enthusiast, or a
        passionate collector, Figuru is here to fuel your superhero obsession.
      </p>
      <h3 className="title text-center text-4xl">
        Explore our awesome action figures
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
        <TabPanel>
          {/* Marvel */}
          <h2 className="subCategoryTitle">World Class MCU Super Heros</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {toys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* DC */}
          <h2 className="subCategoryTitle">World Class DCU Super Heros</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {toys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* The Boys */}
          <h2 className="subCategoryTitle">World Class Conflicted Super Humans</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {toys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* Transformers */}
          <h2 className="subCategoryTitle">Transformers Earth Saviors</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {toys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          {/* Indian */}
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
