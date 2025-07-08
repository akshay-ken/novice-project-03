import clsx from "clsx";

export function CardForm({
  name,
  onChangeCardName,
  cardNumber,
  expMm,
  expYy,
  cvc,
  error,
  errorText,
}) {
  const inputStyles = clsx(
    "placeholder:text-2xl text-xl outline-2 p-3 rounded-lg outline-Gray-400 placeholder:text-Gray-400 w-full mt-2",
    { "outline-4 outline-red-500 text-red-400": error }
  );
  const inputStylesNumbers = clsx(
    "placeholder:text-2xl text-xl outline-2 p-3 rounded-lg outline-Gray-400 placeholder:text-Gray-400 w-2/12 inline mt-2 mx-2",
    { "outline-4 outline-red-500 text-red-400": error }
  );
  return (
    <>
      <form action="" className=" space-y-6">
        <label
          htmlFor=""
          className="text-lg tracking-wider text-Purple-950 
        font-medium uppercase
        "
        >
          cardholder name
        </label>
        <input
          type="text"
          placeholder="e.g. John Doe"
          value={name}
          onChange={() => onChangeCardName(event)}
          className={inputStyles}
        />
        <p className="text-sm font-bold text-red-600 -mt-6 text-center">
          Error
        </p>
        {/* card number input */}
        <label
          htmlFor=""
          className="text-lg tracking-wider text-Purple-950 
        font-medium uppercase
        "
        >
          card number
        </label>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          className={inputStyles}
        />
        <p className="text-sm font-bold text-red-600 -mt-6 text-center">
          Error
        </p>
        {/* other details input */}
        <label
          htmlFor=""
          className="text-lg tracking-wider text-Purple-950 
        font-medium uppercase block
        "
        >
          exp. date (MM/YY) CVC
        </label>
        <input type="number" placeholder="MM" className={inputStylesNumbers} />
        <input type="number" placeholder="YY" className={inputStylesNumbers} />
        <input
          type="number"
          placeholder="eg. 123"
          className={`${inputStylesNumbers} w-4/12`}
        />
        <p className="text-sm font-bold text-red-600 -mt-6 text-right">Error</p>
        <button className=" text-2xl text-white font-bold bg-Purple-950 p-4 w-full rounded-lg">
          Confirm
        </button>
      </form>
    </>
  );
}
