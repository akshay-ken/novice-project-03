export function CardBack({ cvc }) {
  return (
    <>
      <div
        className="w-full bg-[url('./assets/images/bg-card-back.png')]
      bg-contain bg-no-repeat max-w-sm relative bg-center aspect-[1.58/1]"
      >
        <div className="size-12 absolute top-[43%] right-[10%]">
          <p className="text-white font-bold tracking-widest text-xl">{cvc}</p>
        </div>
      </div>
    </>
  );
}
