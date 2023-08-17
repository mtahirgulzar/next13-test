import React from "react";
import Link from "next/link";

function About() {
  return (
    <>
      <div>About</div>
      <Link href={`/about/test`}>
        <button className="px-[5px] border-[2px] border-black rounded-[2px] bg-blue-700 text-white ">
          click me
        </button>
      </Link>
    </>
  );
}

export default About;
