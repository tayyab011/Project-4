import React from 'react';
import p10 from '../images/10.jpg'
const Contact = () => {
    return (
        <div className='bg-orange-200'>
          <section class="text-gray-600 bg-orange-200 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/ rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <img src={p10}/>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-orange-200 flex px-5 py-2 flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-red-900 text-xl mb-1 font-bold title-font">Contact us</h2>
      <p class="leading-relaxed mb-5 text-orange-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-red-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-orange-50 rounded border border-red-300 focus:border-orange-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-red-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-orange-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-orange-50 rounded border border-orange-300 focus:border-red-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-orange-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-red-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-orange-50 rounded border border-red-300 focus:border-orange-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-red-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Submit</button>

    </div>
  </div>
</section>  
        </div>
    );
};

export default Contact;