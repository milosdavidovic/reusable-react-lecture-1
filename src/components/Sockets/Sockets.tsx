import React, { useMemo } from "react";
import ConfirmV1 from "./Confirm/ConfirmV1";
import ConfirmV2 from "./Confirm/ConfirmV2";
import styles from "./Sockets.module.css";

// Q: Is it the same if you pass function or pass a element?

// Better separation of concerns

// AKA Elements as props
const Sockets = () => {
  const actions = useMemo(
    () => (
      <>
        <div>
          <button
            className={`${styles.neutral} ${styles.button}`}
            onClick={() => {
              alert("cancel");
            }}
          >
            Cancel
          </button>
        </div>
        <div>
          {/* <button
            className={`${styles.success} ${styles.button}`}
            onClick={() => {
              alert("Discard");
            }}
          >
            Discard
          </button> */}
          <button
            className={`${styles.success} ${styles.button}`}
            onClick={() => {
              alert("OK");
            }}
          >
            Save
          </button>
        </div>
      </>
    ),
    []
  );

  return (
    <div>
      <h1>Sockets</h1>
      <ConfirmV1
        title="[V1] Are you sure?!"
        cancelButtonTitle="Cancel"
        onCancel={() => {
          alert("cancel");
        }}
        confirmButtonTitle="Save"
        onConfirm={() => {
          alert("OK");
        }}
        discardButtonTitle="Discard"
        onDiscard={() => {
          alert("Discard");
        }}
      >
        This action can't be undone.
      </ConfirmV1>

      <ConfirmV2 title="[V2] Are you sure?!" actions={actions}>
        This action can't be undone.
      </ConfirmV2>
    </div>
  );
};

export default Sockets;
