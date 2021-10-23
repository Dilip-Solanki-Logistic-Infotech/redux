import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { changeValue, selectText } from "../../features/select/selectSlice";

const Child = () => {
  const value = useAppSelector(selectText);
  const dispatch = useAppDispatch();

  return (
    <div className="mb-3">
      <label className="form-label">Child</label>
      <select
        className="form-select"
        value={value}
        onChange={(event) => dispatch(changeValue(event.target.value))}
      >
        <option value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default Child;
