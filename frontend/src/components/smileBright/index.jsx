import React from "react";

const SmileBright2 = () => {
  return (

    <div
      className=" contactMap  max-w-[1440px] bg-no-repeat bg-center  min-h-[562px] mb-[150px]  sm:mb-[100px]  items-baseline mx-auto "
    >
      <div className=" max-w-[1170px] mx-auto relative ">
        <div className="bg-[#333333] absolute xl:top-[400px] lg:top-[350px] md:top-[400px] sm:top-[400px] top-[400px]  bg-cover bg-center lg:mx-[100px] mx-[24px] sm:mx-[56px]  xl:mx-auto max-w-[1170px] rounded-[10px]">
          <div
           
            className=" contactCard  h-full bg-none lg:bg-bottom bg-no-repeat    flex flex-col lg:flex-row gap-[40px] text-center py-[56px] text-[#FFFFFF] px-[24px] lg:px-[48px]"
          >
            <div className="  bg-center flex flex-col gap-[24px]">
              <h2 className="lg:text-[32px] md:text-[30px] text-[28px] font-semibold text-start leading-[35px] lg:leading-[40px] ">
                Ready to Smile Bright? Schedule Your Visit!
              </h2>
              <div
              className=' lg:bg-none flex flex-col gap-[40px] lg:flex-row justify-between ' >
                <p className=" text-start w-[100%] md:w-[80%] lg:w-[60%] lg:text-[20px] ">
                  Looking for expert dental care? Make an appointment now and
                  let our skilled professionals take care of your oral health.
                </p>
                <button className=" w-[161px] h-[58px] py-[18px] px-[32px] rounded-[50px] border-[1px]">
                  Book Online
                </button>
              </div>
            </div>
          </div>
      
      </div>
     </div>
    <div/>
   </div>
  );
};

export default SmileBright2;
