import { useState } from "react";
import styles from "./PercentageInput.module.css";
type PercentageInputProps = {
  children: string;
  satisfPercent: number;
  setSatisfPercent: Function;
  satisfactionLevel: {
    dissatisfied: number;
    ok: number;
    good: number;
    amazing: number;
  };
};

function PercentageInput({
  children,
  satisfPercent,
  setSatisfPercent,
  satisfactionLevel,
}: PercentageInputProps) {
  return (
    <div>
      <h3>{children}</h3>
      <select
        value={satisfPercent}
        onChange={(ev) => setSatisfPercent(+ev.target.value)}
      >
        <option value={satisfactionLevel.dissatisfied}>
          Dissatisfied ({satisfactionLevel.dissatisfied}%)
        </option>
        <option value={satisfactionLevel.ok}>
          It was okay ({satisfactionLevel.ok}%)
        </option>
        <option value={satisfactionLevel.good}>
          It was good ({satisfactionLevel.good}%)
        </option>
        <option value={satisfactionLevel.amazing}>
          It was amazing ({satisfactionLevel.amazing}%)
        </option>
      </select>
    </div>
  );
}

export default PercentageInput;
