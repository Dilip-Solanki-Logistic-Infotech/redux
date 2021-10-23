import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import {
  changeValue,
  selectText,
} from "../../features/textfield/textfieldSlice";

const Parent = () => {
  const value = useAppSelector(selectText);
  const dispatch = useAppDispatch();

  return (
    <div className="mb-3">
      <label className="form-label">Parent</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter text 1"
        value={value}
        onChange={(event) => dispatch(changeValue(event.target.value))}
      />
    </div>
  );
};

export default Parent;
