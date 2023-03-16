/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  // theme: {
  //   colors:{
  //     'gray-one': '#f3f4f6'
      
  //   }, 
  //   height:{
  //     '500px': '500px'
  //   },
  //   width:{
  //     '500px': '500px'
  //   },
  //   extend: {},
  // },
  plugins: [
    require('flowbite/plugin')
  ],
}
