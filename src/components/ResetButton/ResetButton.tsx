import styles from "./ResetButton.module.css";

function ResetButton({
  setBillAmount,
  setSatisfPercent,
  setSatisfPercentFriends,
}) {
  return (
    <button
      onClick={() => {
        setBillAmount(0);
        setSatisfPercent(0);
        setSatisfPercentFriends(0);
      }}
    >
      Reset
    </button>
  );
}

export default ResetButton;
