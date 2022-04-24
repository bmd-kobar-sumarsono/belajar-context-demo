import { useContext } from "react";
import { Link } from "react-router-dom";
import { DoraemonContext } from "../routes";

const Container = ({ children }) => {
  const [state] = useContext(DoraemonContext);
  return (
    <div className="main-container">
      <h1 className="info-title">
        Info is {state.isShow ? "showed " : "not showed"}
        {state.isShow && <Link to="/">Go to Home</Link>}
      </h1>
      {children}
    </div>
  );
};

export default Container;
