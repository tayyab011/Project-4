import React, { useState } from 'react';
import p1 from '../images/m.jpg'
import p2 from '../images/11.jpg'
import p3 from '../images/12.jpg'
import p4 from '../images/18.jpg'
import p5 from '../images/m.jpg'
import p6 from '../images/n.jpg'
import p7 from '../images/o.jpg'
import p8 from '../images/p.jpg'
import Carosol from'./Carosol'

const Parallax = () => {

  const [show,setShow]=useState(false);
  return (
    <div className='bg-orange-200'>
      <section class="text-orange-600 bg-orange-200 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-orange-500 tracking-widest">CEO</h2>
        <h1 class="text-red-900 text-5xl title-font font-medium mb-4"><font className='text-yellow-500'>Animated </font> Night Hill Illustrations</h1>
        <div class="flex mb-4">
          <a class="flex-grow text-orags-500 border-b-2 border-orange-500 py-2 text-lg px-1">Her story</a>
          
        </div>
        <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div class="flex">
          <button class="flex  text-white bg-red-900 border-0 py-2 px-10 focus:outline-none hover:bg-red-600 rounded" id='button'>Button</button>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={p1}/>
    </div>
  </div>
</section>
<section class="text-orange-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex ">
      <img alt="feature" class="object-cover object-center h-full w-full px-2" src={p2}/>
      <img alt="feature" class="object-cover object-center h-full w-full px-2" src={p3}/>
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
      
        <div class="flex-grow">
          <h2 class="text-red-900 text-4xl title-font font-medium mb-3">About us</h2>
          <p class="leading-relaxed text-orange-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci fugiat, facere cum tempora similique culpa aliquid consectetur sit quasi est provident maiores dignissimos, impedit eos suscipit illum distinctio minima delectus temporibus? <br/></p> {show && <p>Rerum, nobis deleniti ut, quo voluptatem inventore impedit tempora qui doloremque iure assumenda animi? Nisi magni odit laudantium aspernatur esse quod atque explicabo, quisquam exercitationem suscipit nobis earum iure quas repellat dolorem dolore voluptates quibusdam quasi quae, fuga excepturi consequatur. Minima exercitationem quo soluta cumque perferendis nulla consectetur nam laudantium quod dolores quia sapiente dolorem reprehenderit, nesciunt aliquid in officiis magnam corporis illo commodi architecto optio alias tempore. <br/> Voluptas accusamus praesentium a beatae ipsa animi aperiam fugit totam id maxime qui doloremque, molestias consequatur exercitationem maiores fugiat quod consequuntur. Accusamus ad, quia, asperiores ipsam est voluptatibus adipisci temporibus nulla quod reprehenderit quos fugiat vel totam id modi laboriosam sint hic. <br/> Porro ullam beatae quia iure autem numquam eum nisi ipsum ducimus explicabo, officia ea dolores dicta suscipit minima doloremque laborum modi nemo praesentium earum tempore odio culpa alias nostrum! Soluta, commodi! Dolore laborum tenetur, soluta perferendis molestiae aspernatur ex, molestias facilis cum eligendi ipsum. Dicta voluptates praesentium quam, modi velit beatae quaerat officiis sit, veniam, nulla ullam sequi! .</p>}
          <button type="button" onClick={()=>setShow(!show)}  class="mt-3 bg-red-900 text-white px-10 hover:bg-orange-600 py-2 inline-flex items-center" id='button'>
          {show ===true ? 'Read less' : 'Read More'}
                     </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="text-orange-600 body-font overflow-hidden ">
  <div class="container px-5 py-36 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-red-900 mt-4 mb-4">Roof party normcore <font className='text-yellow-500'> before they sold out</font> , cornhole vape</h2>
        <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-red-100 mt-auto w-full">
          <a class="text-orange-500 inline-flex items-center">Learn More
            
          </a>
          <span class="text-orange-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-red-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span class="text-white inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src={p1} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-red-900">Holden Caulfield</span>
            <span class="text-orange-400 text-xs tracking-widest mt-0">CEO</span>
          </span>
        </a>
     </div>
     <div className='p-12 sm:w-1/3 md:w-1/2 flex flex-col items-start overflow-auto sm:overflow-auto' id='car' >
      
<Carosol />
     </div>
   </div>
   
   
   </div>
</section>

<section class="text-orange-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src={p4} alt="stats"/>
    </div>
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto md:px-10 lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-4xl mb-2 text-red-900">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-bold text-3xl text-yellow-500">27K+</h2>
        <p class="leading-relaxed">Buyers</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-yellow-600">18K+</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-yellow-500">350+</h2>
        <p class="leading-relaxed">Employees</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-yellow-600">400+</h2>
        <p class="leading-relaxed">Products</p>
      </div>
    </div>
  </div>
</section>

<section class="text-ooange-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
          </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={p5}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-red-900">Holden Caulfield</h2>
            <h3 class="text-yellow-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-red-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-orange-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-red-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={p6}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-red-900">Alper Kamu</h2>
            <h3 class="text-yellow-500 mb-3">Designer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-orange-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-red-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-orange-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={p7}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-red-900">Atticus Finch</h2>
            <h3 class="text-yellow-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-red-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-orange-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-red-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={p8}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-red-900">Henry Letham</h2>
            <h3 class="text-yellow-500 mb-3">Designer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-orange-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-red-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-orange-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Parallax;