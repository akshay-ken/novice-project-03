import { useState } from "react";
import { CardBack } from "./CardBack";
import { CardForm } from "./CardForm";
import { CardFront } from "./CardFront";

export function HomePage() {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "0000 0000 0000 0000",
    cardName: "Jhon Doe",
    cardExpiry: "00/00",
    cvc: "000",
  });
  function setCardName(event) {
    setCardDetails((prevValue) => {
      return { cardName: event.target.value, ...prevValue };
    });
  }
  return (
    <>
      <main className="w-full">
        <div className="w-full h-80 bg-Purple-950">
          <div className="relative top-40 ml-2 z-10">
            <CardFront
              cardExpiry={cardDetails.cardExpiry}
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
            onChangeCardName={setCardName}
            cardNumber={cardDetails.cardNumber}
            cvc={cardDetails.cvc}
          />
        </div>
      </main>
    </>
  );
}
