import BillInput from "./components/BillInput/BillInput.tsx";
import PercentageInput from "./components/PercentageInput/PercentageInput.tsx";
import ResetButton from "./components/ResetButton/ResetButton.tsx";
import TotalBill from "./components/TotalBill/TotalBill.tsx";
import { useState } from "react";

const satisfactionLevel = {
  dissatisfied: 0,
  ok: 5,
  good: 10,
  amazing: 20,
};

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [satisfPerc1, setSatisfPerc1] = useState(0);
  const [satisfPerc2, setSatisfPerc2] = useState(0);

  return (
    <>
      <BillInput billAmount={billAmount} setBillAmount={setBillAmount}>
        How much was the bill?
      </BillInput>
      <PercentageInput
        satisfPercent={satisfPerc1}
        setSatisfPercent={setSatisfPerc1}
        satisfactionLevel={satisfactionLevel}
      >
        How do you satisfied?
      </PercentageInput>
      <PercentageInput
        satisfPercent={satisfPerc2}
        setSatisfPercent={setSatisfPerc2}
        satisfactionLevel={satisfactionLevel}
      >
        How your friends satisfied?
      </PercentageInput>
      <TotalBill
        billAmount={billAmount}
        satisfPerc={satisfPerc1}
        satisfPercFriends={satisfPerc2}
      />
      <ResetButton
        setBillAmount={setBillAmount}
        setSatisfPercent={setSatisfPerc1}
        setSatisfPercentFriends={setSatisfPerc2}
      />
    </>
  );
}

export { App as default, BillInput };
