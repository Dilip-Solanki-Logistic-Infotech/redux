import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { changeValue, selectText } from "../../features/radio/radioSlice";

const Child = () => {
  const value = useAppSelector(selectText);
  const dispatch = useAppDispatch();

  return (
    <div className="mb-3">
      <label className="form-label">Child</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="child"
          id="one"
          value="one"
          checked={value === "one"}
          onChange={(event) => dispatch(changeValue("one"))}
        />
        <label className="form-check-label" htmlFor="one">
          One
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="child"
          id="two"
          value="two"
          checked={value === "two"}
          onChange={(event) => dispatch(changeValue("two"))}
        />
        <label className="form-check-label" htmlFor="two">
          Two
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="child"
          id="three"
          value="three"
          checked={value === "three"}
          onChange={(event) => dispatch(changeValue("three"))}
        />
        <label className="form-check-label" htmlFor="three">
          Three
        </label>
      </div>
    </div>
  );
};

export default Child;
