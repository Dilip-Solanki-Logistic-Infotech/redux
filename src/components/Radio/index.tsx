import React, { useEffect } from "react";
import Parent from "./Parent";
import Child from "./Child";
import { useAppDispatch } from "../../redux/store";
import { clearState } from "../../features/radio/radioSlice";

const Radio = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  return (
    <>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <h3>Radio</h3>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Parent />
          <Child />
        </div>
      </div>
    </>
  );
};

export default Radio;
