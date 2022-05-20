import AddLift from "../../pages/AddLift/AddLift";
import LoggedLifts from "../../pages/LoggedLifts/LoggedLifts";
import { Routes, Route } from "react-router-dom";
import Landing from "../../pages/Landing/Landing";

const Routing = ({
  handleLiftSelect,
  handleWeightInput,
  handleDifficultyInput,
  handleSubmit,
}) => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
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
      <Route path="/lifts" element={<LoggedLifts />} />
    </Routes>
  );
};

export default Routing;
