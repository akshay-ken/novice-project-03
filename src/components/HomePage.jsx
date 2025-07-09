import { useState } from "react";
import { CardBack } from "./CardBack";
import { CardForm } from "./CardForm";
import { CardFront } from "./CardFront";

export function HomePage() {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: undefined,
    cardName: undefined,
    MM: undefined,
    YY: undefined,
    cvc: undefined,
  });
  const [error, setError] = useState({
    nameError: false,
    numberError: false,
    mmError: false,
    yyError: false,
    cvcError: false,
  });
  const [errorMsg, setErrorMsg] = useState({
    nameError: "",
    numberError: "",
    mmError: "",
    yyError: "",
    cvcError: "",
  });
  // thankyou page state;
  const [thankyouPage, setThankyouPage] = useState(false);

  function onChangeCardDetails(event) {
    const { name, value } = event.target;
    let newValue = value;
    if (name === "cardName") {
      if (newValue.trim().length < 4) {
        setError((prev) => {
          return { ...prev, nameError: true };
        });

        setErrorMsg((prev) => {
          return { ...prev, nameError: "Cardholder name is too short." };
        });
      } else {
        setError((prev) => {
          return { ...prev, nameError: false };
        });

        setErrorMsg((prev) => {
          return { ...prev, nameError: "" };
        });
      }
    }
    //for cardNumber
    if (name === "cardNumber") {
      const cleanedCardNumber = newValue.replace(/\s/g, "");
      if (cleanedCardNumber.length !== 16 || !/^\d+$/.test(cleanedCardNumber)) {
        setError((prev) => {
          return { ...prev, numberError: true };
        });
        setErrorMsg((prev) => {
          return { ...prev, numberError: "Card number must be 16 digits." };
        });
      } else {
        setError((prev) => {
          return { ...prev, numberError: false };
        });

        setErrorMsg((prev) => {
          return { ...prev, numberError: "" };
        });
      }
    }
    if (name === "MM") {
      const numValue = Number(newValue);
      if (!isNaN(numValue) && numValue > 12) {
        // newValue = "12";
        const mmValue = Number(newValue);
        if (isNaN(mmValue) || mmValue < 1 || mmValue > 12) {
          setError((prev) => {
            return { ...prev, mmError: true };
          });
          setErrorMsg((prev) => {
            return { ...prev, mmError: "Invalid month." };
          });
        }
      } else {
        newValue = value;
        setError((prev) => {
          return { ...prev, mmError: false };
        });

        setErrorMsg((prev) => {
          return { ...prev, mmError: "" };
        });
      }
    }
    if (name === "YY") {
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue > 99) {
        // newValue = "25";
        const mmValue = Number(newValue);
        if (isNaN(mmValue) || mmValue < 99 || mmValue > 25) {
          setError((prev) => {
            return { ...prev, yyError: true };
          });
          setErrorMsg((prev) => {
            return { ...prev, yyError: "Invalid month." };
          });
        }
      } else {
        newValue = value;
        setError((prev) => {
          return { ...prev, yyError: false };
        });

        setErrorMsg((prev) => {
          return { ...prev, yyError: "" };
        });
      }
    }
    if (name === "cvc") {
      if (value.length > 3) {
        // newValue = value.slice(0, 3);

        setError((prev) => {
          return { ...prev, cvcError: true };
        });
        setErrorMsg((prev) => {
          return { ...prev, cvcError: "CVC" };
        });
      } else {
        newValue = value;
        setError((prev) => {
          return { ...prev, cvcError: false };
        });

        setErrorMsg((prev) => {
          return { ...prev, cvcError: "" };
        });
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
    if (!error.nameError) {
      if (!error.numberError) {
        if (!error.cvcError) {
          if (!error.mmError) {
            if (!error.yyError) {
              setThankyouPage(true);
              console.log("workign");
            }
          }
        }
      }
    }
  }
  return (
    <>
      <main className="w-full md:flex md:flex-row">
        <div className="w-full h-80 bg-Purple-950 md:h-screen ">
          <div className="relative top-40 ml-2 z-10 md:left-40">
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
        <div className="mt-[30%] md:mt-[10%] p-6 md:w-1/2">
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
