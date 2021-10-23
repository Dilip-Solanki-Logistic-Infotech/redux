import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { changeValue, selectText } from "../../features/checkbox/checkboxSlice";

const Parent = () => {
  const value = useAppSelector(selectText);
  const dispatch = useAppDispatch();

  const onChangeCheckBox = (checked: boolean, id: string) => {
    if (checked) {
      dispatch(changeValue(value.concat(id)));
    } else {
      const index = value.indexOf(id);
      const options = value.slice(0, index).concat(value.slice(index + 1));
      dispatch(changeValue(options));
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label">Parent</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="one"
          id="one"
          checked={value.includes("one")}
          onChange={(event) => onChangeCheckBox(event.target.checked, "one")}
        />
        <label className="form-check-label" htmlFor="one">
          One
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="two"
          id="two"
          checked={value.includes("two")}
          onChange={(event) => onChangeCheckBox(event.target.checked, "two")}
        />
        <label className="form-check-label" htmlFor="two">
          Two
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="three"
          id="three"
          checked={value.includes("three")}
          onChange={(event) => onChangeCheckBox(event.target.checked, "three")}
        />
        <label className="form-check-label" htmlFor="three">
          Three
        </label>
      </div>
    </div>
  );
};

export default Parent;
