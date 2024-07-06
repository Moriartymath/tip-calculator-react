import styles from "./TotalBill.module.css";

function TotalBill({ billAmount, satisfPerc, satisfPercFriends }) {
  const totalBill =
    billAmount + ((satisfPerc + satisfPercFriends) / 2 / 100) * billAmount;
  return <h3>{totalBill}</h3>;
}

export default TotalBill;
