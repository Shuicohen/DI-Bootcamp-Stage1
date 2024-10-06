import { useSelector, useDispatch } from "react-redux";
import { ageUpAsync, ageDownAsync } from "../features/ageSlice";
import logo from "../assets/react.svg";

const AgeCounter = () => {
    const age = useSelector((state) => state.ageReducer.value);
    const loading = useSelector((state) => state.ageReducer.loading);
    const dispatch = useDispatch();
  
    return (
      <div>
        <h1>Age: {age}</h1>
        {loading && <img src={logo} alt="loading" />}
        <br />
        <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
        <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
      </div>
    );
  };
  
  export default AgeCounter;