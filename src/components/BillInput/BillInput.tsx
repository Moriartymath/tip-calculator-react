import { useState } from "react";
import styles from "./BillInput.module.css";

type BillInputProps = {
  children: string;
  billAmount: number;
  setBillAmount: Function;
};

function BillInput({ children, billAmount, setBillAmount }: BillInputProps) {
  return (
    <div>
      <h3>{children}</h3>
      <input
        type="number"
        min={0}
        value={billAmount}
        onChange={(ev) => setBillAmount(+ev.target.value)}
      />
    </div>
  );
}

export default BillInput;
