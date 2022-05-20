import AddLift from "../../pages/AddLift/AddLift";
import LoggedLifts from "../../pages/LoggedLifts/LoggedLifts"
import { Routes, Route } from "react-router-dom";

const Routing = ({handleLiftSelect, handleWeightInput, handleDifficultyInput, handleSubmit}) => {
    return (
        <Routes>
        <Route
          path="/create"
          element={
            <AddLift
                handleLiftSelect={handleLiftSelect}
                handleWeightInput={handleWeightInput}
                handleDifficultyInput={handleDifficultyInput}
                handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path= "/allLifts"
          element={
                <LoggedLifts/>}
        />
      </Routes> 
    );
}
 
export default Routing;