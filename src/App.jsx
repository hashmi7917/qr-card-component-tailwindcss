import React from 'react';

function App() {
  return (
    <div className=" max-w-sm mx-auto shadow-2xl rounded-2xl bg-white h-full hover:shadow-neutral-600">
      <img
        className="w-auto rounded-t-2xl hover:animate-pulse"
        src="https://github.com/hashmi7917/product-preview-card-component-main/blob/main/images/image-product-mobile.jpg?raw=true"
        alt="product-image"
      />
      <div className="flex flex-col justify-between px-6 pt-4 py-6 h-full">
        <h6 className="uppercase text-slate-500 font-medium tracking-widest">
          Perfume
        </h6>
        <h1 className="text-4xl font-fraunces text-primary-verydarkblue py-2">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="font-medium text-primary-darkgreyishblue text-md tracking-normal leading-7 py-4">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div
          className="flex items-center justify-between text-primary-darkcyan w-40 pb-6 py-2
        "
        >
          <h2 className="font-fraunces text-4xl">$149.99 </h2>
          <span className="line-through text-slate-400 text-md font-montserrat px-6">
            $169.99
          </span>
        </div>
        <button className="flex items-center justify-center p-4 text-bold bg-primary-darkcyan text-white font-medium rounded-lg shadow-lg cursor-pointer hover:bg-green-900 ease-in-out">
          <span>
            <img
              className="h-5 px-4"
              src="https://raw.githubusercontent.com/hashmi7917/product-preview-card-component-main/1db32a312ede2ea9788cbee1d814d68cb6241278/images/icon-cart.svg"
            />
          </span>
          Add to Cart
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
