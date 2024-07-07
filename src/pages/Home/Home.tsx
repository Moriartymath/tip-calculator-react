import styles from "./Home.module.css";
import { useState } from "react";
import BillInput from "../../components/BillInput/BillInput.tsx";
import PercentageInput from "../../components/PercentageInput/PercentageInput.tsx";
import TotalBill from "../../components/TotalBill/TotalBill.tsx";
import Button from "../../components/Button/Button.tsx";
import { Link, useLinkClickHandler } from "react-router-dom";

const satisfactionLevel = {
  dissatisfied: 0,
  ok: 5,
  good: 10,
  amazing: 20,
};

function Home() {
  const [billAmount, setBillAmount] = useState(0);
  const [satisfPerc1, setSatisfPerc1] = useState(0);
  const [satisfPerc2, setSatisfPerc2] = useState(0);

  return (
    <div className={styles.home}>
      <form className={styles.form}>
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
        <div className={styles.buttons}>
          <Button
            onHandleClick={(ev) => {
              ev.preventDefault();
              setBillAmount(0);
              setSatisfPerc1(0);
              setSatisfPerc2(0);
            }}
          >
            Reset
          </Button>
          <Button onHandleClick={(ev) => {}}>
            <Link to="checkout">Send payment</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Home;
