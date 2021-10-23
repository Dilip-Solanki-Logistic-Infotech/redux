import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import {
  changeValue,
  selectText,
} from "../../features/textfield/textfieldSlice";

const Child = () => {
  const value = useAppSelector(selectText);
  const dispatch = useAppDispatch();

  return (
    <div className="mb-3">
      <label className="form-label">Child</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter text 2"
        value={value}
        onChange={(event) => dispatch(changeValue(event.target.value))}
      />
    </div>
  );
};

export default Child;
