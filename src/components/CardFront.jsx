import cardLogo from "../assets/images/card-logo.svg";

export function CardFront({ cardNumber, cardName, cardExpiry }) {
  return (
    <>
      <div
        className=" 
        w-full max-w-sm aspect-[1.58/1]
        bg-[url('.\assets\images\bg-card-front.png')] 
       bg-no-repeat bg-contain relative bg-center"
      >
        <img
          src={cardLogo}
          className="top-[15%] absolute left-[5%] w-[18%] h-auto"
          alt=""
        />
        <div className="absolute bottom-[15%] left-[8%]">
          <p className="text-white font-medium text-2xl tracking-widest mb-4">
            {cardNumber}
          </p>
          <div className="flex justify-between items-center text-lg text-white uppercase">
            <p>{cardName}</p>
            <p>{cardExpiry}</p>
          </div>
        </div>
      </div>
    </>
  );
}
