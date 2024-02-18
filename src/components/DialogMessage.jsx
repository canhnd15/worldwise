import styles from "./DialogMessage.module.css";

function DialogMessage({ setIsClosedDialog }) {
  function handleCloseDialog() {
    setIsClosedDialog(true);
  }

  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <span className={styles.close} onClick={() => handleCloseDialog()}>
            &times;
          </span>
          <h2>
            <span>⚠️</span> LOGIN TO START TRACKING!
          </h2>
        </div>
        {/* <div className={styles.modalBody}>
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div> */}
        {/* <div className={styles.modalFooter}>
          <h3>Modal Footer</h3>
        </div> */}
      </div>
    </div>
  );
}

export default DialogMessage;
