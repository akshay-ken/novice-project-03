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
  const inputStyles = clsx("inputStyles");
  const inputStylesNumbers = clsx("inputStylesNumbers");
  return (
    <>
      <form className=" space-y-6" onSubmit={handleSubmit}>
        <label htmlFor="" className="labelClass">
          cardholder name
        </label>
        <input
          type="text"
          value={name}
          placeholder="e.g. John Doe"
          // value={name}
          name="cardName"
          onChange={onChangeCardDetails}
          className={clsx(inputStyles, {
            "outline-4 outline-red-500 text-red-400": error.nameError,
          })}
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
          className={clsx(inputStyles, {
            "outline-4 outline-red-500 text-red-400": error.numberError,
          })}
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
          className={clsx(inputStylesNumbers, {
            "outline-4 outline-red-500 text-red-400": error.mmError,
          })}
        />

        <input
          type="number"
          name="YY"
          onChange={onChangeCardDetails}
          // value={yy}
          placeholder="YY"
          className={clsx(inputStylesNumbers, {
            "outline-4 outline-red-500 text-red-400": error.yyError,
          })}
        />

        <input
          type="number"
          placeholder="eg. 123"
          name="cvc"
          // value={cvc}
          onChange={onChangeCardDetails}
          className={clsx(inputStylesNumbers, "w-4/12", {
            "outline-4 outline-red-500 text-red-400": error.cvcError,
          })}
        />
        <p className="text-sm font-bold text-red-600 -mt-6 text-center">
          {errorText.mmError}
        </p>
        <p className="text-sm font-bold text-red-600 -mt-6 text-left">
          {errorText.yyError}
        </p>
        <p className="text-sm font-bold text-red-600 -mt-6 text-right">
          {errorText.cvcError}
        </p>
        <button className="confirmButton" type="submit">
          Confirm
        </button>
      </form>
    </>
  );
}
