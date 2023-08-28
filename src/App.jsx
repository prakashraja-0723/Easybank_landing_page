import Head from "./Components/Head/Head";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features.jsx";
import Articles from "./Components/Articles/Articles.jsx";
import Button from "./Components/UI_Components/Button.jsx";

const App = () => {
  return (
    <>
      <section className={`w-screen min-h-screen bg-c_very_light_gray `}>
        <header className={`w-full h-16 bg-white lg:h-20 fixed z-[999] `}>
          <Head />
        </header>
        <main
          className={`w-full min-h-screen bg-c_very_light_gray overflow-hidden`}
        >
          <section
            className={`flex items-center justify-between lg:min-w-[65rem] lg:m-auto lg:max-w-[90rem]  xl:h-[736px] xl:relative `}
          >
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
        <footer className={`w-full bg-c_dark_blue h-[530px] xl:h-fit `}>
          <div
            className={`py-12 px-12 flex flex-col items-center justify-start gap-3 xl:flex-row xl:h-fit  lg:min-w-[65rem] lg:m-auto lg:max-w-[75rem] lg:py-3 lg:px-10 `}
          >
            <div className={` flex items-center justify-center flex-col gap-6 xl:mr-44 lg:items-start`}>
              <img src="./src/assets/images/logo-white.svg" alt="logo" />
              <ul className={`flex items-center justify-center gap-5`}>
                <li>
                  <img
                    src="./src/assets/images/icon-facebook.svg"
                    alt="_facebooklogo"
                  />
                </li>
                <li>
                  <img
                    src="./src/assets/images/icon-youtube.svg"
                    alt="_youtubelogo"
                  />
                </li>
                <li>
                  <img
                    src="./src/assets/images/icon-twitter.svg"
                    alt="_twitterlogo"
                  />
                </li>
                <li>
                  <img
                    src="./src/assets/images/icon-pinterest.svg"
                    alt="_pinterestlogo"
                  />
                </li>
                <li>
                  <img
                    src="./src/assets/images/icon-instagram.svg"
                    alt="_instagramlogo"
                  />
                </li>
              </ul>
            </div>
            <div
              className={`flex items-center justify-center flex-col gap-4 py-7 text-c_light_grayish_blue text-sm xl:flex-row lg:text-base lg:gap-10`}
            >
              <ul className={`flex items-center justify-center flex-col gap-4 lg:items-start`}>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
              <ul className={`flex items-center justify-center flex-col gap-4 lg:items-start`}>
                <li>Careers</li>
                <li>support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className={`flex items-center justify-center flex-col gap-5 flex-1 xl:justify-end xl:items-end`}>
              <Button />
              <p className={`text-c_grayish_blue text-sm`}>
                &copy;Easybank. All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default App;
