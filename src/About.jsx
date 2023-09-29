export default function About() {
    return (
      <div id="about">
        <h1 className="uppercase font-medium text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-center text-orange-800 py-6 font-custom mt-2">
          About us
        </h1>
        <div className=" flex flex-col py-2 my-2 md:flex-row lg:flex-row bg-white-200 flex-col-reverse">
          <div className="flex-1 py-5 px-6 ">
            <p className="font-roboto font-medium text-base sm:text-base md:text-lg">
              Established in 1995 AD, we have been on a mission to provide coffee
              lovers with the finest and most flavorful coffee.<br></br>
              <br></br>Our commitment to quality starts with sourcing the
              highest-quality coffee beans from around the world, which we
              carefully roast to perfection. We take pride in creating a welcoming space where friends and families can connect over a cup of coffee. Every cup you enjoy at Coffee Beans is not just a drink; it's a small celebration of the rich traditions and flavors of coffee.
            </p>
            <button className="bg-orange-800 py-2 px-2 md:px-4 my-2 text-white  border border-black hover:bg-orange-700 rounded">Learn More</button>
          </div>
          <div className="flex-1 p-4">
            <img src="./coffee-bg4.jpg" className="h-80 my-5 w-full object-cover rounded-lg border-orange-700 border-2"></img>
          </div>
        </div>
      </div>
    );
  }
  