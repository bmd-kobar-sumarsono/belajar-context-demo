import { useContext } from "react";
import {
  UPDATE_GIANT_IS_SHOW,
  UPDATE_GIANT_IS_SHOW_SISTER,
} from "../types/context";
import { DoraemonContext, GiantContext } from "../routes";
import { Link } from "react-router-dom";

const Opponent = () => {
  const [state] = useContext(DoraemonContext);
  const [giantState, giantDispatch] = useContext(GiantContext);
  return (
    state.isShow && (
      <div className="opponent">
        <h3>Who is my Opponent?</h3>
        <button onClick={() => giantDispatch({ type: UPDATE_GIANT_IS_SHOW })}>
          Show opponent
        </button>
        {giantState.isShow && (
          <>
            <h3>Giant</h3>
            <div className="opponent-info">
              <button
                onClick={() =>
                  giantDispatch({ type: UPDATE_GIANT_IS_SHOW_SISTER })
                }
              >
                Show Sister
              </button>
              {giantState.isShowSister && (
                <>
                  <h3>Hi, Iam Jaiko</h3>
                  <Link to="/">Back to home</Link>
                </>
              )}
            </div>
          </>
        )}
      </div>
    )
  );
};

export default Opponent;
