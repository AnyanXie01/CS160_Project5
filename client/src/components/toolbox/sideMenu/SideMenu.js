import "./SideMenu.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function SideMenu({ header, rowsArr }) {
  // rowARr is an array of [row-content, icon image for the row content, reducer matched to that row]
  const dispatch = useDispatch();
  const [clickedButtonIndex, setClickedButtonIndex] = useState(0);

  const scrollToSection = (id, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      const finalPosition = elementPosition - 90 - offset;

      window.scrollTo({
        top: finalPosition,
        behavior: "smooth",
      });
    }
  };

  function handleButtonClick(index) {
    if (typeof rowsArr[index][2] === "string") {
      setClickedButtonIndex(index);
      scrollToSection(rowsArr[index][2]);
    } else {
      setClickedButtonIndex(index);
      dispatch(rowsArr[index][2]());
    }
  }

  return (
    <div className="side-menu-cotainer">
      <div className="header">{header}</div>
      {rowsArr.map((row, index) => (
        <div className="side-menu-row">
          <button
            className="side-Bar-Button"
            onClick={() => handleButtonClick(index)}
            style={{
              background:
                clickedButtonIndex === index
                  ? "var(--primary-transparent, rgba(158, 172, 225, 0.50))"
                  : "",
            }}
            aria-label="side bar"
          >
            {" "}
            {row[1] && (
              <img src={row[1]} alt={row[0] + " icon"} className="icon" />
            )}{" "}
            {row[0]}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SideMenu;
