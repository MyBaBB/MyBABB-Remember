// eslint-disable-next-line no-unused-vars
import React from "react";

function Copyright() {
  return (
<div className=" relative flex justify-between mt-2 -mb-2  w-full   ">
  <div  >
<button id="shareButton" onClick={() => {
  navigator.share({
    title: 'Fishy-Notes',
    text: 'Check out this awesome website! Use the link below to access it.',
    url: window.location.href,
    icon: '../../../../public/logo256.png',
  }).then(() => {
    console.log('Shared successfully.');
  }).catch((error) => {
    console.error('Error sharing:', error);
  });
}}>
  <span className="font-LibreBaskerville-Bold text-blue-400 hover:opacity-50" >Share</span>
</button>
</div>
<div  className=" w-fit">
    <a href="https://mybabb.com">
     
        <p className="relative m-auto -bottom-2 flex w-fit whitespace-nowrap font-Orbitron-Regular ">
          <span className="z-1 text-xs  text-[7px] text-blue-200 sm:text-[9px]">
            &lt;&lt;&lt;&nbsp;&copy;
            <span className="font-Aclonica-Regular text-orange-500">
              &nbsp;MyBaBB
            </span>{" "}
            <em>12-2023</em>
            &nbsp;&gt;&gt;&gt;
          </span>
        </p>
        </a>
      </div>
  
</div>
  );
}

export default Copyright;
