import completeIcon from "../assets/images/icon-complete.svg";

export function ThankYouPage({ onClick }) {
  return (
    <>
      <div className="flex justify-center flex-col gap-y-6 items-center">
        <img src={completeIcon} alt="" />
        <h1 className="font-bold text-4xl tracking-wide text-Purple-950">
          Thank You !
        </h1>
        <button className="confirmButton" onClick={onClick}>
          Close
        </button>
      </div>
    </>
  );
}
