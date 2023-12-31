import Head from "./Components/Head/Head";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features.jsx";
import Articles from "./Components/Articles/Articles.jsx";
import Foot from "./Components/Foot/Foot.jsx";

const App = () => {
  return (
    <>
      <section className={`w-screen min-h-screen bg-c_very_light_gray `}>
        <header className={`w-full h-16 bg-white lg:h-20 fixed z-[999] `} role={`banner`}>
          <Head />
        </header>
        <main
          className={`w-full min-h-screen overflow-x-hidden lg:max-w-[90rem] lg:min-w-[65rem] lg:m-auto`}
         role={`main`}>
          <section
            className={`flex items-center justify-between xl:h-[736px] xl:relative `}>
            <Hero />
          </section>
          <section
            className={` lg:min-w-[65rem] lg:m-auto lg:max-w-[90rem] xl:h-[672px] bg-c_light_grayish_blue pt-16 xl:pt-28 lg:px-[8.5rem]`}
          >
            <Features />
          </section>
          <section
            className={` lg:min-w-[65rem] lg:m-auto lg:max-w-[75rem] pt-16 lg:px-[1rem]`}
          >
            <Articles />
          </section>
        </main>
        <footer className={`w-full bg-c_dark_blue h-[530px] xl:h-fit `} role={`contentinfo`}>
        <Foot/>
        </footer>
      </section>
    </>
  );
};

export default App;
