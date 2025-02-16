// import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
  return (
    <>
    {/* <FramerMotion /> */}
    <div className="px-6 md:px-20 py-10 bg-slate-300">

      {/* Header Section */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-600 ">
        All in One Website: AI, Sports, Blog, Tourism, Coding  Just One Click Away!
      </h2>
      <hr className="my-4 border-blue-400" />

      {/* Knowledge & Learning Section */}
      <section className="my-10">
        <h2 className="text-center text-3xl font-bold text-gray-800">KNOWLEDGE & LEARNING</h2>
        <p className="text-lg text-gray-600 text-center mt-2">
          Get all the information about artificial intelligence and web development.
        </p>
        {/* <img src="/img4.jpeg" alt="AI Image" width={500} height={500} className="w-full h-auto mt-4" /> */}
      </section>
     
          

      {/* Course Details */}
      <div data-aos="zoom-in" className="my-6">
        <h3 className="text-center text-2xl font-semibold text-indigo-700">Governor Sindh IT Course</h3>
        <p className="text-gray-600 text-center mt-2">
          Access lectures on AI, Next.js projects, TypeScript challenges, and live sessions.
        </p>
        <p className="text-gray-600 text-center mt-2">
                  <Link href="/governor-sindh-it-course hover:text-red">For more detail click </Link>
         </p>
      </div>

      <div data-aos="zoom-in" className="my-6">
        <h3 className="text-center text-2xl font-semibold text-green-700">SAYLANI SMIT</h3>
        <p className="text-gray-600 text-center mt-2">Details on admission, entry tests, and available courses.</p>
        <p className="text-gray-600 text-center mt-2">
        <Link href="/saylani">For more detail click me</Link>
         </p>


      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {[
          { title: "JDC IT CITY", desc: "Latest updates on admissions and online application process." },
          { title: "BANO QABIL", desc: "Admission criteria and registration policies." },
          { title: "DIGISKILL", desc: "Steps to sign up and complete admission process." }
        ].map((item, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-lg" data-aos="flip-left">
            <h3 className="text-center text-xl font-bold text-purple-700">{item.title}</h3>
            <p className="text-gray-600 text-center mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* AI Chatbot */}
      <div className="my-10">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/-UrmPkaUawFxRbfbT0zfM"
          width="100%"
          className="h-96 rounded-xl shadow-lg"
        ></iframe>
      </div>

      {/* Other Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div data-aos="fade-up" className="p-6 bg-gray-100 rounded-xl shadow-md">
          <h3 className="text-center text-2xl font-semibold text-red-700 animate-bounce ">NEWS</h3>
          <p className="text-gray-600 text-center mt-2">Updates on AI advancements and future tech trends.</p>
        </div>
        <div data-aos="fade-up" className="p-6 bg-gray-100 rounded-xl shadow-md">
          <h3 className="text-center text-2xl font-semibold text-blue-700">SPORTS</h3>
          <p className="text-gray-600 text-center mt-2">Live scores and updates on football, cricket, hockey, and more.</p>
        </div>
      </div>

      {/* Next.js Section */}
      <div className="my-10">
        <h2 className="text-center text-3xl font-bold text-blue-700">Next.js</h2>
        <p className="text-gray-700 text-center mt-2">A powerful React framework for fast, scalable, and SEO-friendly applications.</p>
      </div>

      <div className="text-center my-6">
        <h2 className="text-xl font-semibold">How to create a Next.js Project</h2>
        <p className="text-gray-600">Run the following command:</p>
        <h3 className="text-lg font-bold bg-gray-200 p-2 inline-block mt-2 rounded-md">npx create-next-app@latest</h3>
      </div>

      {/* Course Syllabus */}
      <div className="my-10">
        <h2 className="text-center text-2xl font-bold text-gray-800">SYLLABUS & IMPORTANT TOPICS</h2>
        <ul className="list-disc text-gray-700 mt-4 ml-6">
          {["Variables & Data Types", "Case Sensitivity", "Errors & Solutions", "Operators", "Loops", "Functions", "OOP Basics"].map((topic, index) => (
            <li key={index} className="mt-2">{topic}</li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="my-10">
        <h2 className="text-xl font-semibold text-gray-800">Important Links</h2>
        <ul className="list-disc text-blue-600 mt-4 ml-6">
          <li>
            <a href="https://github.com/BABARSHAH786/panacloud-css-starting-point.git" target="_blank" rel="noopener noreferrer" className="underline">
              Panacloud CSS Portfolio Code (GitHub)
            </a>
          </li>
          <li>
            <a href="https://www.figma.com/design/iDLLEdqoM8g4CltrfgsaXC/Assignment-II?node-id=0-1&node-type=canvas" target="_blank" rel="noopener noreferrer" className="underline">
              Figma Design for Next.js & Tailwind CSS
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}













// // import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>

//       {/* home page */}
//       <div className="pl-[230px] mt-[12px] ">
//       <h2 className="center1 animate__animated animate__bounce">
//         All in one website Artificial Intellingence ,Sports, Blog, Tourism,
//         Coding just in one click
//       </h2>

//       <hr />
      
//         <h2 className="text-center font-bold text-[30px]  ">KNOWLEDGE & LEARNING</h2>
//         <p>
//           This website give you all information about artificial intelligence
//           and website development
//         </p>
//         <div data-aos="zoom-in">
//           <h3 className="text-center font-bold text-[25px]">Governor Sindh IT Course</h3>
//         </div>
//         <h4 >In this website you find all lecture of artificial intelligence course like</h4>
//     <h4 >30 days of nextjs Project ,100 Days Of Typescript Challenge and 45 exercise question Daily live session summary detail</h4>
//     <div className="" data-aos="flip-left">
//         {/* <img src="./images/WhatsApp Image 2024-03-16 at 8.31.46 PM.jpeg" alt="go to folder d" width="960" height="480" className="center"> */} 
//     </div>
//     <div data-aos="zoom-in">

//         <h3 className="text-center font-bold text-[25px]">SAYLANI SMIT</h3>
//     </div>
//     <h4>All detail about admsission , entry test and courses offered</h4>
//     {/* <img src="./images/WhatsApp Image 2024-03-16 at 8.31.45 PM.jpeg" alt="go to folder d" width="960" height="480" class="center"> */}


//     <h3 className="text-center font-bold text-[25px]">JDC IT CITY</h3>
//     <h4 >Update of current batch and new admission start date. How to submit online admission form</h4>


//     <h3 className="text-center font-bold text-[25px]">BANO QABIL</h3>
//     <h4 >Admission criteria and policy of registration. How to enroll</h4>

//     <h3 className="text-center font-bold text-[25px]">DIGISKILL</h3>
//     <h4 >How to sign up and process of admission .Submit online application </h4>
//     <div data-aos="zoom-out-left">
//     {/* <img src="./images/WhatsApp Image 2024-03-16 at 9.03.31 PM.jpeg" alt="go to folder d" width="960" height="480" class="center"> */}
//      </div>
//      <iframe
// src="https://www.chatbase.co/chatbot-iframe/-UrmPkaUawFxRbfbT0zfM"
// width="100%"


// ></iframe>

// {/* new part */}
//      <div>
//      <h3 className="text-center font-bold text-[25px] ">NEWS</h3>
//     <h4 >Current a change impact of thoisnd future update of artificial intelligence and how fast world will changeda</h4>

//     <h3 className="text-center font-bold text-[25px]">SPORTS</h3>
//     <h4 >Live score and update of different famous sports like football , cricket, hockey and snooker</h4>
//     <div data-aos="fade-up"
//      data-aos-duration="3000">

//     {/* <img src="./images/WhatsApp Image 2024-03-16 at 9.03.30 PM.jpeg" alt="go to folder d" width="960" height="480" class="center"> */}
//     </div>
    
//     <div className="course relative left-3">
      
//      </div>
//       </div>

//       </div>
//       {/* not center work */}
//       <div className="pl-[230px]">
//       <h2 className="text-center font-bold text-[26px] ">Next.js</h2><br />
//     Next.js is a popular open-source React framework that simplifies the process of building fast, scalable, and SEO-friendly web applications.<br />
//     It provides a robust structure and powerful features to enhance your React development experience.<br />
//     important language for nextjs<br />
//     1 HTML <br />
//     2 CSS<br />
//     3 JavaScript/Typescript<br />

//     <div>
//       <h2>How to create Nextjs Project</h2>
//       <h2>Make new folder and open command prompt then paste given below command</h2>
//       <h3 className="text-center font-bold text-[26px] ">npx create-next-app@latest</h3>

//     </div>
    
//     <h4 className="text-center font-bold text-[26px] ">GIAIC QUARTER 3 REQUIREMENT</h4>
//     <a href="https://docs.google.com/forms/d/e/1FAIpQLSd77V_p3TTDXxBvOE7tswNVG1OOBx3BNsbmBcgNprtDLzvcwg/viewform?edit2=2_ABaOnudBLnjh7JI6r7zrXtWOsNFJMgs-6a7OIbPwzQ6Ed3cTqxfcHurw1bTZw-SA6Q" className="button-link">Quarter 3 Form Assignment Nextjs</a>
    
//      <h4 className="text-center font-bold text-[26px] ">Whatsapp channel link for code</h4>
//     <a href="https://whatsapp.com/channel/0029VaCJeIA4o7qMgTLbGU34" className="button-link">Whatsapp channel link</a>



//     <a className="quarter2" href="https://docs.google.com/document/d/1-dQWknTEZfZWAqeWGju0vyJaG4n7ltT8TtRa2Q3z8L0/edit">Assigment Quarter 2</a>
//       <h1>START SAY LEKAR AB TAK COMPLETE WORK GSIT</h1>
//       <h1>SYLABUS AND IMPORTANT TOPIC</h1>
//       <ol id="course1">
//         <li>VARIABLES AND DATA TYPE</li>
//         <li>CASE SENSITIVE</li>
//         <li>ERRORS AND ITS SOLUTION</li>
//         <li>CONST AND LET</li>
//         <li>MODULES</li>
//         <li>OPERATORS</li>
//         <li>IF AND ELSE STATEMENT</li>
//         <li>SELF CHECK QUIZ</li>
//         <li>FUNCTIONS</li>
//         <li>SCOPE</li>
//         <li>OBJECTS</li>
//         <li>ARRAYS</li>
//         <li>LOOP AND ITS TYPE</li>
//         <li>TEMPLATE LITERALS</li>
//         <li>OBJECT ORIENTED PROGRAM (OOP)</li>
//       </ol>
//     </div>
    
    
//     <br />
//     <div>          <li><a href="https://github.com/BABARSHAH786/panacloud-css-starting-point.git">Click here for panacloud css mandatory company portfolio code<i className="fa fa-github"></i></a></li>
// </div>
//   <div>
//   <h2>Figma Design using nextjs and tailwind css</h2>
//   <Link href="https://www.figma.com/design/iDLLEdqoM8g4CltrfgsaXC/Assignment-II?node-id=0-1&node-type=canvas" />

//   </div>
 
    
//       </div>
      
//   );
// }
