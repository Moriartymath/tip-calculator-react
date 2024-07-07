import styles from "./TotalBill.module.css";

function TotalBill({ billAmount, satisfPerc, satisfPercFriends }) {
  const totalBill =
    billAmount + ((satisfPerc + satisfPercFriends) / 2 / 100) * billAmount;
  return (
    <h3 className={styles.total}>
      Total:{" "}
      {Intl.NumberFormat(`${navigator.language}`, {
        style: "currency",
        currency: "USD",
      }).format(totalBill)}
    </h3>
  );
}

export default TotalBill;
