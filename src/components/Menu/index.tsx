import { useEffect, useState } from "react";

const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    return(

        <div className={`w-full fixed top-0 z-20 
         transition duration-500 ease-in-out ${
            isScrolled ? "bg-black" : "bg-transparent" }`}>
<div className="mt-3 mr-10 flex items-center font-sans ">
   <div className="flex-grow mt-3 hidden w-full md:block md:w-auto">
       <a href="#">
           <img className="mb-6 hover:animate-pulse " src="spacelogosite3.png"
               alt="Spacechronix Logo"  /></a>
   </div>
   <div className="hidden w-full md:block md:w-auto">
       <ul className="flex space-x-16">
           <li><a className="text-2xl  hover:text-red-600 " href=".#">Home</a></li>
           <li><a className="text-2xl  hover:text-red-600 " href="#caminhada">Historia</a></li>
           <li><a className="text-2xl  hover:text-red-600 " href=".#conheça">Conheça</a></li>
           <li><a className="text-2xl  hover:text-red-600 " href="#contato">Contato</a></li>
       </ul>
   </div>
</div>
<div className="flex justify-center md:hidden ">
   <a href="#">
       <img className="mb-6 hover:animate-pulse " src="spacelogosite3.png"
           alt="Spacechronix Logo"  /></a>
</div>
</div>
    )
}

export { Menu }

