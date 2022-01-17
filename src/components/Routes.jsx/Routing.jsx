import LiftForm from "../../containers/LifForm/LiftForm";
import LiftListContainer from "../../containers/LiftListContainer/LiftListContainer";
import { Routes, Route } from "react-router-dom";

const Routing = ({handleLiftSelect, handleWeightInput, handleDifficultyInput, handleClick, allLiftsLogged}) => {
    return (
        <Routes>
        <Route
          path="/lift/create"
          element={
            <LiftForm
                handleLiftSelect={handleLiftSelect}
                handleWeightInput={handleWeightInput}
                handleDifficultyInput={handleDifficultyInput}
                handleClick={handleClick}
            />
        }
        />
        <Route
          path= "/lifts"
          element={<LiftListContainer allLiftsLogged={allLiftsLogged} />}
        />
      </Routes> 
    );
}
 
export default Routing;