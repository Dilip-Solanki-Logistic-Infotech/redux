import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  clearState,
} from "../../features/counter/counterSlice";

const Count = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  return (
    <>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <h3>Counter</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div className="text-center">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-2 col-xs-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrement())}
                >
                  Decrease
                </button>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-2 col-xs-2">
                <div className="text-center">
                  <h3>{count}</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-2 col-xs-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  aria-label="Increment value"
                  onClick={() => dispatch(increment())}
                >
                  Increase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <div className="text-center">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={incrementAmount}
                  onChange={(e) => setIncrementAmount(e.target.value)}
                />
              </div>
              <div className="col-lg-10 col-md-8 col-sm-6 col-xs-6">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                  >
                    Add Amount
                  </button>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                  >
                    {" "}
                    Add Async
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                  >
                    {" "}
                    Add If Odd
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
