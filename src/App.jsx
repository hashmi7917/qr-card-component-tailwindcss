import React from 'react';

function App() {
  return (
    <div className="w-80 max-w-screen-sm mx-auto shadow-2xl rounded-2xl bg-white py-6 h-full">
      <img
        className="w-auto rounded-t-2xl"
        src="https://github.com/hashmi7917/product-preview-card-component-main/blob/main/images/image-product-mobile.jpg?raw=true"
        alt="product-image"
      />
      <div className="flex flex-col justify-evenly py-2 px-6 h-96 min-h-min">
        <h6 className="uppercase text-slate-500 tracking-widest font-light">
          Perfume
        </h6>
        <h1 className="text-3xl font-fraunces">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="font-light">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div>
          <h2>
            $149.99 <span>$169.99</span>
          </h2>
        </div>
        <button className="bg-green-700 text-white font-medium">
          <i></i> Add to Cart
        </button>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="max-w-sm bg-slate-50 rounded-2xl hover:shadow-xl">
      <div className="max-w-sm p-4 shadow-2xl rounded-2xl">
        <img
          className="w-6/24 rounded-2xl"
          src="https://hashmi7917.github.io/Frontend-Menoter-QR-Challenge-Completed/images/image-qr-code.png"
          alt="qr-image"
        />
        <div className="h-52 flex flex-col justify-between text-center p-6">
          <h1 className="text-2xl font-bold text-slate-950">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-slate-500 text-lg">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
