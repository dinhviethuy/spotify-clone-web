import './LayoutDefault.css';
import TopBody from "./TopBody.jsx";
import BottomBody from "./BottomBody.jsx";

function LayoutDefault() {
  return (
    <>
      <div className="layout">
        <div className="top-music">
          <TopBody/>
        </div>
        <div className="bottom-music">
          <BottomBody/>
        </div>
      </div>
    </>
  )
}

export default LayoutDefault