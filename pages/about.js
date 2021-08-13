import Head from "next/head";
import React, { Component } from "react";
import "tailwindcss/tailwind.css";

class about extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>About</title>
        </Head>
        <p className="text-black font-extrabold text-5xl underline">ABOUT</p>
        <div className="pt-10">
          <h1 className="font-black font-4xl">Tech Used</h1>
          <div>Next.js</div>
          <div>tailwindcss</div>
          <div>OpenWeather API</div>
          <div>Progressive Web App</div>
        </div>
      </div>
    );
  }
}

export default about;
