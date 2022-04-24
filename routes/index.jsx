import { createContext, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/index";
import Doraemon from "../pages/doraemon";
import {
  UPDATE_DORAEMON_IS_SHOW,
  UPDATE_GIANT_IS_SHOW,
  UPDATE_GIANT_IS_SHOW_SISTER,
} from "../types/context";

const NotFound = () => <h1>404 NOT FOUND BRO!!</h1>;

export const DoraemonContext = createContext();
export const GiantContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_DORAEMON_IS_SHOW:
      return { ...state, isShow: !state.isShow };
    default:
      return state;
  }
};

const giantReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_GIANT_IS_SHOW:
      return { ...state, isShow: !state.isShow };
    case UPDATE_GIANT_IS_SHOW_SISTER:
      return { ...state, isShowSister: !state.isShowSister };
    default:
      return state;
  }
};

const doraemonInitialState = {
  isShow: false,
};

const giantInitialState = {
  isShow: false,
  isShowSister: false,
};

const MainRoute = () => {
  const [state, dispatch] = useReducer(reducer, doraemonInitialState); // state Doraemon
  const [giantState, setGiantState] = useReducer(
    giantReducer,
    giantInitialState
  ); // state Giant
  return (
    <DoraemonContext.Provider value={[state, dispatch]}>
      <GiantContext.Provider value={[giantState, setGiantState]}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/doraemon" element={<Doraemon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GiantContext.Provider>
    </DoraemonContext.Provider>
  );
};

export default MainRoute;
