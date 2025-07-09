import { useState } from "react";
import { CardBack } from "./CardBack";
import { CardForm } from "./CardForm";
import { CardFront } from "./CardFront";

export function HomePage() {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "0000 0000 0000 0000",
    cardName: "Jhon Doe",
    MM: "00",
    YY: "00",
    cvc: "000",
  });
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    nameError: "",
    numberError: "",
  });

  function onChangeCardDetails(event) {
    const { name, value } = event.target;
    let newValue = value;
    if (name === "MM") {
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue > 12) {
        newValue = "12";
      } else {
        newValue = value;
      }
    }
    if (name === "YY") {
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue > 99) {
        newValue = "25";
      } else {
        newValue = value;
      }
    }
    if (name === "cvc") {
      if (value.length > 3) {
        newValue = value.slice(0, 3);
      }
    }
    setCardDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: newValue,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // if (cardDetails.cardNumber.length < 16) {
    //   setError(true);
    //   setErrorMsg((prev) => {
    //     return { ...prev, numberError: "Enter Valid Card Number" };
    //   });
    // } else {
    //   setError(false);
    //   setErrorMsg((prev) => {
    //     return { ...prev, numberError: "" };
    //   });
    // }
    // if (cardDetails.cardName.length < 4) {
    //   setError(true);
    //   setErrorMsg((prev) => {
    //     return { ...prev, nameError: "Invalid User Name" };
    //   });
    // } else if (
    //   cardDetails.cardName.length > 4 &&
    //   cardDetails.cardName !== "Jhon Doe"
    // ) {
    //   setError(false);
    //   setErrorMsg((prev) => {
    //     return { ...prev, nameError: "" };
    //   });
    // }
    // --- Validation Logic ---

    let isValid = false;
    const newErrorMessages = {
      // Object to collect errors
      nameError: "",
      numberError: "",
      mmError: "",
      yyError: "",
      cvcError: "",
    };

    // Cardholder Name Validation
    if (cardDetails.cardName.trim().length < 4) {
      isValid = true;
      newErrorMessages.nameError = "Cardholder name is too short.";
    }

    // Card Number Validation
    const cleanedCardNumber = cardDetails.cardNumber.replace(/\s/g, "");
    if (cleanedCardNumber.length !== 16 || !/^\d+$/.test(cleanedCardNumber)) {
      isValid = true;
      newErrorMessages.numberError = "Card number must be 16 digits.";
    }

    // MM Validation
    const mmValue = Number(cardDetails.MM);
    if (isNaN(mmValue) || mmValue < 1 || mmValue > 12) {
      isValid = true;
      newErrorMessages.mmError = "Invalid month.";
    }

    // YY Validation
    const yyValue = Number(cardDetails.YY);
    // Basic check: must be a number and not 00
    if (isNaN(yyValue) || yyValue === 0) {
      isValid = true;
      newErrorMessages.yyError = "Invalid year.";
    }
    // More robust check: check if date is in the future
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
    const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)
    if (
      yyValue < currentYear ||
      (yyValue === currentYear && mmValue < currentMonth)
    ) {
      isValid = true;
      newErrorMessages.yyError = "Expiry date must be in the future.";
    }

    // CVC Validation
    if (cardDetails.cvc.length !== 3 || !/^\d+$/.test(cardDetails.cvc)) {
      isValid = true;
      newErrorMessages.cvcError = "CVC must be 3 digits.";
    }

    setError(isValid);
    setErrorMsg(newErrorMessages);
  }
  return (
    <>
      <main className="w-full">
        <div className="w-full h-80 bg-Purple-950">
          <div className="relative top-40 ml-2 z-10">
            <CardFront
              mm={cardDetails.MM}
              yy={cardDetails.YY}
              cardName={cardDetails.cardName}
              cardNumber={cardDetails.cardNumber}
            />
          </div>
          <div className="relative -top-55 ml-10">
            <CardBack cvc={cardDetails.cvc} />
          </div>
        </div>
        <div className="mt-[30%] p-6">
          <CardForm
            cardExpiry={cardDetails.cardExpiry}
            name={cardDetails.cardName}
            onChangeCardDetails={onChangeCardDetails}
            cardNumber={cardDetails.cardNumber}
            mm={cardDetails.MM}
            yy={cardDetails.YY}
            cvc={cardDetails.cvc}
            handleSubmit={handleSubmit}
            error={error}
            errorText={errorMsg}
          />
        </div>
      </main>
    </>
  );
}
