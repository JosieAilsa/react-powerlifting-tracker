import AddLift from "../../pages/AddLift/AddLift";
import LoggedLifts from "../../pages/LoggedLifts/LoggedLifts"
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Routing = ({handleLiftSelect, handleWeightInput, handleDifficultyInput, handleSubmit}) => {
    return (
        <Routes>
        <Route
          path="/lift/create"
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
          path= "/lifts"
          element={
                <LoggedLifts/>}
        />
      </Routes> 
    );
}
 
export default Routing;