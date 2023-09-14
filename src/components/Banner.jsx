import React from "react";

export default function Banner() {
  return (
    <section className="h-96 bg-green-950 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-80"></div>
      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
        <p className="text-2xl">JUST FIND, YOUR PERFUME</p>
        <h2 className="text-6xl">FIND YOUR PERFUME</h2>
      </div>
    </section>
  );
}
