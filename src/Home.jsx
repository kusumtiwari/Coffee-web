export default function Home() {
  return (
    <>
     
        <div className="relative h-screen bg-cover bg-center bg-no-repeat opacity-100 overflow-hidden bg-orange-800 bg-[url('./coffeebg5.jpg')]"  id='home'>
          <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="w-full uppercase sm:font-medium md:font-medium text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl z-30 font-custom text-white">
              How About Coffee?
            </h1>
            <button className="text-white text-thin uppercase bg-orange-800 hover:bg-orange-700 font-semibold py-2 px-2 md:px-4 my-2 border border-black rounded-md text-base">
              Shop Now
            </button>
          </div>
        </div>
    </>
  );
}
