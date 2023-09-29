export default function Menu(){
    return(
    <div id="menu" style={{ backgroundImage: "url('./plain-white.jpg')" }} className="">
     <div className="flex justify-center my-2 pt-6" id="menu" >
      <h1 className="uppercase font-small text-3xl sm:text-2xl md:text-4xl pt-5 cursor-pointer">Our Menu</h1>
      <img src="./menu.png" className="object-cover h-12 w-12 mt-5 "></img>
     </div>
      <hr className="border-t-2 border-orange-500 my-4 mx-auto w-1/2" />
      <div className="flex w-full p-8 flex-col md:flex-row">
        <div className = "flex flex-col justify-center items-center flex-1 mr-1 py-10 cursor-pointer hover-effect3 ">
            <img src="./ice-cream.png" alt="icecream" className="w-1/2"/>
            <p className="p-2 my-6 pl font-poppins text-xl font-bold">Coffee Flavoured Gelato</p>
        </div>
        <div className="flex flex-col justify-center items-center py-10 flex-1 mr-1 cursor-pointer hover-effect3">
        <img src="./cookies.png" alt="icecream" className="w-1/2"/>
        <p className="p-2 my-6 font-poppins text-xl font-bold">Coffee Flavoured Cookies</p>
        </div>
        <div className="flex flex-col justify-center items-center py-10 flex-1 mr-1 cursor-pointer hover-effect3">
        <img src="./latte-art.png" alt="cookies" className="w-1/2"/>
        <p className="p-2 my-6 font-poppins font-bold text-xl">Latte</p>
        </div>
        </div>
      <div className=" flex w-full p-10 flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center py-10 flex-1 mr-1 cursor-pointer hover-effect3">
        <img src="./iced-coffee.png" alt="iced-coffee" className="w-1/2"/>
        <p className="p-2 my-6 font-poppins font-bold text-xl">Iced-Coffee</p>
        </div>
        <div className="flex flex-col justify-center items-center py-10 flex-1 cursor-pointer hover-effect3">
        <img src="./coffee-beans.png" alt="coffee-beans" className="w-1/2"/>
        <p className="p-2 my-6 font-poppins text-xl font-bold">Coffee-beans</p>
        </div>
        <div className="flex flex-col justify-center items-center py-10 flex-1 cursor-pointer hover-effect3">
        <img src="./coffee-mug.png" alt="Capuccino" className="w-1/2"/>
        <p className="p-2 my-6 pl-6 font-poppins text-xl font-bold">Capuccino</p>
        </div>

        </div>
</div>
    )
}