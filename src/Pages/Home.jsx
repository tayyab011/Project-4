import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import p1 from '../images/1.jpg'
import p2 from '../images/2.jpg'
import p3 from '../images/3.jpg'
import p4 from '../images/4.jpg'
import p5 from '../images/5.jpg'
import p6 from '../images/6.jpg'
import p7 from '../images/7.jpg'
import p8 from '../images/8.jpg'
import p9 from '../images/9.jpg'
import bg from '../images/bg.jpg'

import p16 from '../images/18.jpg';
import p11 from '../images/500.jpg';
import p12 from '../images/501.jpg';
import p13 from '../images/503.jpg';
import p14 from '../images/600.jpg';
import p15 from '../images/601.jpg';

 const  Home =()=>{
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(
<div className="overflow-hidden bg-orange-200"  >


<div id="home">
  <img src={bg} id='bg'/>
<section className="text-white body-font" id='overlay' >
  <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
    <div className="w-full text-center lg:w-2/3" data-aos='zoom-out'>
      <h1 className="mb-4 text-3xl font-medium text-red-900 title-font sm:text-4xl">Microdosing synth tattooed vexillologist</h1>
      <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      <div className="flex justify-center">
        <Link to={'/about'}>
          
       <button className="inline-flex px-6 py-2 text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-orange-600" id='button'>Learn more </button>
        </Link>
        <Link to={'/blog'}>
              <button className="inline-flex px-6 py-2 ml-4 text-lg text-red-900 bg-orange-100 border-0 rounded focus:outline-none hover:bg-red-200" id='button1'>See blogs</button></Link>
      </div>
    </div>
  </div>
</section>
    </div><br/><br/>

<section className="overflow-hidden text-red-600 bg-orange-200 body-font">
  <div className="container px-10 py-24 mx-auto">
  <div className="flex flex-col">
      <div className="h-1 overflow-hidden bg-red-200 rounded">
        <div className="w-24 h-full bg-orange-500"></div>
      </div>
      <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
        <h1 className="mb-2 text-2xl font-medium text-white sm:w-2/5 title-font sm:mb-0">Space The Final Frontier</h1>
        <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
      </div>
    </div>
    <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
      <div className="p-4 mb-6 md:w-1/3 sm:mb-0" data-aos='fade-left'>
        <div className="h-64 overflow-hidden rounded-lg">
          <img alt="content" className="object-cover object-center w-full h-full" src={p1}/>
        </div>
        <h2 className="mt-5 text-xl font-medium text-white title-font">Shooting Stars</h2>
        <p className="mt-2 text-base leading-relaxed">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="inline-flex items-center mt-3 text-orange-500">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 mb-6 md:w-1/3 sm:mb-0"  data-aos='fade-up'>
        <div className="h-64 overflow-hidden rounded-lg">
          <img alt="content" className="object-cover object-center w-full h-full" src={p2}/>
        </div>
        <h2 className="mt-5 text-xl font-medium text-white title-font">The Catalyzer</h2>
        <p classNamme="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="inline-flex items-center mt-3 text-red-500">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 mb-6 md:w-1/3 sm:mb-0"  data-aos='fade-right'>
        <div className="h-64 overflow-hidden rounded-lg">
          <img alt="content" className="object-cover object-center w-full h-full" src={p3}/>
        </div>
        <h2 className="mt-5 text-xl font-medium text-white title-font">The 400 Blows</h2>
        <p className="mt-2 text-base leading-relaxed">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a className="inline-flex items-center mt-3 text-orange-500">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>



<section class="text-orange-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-900">Subscribe to Newsletter</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-red-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-orange-100 bg-opacity-50 rounded border border-orange-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-red-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative flex-grow w-full">
        <label for="email" class="leading-7 text-sm text-red-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-orange-100 bg-opacity-50 rounded border border-orange-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-red-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" id='button'>Send!</button>
    </div>
  </div>
</section>

<section class="text-orange-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={p14}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={p12}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={p15}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={p11}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={p13}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={p16}/>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-orange-500 body-font">
  <div className="container flex flex-wrap items-center px-10 py-24 mx-auto">
    <div className="pb-10 mb-10 border-b border-gray-200 md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0">
      <h1 className="mb-2 text-2xl font-medium text-orange-900 sm:text-3xl title-font">Pitchfork Kickstarter Taxidermy</h1>
      <p className="text-base leading-relaxed">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
      <a className="inline-flex items-center mt-4 text-red-500">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a></div>
      <div class="flex flex-col md:w-1/2 md:pl-12">
      <img src={p4} id='p4' data-aos='fade-left'/>
      </div>
    </div></section>


    <section className="text-orange-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
        <a className="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" className="block object-cover object-center w-full h-full" src={p5} />
        </a>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-white title-font">CATEGORY</h3>
          <h2 className="text-lg font-medium text-red-900 title-font">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
        </div>
        <div className="w-full p-4 lg:w-1/4 md:w-1/2">
        <a className="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" className="block object-cover object-center w-full h-full" src={p6} />
        </a>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-white title-font">CATEGORY</h3>
          <h2 className="text-lg font-medium text-red-900 title-font">The Catalyzer</h2>
          <p className="mt-1">$16</p>
        </div>
        </div>
        <div className="w-full p-4 lg:w-1/4 md:w-1/2">
        <a className="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" className="block object-cover object-center w-full h-full" src={p7} />
        </a>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-white title-font">CATEGORY</h3>
          <h2 className="text-lg font-medium text-red-900 title-font">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
        </div>
        <div className="w-full p-4 lg:w-1/4 md:w-1/2">
        <a className="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" className="block object-cover object-center w-full h-full" src={p8} />
        </a>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-white title-font">CATEGORY</h3>
          <h2 className="text-lg font-medium text-red-900 title-font">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
        </div>
        </div>
      </div></section>


      <section className="text-orange-600 body-font">
  <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto">
    
    <img className="block object-cover object-center w-2/3 mx-auto mb-10 rounded xl:w-1/4 lg:w-1/3 md:w-1/2" alt="hero" src={p9} />
    <div className="flex flex-col w-full text-center">
      <h1 className="mb-4 text-xl font-medium text-gray-900 title-font">Master Cleanse Reliac Heirloom</h1>
      <p className="mx-auto text-base leading-relaxed lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
  </div>
</section>
</div>
    );
 }
 export default Home;                                                         