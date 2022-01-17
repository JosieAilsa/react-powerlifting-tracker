import AddLift from "../../pages/AddLift/AddLift";
import LoggedLifts from "../../pages/LoggedLifts/LoggedLifts"
import { Routes, Route } from "react-router-dom";

const Routing = ({handleLiftSelect, handleWeightInput, handleDifficultyInput, handleClick, allLiftsLogged}) => {
    return (
        <Routes>
        <Route
          path="/lift/create"
          element={
            <AddLift
                handleLiftSelect={handleLiftSelect}
                handleWeightInput={handleWeightInput}
                handleDifficultyInput={handleDifficultyInput}
                handleClick={handleClick}
            />
        }
        />
        <Route
          path= "/lifts"
          element={<LoggedLifts allLiftsLogged={allLiftsLogged} />}
        />
      </Routes> 
    );
}
 
export default Routing;