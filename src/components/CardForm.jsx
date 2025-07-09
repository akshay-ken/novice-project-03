import clsx from "clsx";

export function CardForm({
  name,
  onChangeCardDetails,
  handleSubmit,
  cardNumber,
  mm,
  yy,
  cvc,
  error,
  errorText,
}) {
  const inputStyles = clsx("inputStyles", {
    "outline-4 outline-red-500 text-red-400": error,
  });
  const inputStylesNumbers = clsx("inputStylesNumbers", {
    "outline-4 outline-red-500 text-red-400": error,
  });
  return (
    <>
      <form className=" space-y-6" onSubmit={handleSubmit}>
        <label htmlFor="" className="labelClass">
          cardholder name
        </label>
        <input
          type="text"
          placeholder="e.g. John Doe"
          // value={name}
          name="cardName"
          onChange={onChangeCardDetails}
          className={inputStyles}
        />
        <p className="text-sm font-bold text-red-600 -mt-6 text-center">
          {errorText.nameError}
        </p>
        {/* card number input */}
        <label htmlFor="" className="labelClass">
          card number
        </label>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          name="cardNumber"
          // value={cardNumber}
          onChange={onChangeCardDetails}
          className={inputStyles}
        />
        <p className="text-sm font-bold text-red-600 -mt-6 text-center">
          {errorText.numberError}
        </p>
        {/* other details input */}
        <label htmlFor="" className="labelClass block">
          exp. date (MM/YY) CVC
        </label>
        <input
          type="number"
          name="MM"
          onChange={onChangeCardDetails}
          placeholder="MM"
          className={inputStylesNumbers}
        />
        <input
          type="number"
          name="YY"
          onChange={onChangeCardDetails}
          // value={yy}
          placeholder="YY"
          max={99}
          className={inputStylesNumbers}
        />
        <input
          type="number"
          placeholder="eg. 123"
          name="cvc"
          // value={cvc}
          onChange={onChangeCardDetails}
          className={`${inputStylesNumbers} w-4/12`}
        />
        {/* <p className="text-sm font-bold text-red-600 -mt-6 text-right">Error</p> */}
        <button className="confirmButton" type="submit">
          Confirm
        </button>
      </form>
    </>
  );
}
