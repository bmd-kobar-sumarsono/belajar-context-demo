import { useContext } from "react";
import { Link } from "react-router-dom";
import { DoraemonContext } from "../routes";

const Simple = () => {
  const [state] = useContext(DoraemonContext);

  return (
    <div className="main-container">
      {state.isShow ? (
        <>
          <h1 className="info-title">Doraemon</h1>
          <img
            className="main-image"
            src="https://profesi-unm.com/wp-content/uploads/2016/05/Doraemon-hd-Wallpaper.jpg"
          />
        </>
      ) : (
        <>
          <h1 className="info-title">
            Show my info <Link to="/doraemon">here</Link>, please !
          </h1>
        </>
      )}
    </div>
  );
};

export default Simple;
