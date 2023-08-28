import Mobile_Mockup from "/src/assets/images/image-mockups.png";
import Button from "../UI_Components/Button.jsx";
const Hero = () => {
  return (
    <>
      <section
        className={`w-full h-screen flex items-center justify-center flex-col xl:flex-row-reverse xl:h-[736px] lg:ml-[8.5rem]`}
      >
        <div
          className={`bg-hero_mobile_bg w-full h-[345px] bg-no-repeat relative xl:h-full xl:bg-hero_desktop_bg xl:w-[60%]`}
          style={{ backgroundPositionY: "60%", backgroundPositionX: "10.5%" }}
        >
          <img
            src={Mobile_Mockup}
            alt="Mobile Mockup"
            className={`absolute -top-[17.5%] w-[92%] left-1/2 -translate-x-1/2 xl:w-full xl:-top-11 xl:left-[67%]`}
          />
        </div>
        <div
          className={`flex items-center justify-center flex-col text-center flex-1 gap-6 mt-3.5 xl:items-start xl:justify-start xl:text-left`}
        >
          <h1
            className={`text-[2.5rem] leading-tight font-light xl:text-5xl xl:w-10/12`}
          >
            Next generation digital banking
          </h1>
          <p className={`text-c_grayish_blue text-base xl:w-[80%]`}>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving. budgeting. investing, and much
            more.
          </p>
          <Button />
        </div>
      </section>
    </>
  );
};
export default Hero;
