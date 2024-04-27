const Example = () => {
  return (
    <>
      <div class="">
        <h2 class="font-bold text-center">class='None'</h2>
        <ul class="">
          <li class="bg-gray-200">Item 1</li>
          <li class="bg-gray-300">Item 2</li>
          <li class="bg-gray-400">Item 3</li>
        </ul>
      </div>
      <br></br>

      <div class="">
        <h2 class="font-bold text-center">class='grid'</h2>
        <ul class="grid">
          <li class="bg-gray-200">Item 1</li>
          <li class="bg-gray-300">Item 2</li>
          <li class="bg-gray-400">Item 3</li>
        </ul>
      </div>
      <br></br>

      <br></br>


      <div>
        <h2 class="font-bold text-center">class='flex'</h2>
        <ul class="flex flex-wrap">
          <li class="bg-gray-200">Item 1</li>
          <li class="bg-gray-300">Item 2</li>
          <li class="bg-gray-400">Item 3</li>
        </ul>
      </div>
      <br></br>

      
      {/* We can't give multiple styles to a certain breakpoint in a single writting of class name, 
          we have to write the breakpoint name(sm/lg/xl)multiple times as many times we want to add multiple styles 
          to a similar breake point as below.
          class='sm:bg-blue-5000 lg:bg-red-400 lg:text-center lg:w-1/2'
          
          we can't give multiple styles to a single breake point by writing breakpoint only once.
          class='lg:bg-blue-300 text-center'  #not work
      */}
      <div>
        <h1 class='font-bold text-center border h-8 m-2'>Breakpoints</h1>
        <ul class='text-center'>
          <li>sm - 640px and above.</li>
          <li>md - 768px and above.</li>
          <li>lg - 1024px and above</li>
          <li>xl - 1280px and above.</li>
          <li>2xl - 1536px and above.</li>
        </ul>
      </div>
      <div class="
            w h-20 border text-center bg-red-600
            sm:bg-blue-600
            md:bg-orange-400
            lg:bg-green-600
            ">
            width = none = 100%
      </div>
      <div class="
            w-1/2 h-20 border text-center bg-red-600
            sm:bg-blue-600
            md:bg-orange-400
            lg:bg-green-600
            ">
            width = 1/2 = 50%
      </div>
      <div class="
            w-1/3 h-20 border text-center bg-red-600
            sm:bg-blue-600
            md:bg-orange-400
            lg:bg-green-600
            ">
            width = 1/3 = 33.33%
      </div>
      <div class="
            w-1/4 h-20 border text-center bg-red-600
            sm:bg-blue-600
            md:bg-orange-400
            lg:bg-green-600
            ">
            idth = 1/4 = 25%
      </div><br></br><br></br>

      <div>
        <h1 class='font-bold text-center'>Changing Display properties</h1>
        <h1 class='font-bold text-center'>felx - grid & grid-flex</h1>
        <div class='flex sm:grid'>
          <li class=''>List1</li>
          <li class=''>List2</li>
          <li class=''>List3</li>
          <li class=''>List4</li>
        </div><br></br>
        <div class='grid sm:flex'>
          <li class=''>List1</li>
          <li class=''>List2</li>
          <li class=''>List3</li>
          <li class=''>List4</li>
        </div>
      </div>



    <div class='flex border justify-between'>
      <div class="font-bold flex justify-center">LOGO</div>
      <div>
      <ul className="flex items-center text-center text-lg font-sans border-2 p-1 m-2 sm:flex">
        <li class='bg-gray-300 m-.5 '>
          <a href="#" className="">
            Home
          </a>
        </li>
        <li class='bg-gray-300 m-.5 '>
          <a href="#" className="">
            Flashcard
          </a>
        </li>
        <li class='bg-gray-300 m-.5 '>
          <a href="#" className="">
            Contact
          </a>
        </li>
        <li class='bg-gray-300 m-.5 '>
          <a href="#" className="">
            FAQ
          </a>
        </li>
        <li class='bg-gray-300'>
          <a href="#" className="">
            <button className="bg-gradient-to-t from-blue-600 to-blue-900 text-white rounded-2xl px-6 py-1">
              Login
            </button>
          </a>
        </li>
      </ul>
      </div>
      </div>
      <br></br><br></br>
    </>
  );
};

export default Example;
