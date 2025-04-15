// LayCheckout.js

import React, { useEffect, useState } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import styles from "../css/StyledLayCheckout.module.css";
import DonationModal from "./DonationCertificate";

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "VQMfaA0KTAWJ8hFAOE9PL";

const LayCheckout = ({ donation, name, hall, onClose }) => {
  // Receive hall as a prop
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState(null);
  const [showDonationModal, setShowDonationModal] = useState(false);

  useEffect(() => {
    async function fetchPaymentWidgets() {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const widgets = tossPayments.widgets({ customerKey });
        setWidgets(widgets);
        console.log("Toss Payments loaded successfully.");
      } catch (error) {
        console.error("Failed to initialize Toss Payments:", error);
      }
    }

    fetchPaymentWidgets();
  }, []);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (!widgets) return;

      try {
        const validAmount = {
          currency: "KRW",
          value: Math.max(Number(donation), 1),
        };

        await widgets.setAmount(validAmount);

        await Promise.all([
          widgets.renderPaymentMethods({
            selector: "#payment-method",
            variantKey: "DEFAULT",
          }),
          widgets.renderAgreement({
            selector: "#agreement",
            variantKey: "AGREEMENT",
          }),
        ]);

        setReady(true);
        console.log("Widgets rendered successfully.");
      } catch (error) {
        console.error("Failed to render payment widgets:", error);
      }
    }

    renderPaymentWidgets();
  }, [widgets, donation]);

  const handlePayment = async () => {
    if (!widgets) return;
    try {
      await widgets.requestPayment({
        orderId: `order_${Date.now()}`,
        orderName: `Donation by ${name}`,
        successUrl: `${window.location.origin}/laySuccess`,
        failUrl: `${window.location.origin}/fail`,
      });
      setShowDonationModal(true);
      console.log("Payment requested successfully.");
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const handleCloseDonationModal = () => {
    setShowDonationModal(false);
    onClose();
  };

  return (
    <div className={styles.checkoutModal}>
      <div className={styles.checkoutModalContent}>
        <span className={styles.closeBtn} onClick={onClose}>
          <img src="/img/union.png" alt="Close" />
        </span>
        <h2 className={styles.title}>결제 정보</h2>
        <div className={styles.infoSection}>
          <h3>기부 정보</h3>
          <p className={styles.info}>
            <strong className={styles.t}>기부금액:</strong> {donation}원
          </p>
          <p className={styles.info}>
            <strong className={styles.t}>기부자명:</strong> {name}
          </p>
        </div>
        <div id="payment-method" className={styles.paymentMethod}></div>
        <div id="agreement" className={styles.agreement}></div>
        <button
          className={`${styles.payBtn} ${styles.button}`}
          disabled={!ready}
          onClick={handlePayment}
        >
          결제하기
        </button>
      </div>
      {showDonationModal && (
        <DonationModal Dname={name} onClose={handleCloseDonationModal} />
      )}
    </div>
  );
};

export default LayCheckout;
