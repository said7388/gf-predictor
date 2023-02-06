import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import PredictionInputs from "./prediction-input";
import PredictionOutput from "./prediction-output";


const Prediction = () => {
  const [predictions, setPredictions] = useState({});
  const [predictionInput, setPredictionInput] = useState({});

  const handleOnChange = (e) => {
    setPredictionInput((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp[e.target.name] = e.target.value;
      return temp;
    })
  }

  const postPrediction = (payload) => {
    const url = `${process.env.REACT_APP_BASE_URL}/`
    axios
      .post(url, payload)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message))
    // .finally(() => );
  };

  const onSubmit = async () => {
    // Filtered Values in a array
    const validityArray = Object.values(
      predictionInput).filter((val) => Boolean(val)
      );

    if (validityArray.length === 0) {
      toast.error("Atleast one field is required");
      return;
    }
    setPredictions({ data: predictionInput });

    // Call API from here
    // postPrediction(predictionInput)
  };

  return (
    <>
      <div className='rounded p-5 flex flex-col md:flex-row gap-y-8 '>
        <PredictionInputs handleOnChange={handleOnChange} onSubmit={onSubmit} />
        <PredictionOutput predictions={predictions} />
      </div>
    </>
  );
};
export default Prediction;
