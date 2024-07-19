"use client"
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
<Typewriter
  onInit={
    (typewriter) => 
    {
        typewriter.typeString(`<h1>Hi,</h1>
          <h2>Welcome to CodeSquad.</h2>
          <h3>Dive in, challenge yourself, and grow with a community that's as passionate about tech as you are!</h3>`)
      .callFunction(() => {
        stop();
      })
      .start();
    }} 
    options={{
        autoStart: true,
        loop: false,
        deleteSpeed: 83,
        cursor: '_',  
        delay: 11,
    }}
/>
  );
}