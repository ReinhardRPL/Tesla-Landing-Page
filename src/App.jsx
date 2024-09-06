import React from 'react';
import Navbar from './component/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

 
      <section className="relative flex min-h-screen mb-[10px] bg-black text-white video-spacing">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="./assets/Video Mobil.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 bg-rose-500 bg-opacity-10 flex flex-col justify-center items-center w-full text-center z-10">
          <h1 className="text-4xl font-bold mb-6">WELCOME TO THE TESLA WEBSITE</h1>
          <p className="text-lg mb-8 max-w-[650px]">
            Discover your dream vehicle at Tesla. From high-performance cars, motorcycles, and accessories to cutting-edge technology, we deliver an extraordinary driving experience."
          </p>
        </div>
      </section>

      <section id="cars" className="flex min-h-screen bg-[url('./assets/mobil.png')] bg-cover bg-center text-white cars-spacing">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center w-full text-center py-20 px-6 z-10">
          <h1 className="text-5xl font-bold mb-6">Cars</h1>
          <p className="text-xl mb-8 max-w-[850px]">
            Our cars combine elegant design with impressive performance. With luxurious interiors and the latest technology, our sedans offer comfort and sophistication on every journey. Ideal for everyday travel and special occasions.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Order Now</button>
            <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200">Demo Drive</button>
          </div>
        </div>
      </section>

      
      <section id="motors" className="flex min-h-screen bg-[url('./assets/motor.png')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center w-full text-center py-20 px-6 z-10">
          <h1 className="text-5xl font-bold mb-6">Motorcycles</h1>
          <p className="text-xl mb-8 max-w-[900px]">
            Whether you're looking for a powerful sports bike or a practical scooter for daily mobility, our collection offers options that match your lifestyle. Discover your dream motorcycle and experience unparalleled riding sensation.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Order Now</button>
            <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200">Demo Drive</button>
          </div>
        </div>
      </section>

     
      <section id="accessories" className="flex min-h-screen bg-[url('./assets/accesories.png')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center w-full text-center py-20 px-6 z-10">
          <h1 className="text-5xl font-bold mb-6">Accessories</h1>
          <p className="text-xl mb-8 max-w-[900px]">
            Complete your experience with our wide range of accessories, designed for both style and functionality. From premium sound systems to personalized interior enhancements, find the perfect complement to your vehicle.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Order Now</button>
            <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200">Demo Drive</button>
          </div>
        </div>
      </section>

   
      <section id="about-us" className="flex flex-col min-h-screen bg-black text-white">
        <div className="relative flex flex-col justify-center items-center w-full text-center py-12 px-6">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl mb-12 max-w-[700px]">
            At Tesla, we are committed to innovation and excellence in the automotive industry. Our mission is to accelerate the world's transition to sustainable energy through electric vehicles and renewable energy products. Learn more about our history, values, and vision as we strive to lead the future of transportation.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full py-10 px-6">
          <div className="flex justify-center gap-10">
            <img src="./assets/Nisan-GTR.png" alt="Nissan GTR" className="w-[30%] h-auto object-cover rounded" />
            <img src="./assets/skyline.png" alt="Skyline" className="w-[30%] h-auto object-cover rounded" />
            <img src="./assets/supra.png" alt="Supra" className="w-[30%] h-auto object-cover rounded" />
          </div>
        </div>
      </section>

   
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2024 TESLA. Semua hak cipta dilindungi.</p>
      </footer>
    </div>
  );
}

export default App;
