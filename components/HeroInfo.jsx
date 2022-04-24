import { useContext } from "react";
import { DoraemonContext } from "../routes";
import { UPDATE_DORAEMON_IS_SHOW } from "../types/context";
import Opponent from "./Opponent";

const HeroInfo = () => {
  const [state, dispatch] = useContext(DoraemonContext);
  return (
    <>
      {state.isShow ? (
        <>
          <h1 className="banner-title">My name is Doraemon</h1>
          <p>And I'm from Toyama</p>
        </>
      ) : (
        <button onClick={() => dispatch({ type: UPDATE_DORAEMON_IS_SHOW })}>
          Show Doraemon
        </button>
      )}
      <Opponent />
    </>
  );
};

export default HeroInfo;
