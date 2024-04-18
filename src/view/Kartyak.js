import DataService from "../modell/DataService";
import { useEffect, useState } from "react";
import Kartya from "./Kartya";
import { Form } from "react-bootstrap";
const DB = new DataService();

function Kartyak() {
  let vegpont1 = "/kategoriak/tesztek/5";
  const [objLista1, setObjLista1] = useState([{}]);

  useEffect(() => {
    DB.getData(vegpont1, setObjLista1);
  }, []);

  let vegpont2 = "/kategoriak/tesztek/7";
  const [objLista2, setObjLista2] = useState([{}]);

  useEffect(() => {
    DB.getData(vegpont2, setObjLista2);
  }, []);

  const getInitialState = () => {
    const value = "termeszetvedelem";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const witchObjLista = [];


  return (
    <div className="Kartya">
      <Form.Group className="mb-3">
        <Form.Label>Fuel Type</Form.Label>
        <Form.Select id="kategoria" placeholder="Kategoria" readOnlvalue={value} onChange={handleChange}>
          <option value="termeszetvedelem">természetvédelem</option>
          <option value="tortenelem">történelem</option>
        </Form.Select>
      </Form.Group>

      {(() => {
        if (value === "termeszetvedelem") {
          return (
            <Kartya kartya={objLista1} />
          )
        } else  {
          return (
            <Kartya kartya={objLista2} />
          )
        } 
      })()}
    </div>
  );
}

export default Kartyak;
