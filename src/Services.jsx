export default function Services() {
  return (
    <>
      <div className="flex flex-col p-4 md:w-1/2 sm:w-full my-8" id="service">
        <h1 className="uppercase font-custom font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-5">
          Limited Time Only!
        </h1>
        <p className="font-roboto font-medium text-base sm:text-base md:text-lg text-orange-900">
          Indulge in the ultimate coffee experience with Campos Coffee's
          September Sale. For a limited time, enjoy 20% off our premium beans
          and an incredible 30% off our convenient capsules. From the rich aroma
          of freshly ground beans to the convenience of capsules, this sale
          caters to every coffee loves preference. But dont wait these
          exceptional savings won't last long. Join us in this coffee
          celebration and stock up on your favourite blends today!
        </p>
      </div>
      <div className="w-full flex flex-col justify-between bg-slate-50 p-5 md:flex-row ">
        <div className="bg-orange-300 flex-1 mr-4 hover-effect2 cursor-pointer p-4 border border-black rounded-lg">
          <img src="./coffee-mug.png" alt="coffe-mug" className="w-1/2" />
          <p className="p-3">
            "Our aluminium capsules are designed to perfectly capture the
            flavour profile & fresh aroma of our coffee"
          </p>
        </div>
        <div className="bg-orange-300 flex-1 mr-4 hover-effect2 cursor-pointer border border-black rounded-lg">
          <img src="./coffee-beans.png" alt="coffe-mug" className="w-1/2 p-2" />
          <p className="p-4">
            "Indulge in the rich and aromatic world of coffee beans, where each
            carefully selected bean is passport to an unparalleled journey of
            flavor"
          </p>
        </div>
        <div className="bg-orange-300 flex-1 hover-effect2 cursor-pointer border border-black rounded-lg mr-3">
          <img
            src="./coffee-machine.png"
            alt="coffe-mug"
            className="w-1/2 p-8 md:p-3"
          />
          <p className="p-4">
            "Caramelly & Rich Blend. Experience the perfect fusion of art and
            precision with our state-of-the-art coffee blenders"
          </p>
        </div>
      </div>
    </>
  );
}
