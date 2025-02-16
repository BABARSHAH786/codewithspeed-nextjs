'use client'
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">CodewithSpeed</h1>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Links */}
        <ul
          className={`absolute md:static bg-indigo-500 w-full md:w-auto top-16 font-semibold left-0 md:flex md:space-x-6 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="p-3 md:p-0 hover:text-yellow-200">
            <Link href="/">Home</Link>
          </li>
          <li className="p-3 md:p-0 hover:text-yellow-200">
            <Link href="/governor-sindh-it-course">Governor Sindh IT Course</Link>
          </li>
          <li className="p-3 md:p-0 hover:text-yellow-200">
            <Link href="/jdc-it-city">JDC IT City/Bano Qabil</Link>
          </li>
          {/* <li className="p-3 md:p-0 hover:text-yellow-200">
            <Link href="/saylani">Saylani SMIT</Link>
          </li> */}
          <li className="p-3 md:p-0 hover:text-yellow-200">
            <Link href="/jobs">Jobs</Link>
          </li>
          <li className="p-3 md:p-0 hover:text-yellow-200">
            <Link href="/News">News</Link>
          </li>
        
        </ul>
      </div>
    </nav>
  );
}







// import Link from "next/link"
// export default function NavBar(){
//     return (
//       <div>
//         <header className="bg-indigo-500 flex list-none flex-wrap justify-center font-medium text-xl">
        


//     <li className="justify-arround mr-4 hover:text-yellow-200 hover:-translate-y-1 "><Link href='/'>Home</Link>   </li>
//         <li className="mr-4 hover:text-yellow-200 hover:-translate-y-1"><Link href='/gsit'>Governor Sindh IT Course</Link>   </li>
//         <li className="mr-4 hover:text-yellow-200 hover:-translate-y-1"><Link href='/jdc-it-city'>JDC IT City/Bano Qabil</Link></li>
//         <li className="mr-4 hover:text-yellow-200 hover:-translate-y-1"><Link href='/saylani'>Saylani SMIT</Link></li>
//         <li className="mr-4 hover:text-yellow-200 hover:-translate-y-1"><Link href='/jobs'>Jobs</Link></li>
        

    
//     </header>
//   </div>

//     )
//   }