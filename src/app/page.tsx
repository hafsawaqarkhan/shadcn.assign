

function page() {
  return (
    <div className='bg-yellow-50 bg-cover'>
   <h1  className=' text-center  font-bold italic text-3xl  p-14 underline '>  "INTRODUCTION TO SHADCN.UI"</h1> 

<p className=' text-center text-2xl text-amber-700 font-semibold'> Shadcn UI is not actually a component library or UI framework. Instead <br />
     it's “a collection of reusable components that we can copy and paste.</p>

     <div>

      <h1 className='text-center  font-bold italic text-3xl  p-14 underline' > "HOW TO INSTALL IT ?"</h1>

      <p className=' text-center text-2xl text-amber-700 font-semibold p-2' > Run the following command on your cmd (npx shadcn@latest init
      )</p>
      <div>
      <p className=' text-center text-2xl text-amber-700 font-semibold p-2'>
      You will be asked a few questions to configure components.json: <br />

 <h1 className='p-2'> 1. Which style would you like to use? › New York/Default <br /></h1>
  <h2 className='p-2'> 2. Which color would you like to use as base color? › Zinc/Neutral/Slate <br /></h2>
<h3 className='p-2'>3. Do you want to use CSS variables for colors? › no / yes <br /> </h3>
 
      </p>

      <main className=' text-center text-2xl text-amber-800 font-semibold p-2'> (Answer the above
         Questions) </main>

         <h1  className=' text-center  font-bold italic text-3xl  p-14 underline '> 
           "THEMEING OF SHADCN.UI"</h1> 
           <p className=' text-center text-2xl text-amber-700 font-semibold'>
           You can choose between using CSS variables or Tailwind CSS utility classes for theming.</p>
           <h1  className=' text-center  font-bold italic text-3xl  p-14 underline '> 
           "WHY TO USE SHADCN.UI"</h1> 
           <p className=' text-center text-2xl text-amber-700 font-semibold p-2'>
            Shadcn.ui is used for customization. its various features allow you how you can <br>
            </br> make your components and youcan present your projects  in a unique way.  </p>

      </div>
      <p className=' text-center text-1xl italic underline  font-medium p-2'>
        FOR MORE DETAILS ABOUT SHADCN.UI <br />
         <a className="" href = "https://ui.shadcn.com/"> CLICK HERE</a>
      </p>
     </div>
   <h1> 
   MADE BY : HAFSA WAQAR</h1> 

</div>





  )
}

export default page
