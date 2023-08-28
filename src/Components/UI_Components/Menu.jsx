const Menu = () => {
  const mobile_class = `bg-white text-center text-c_dark_blue lg:text-c_grayish_blue w-[329px] m-auto rounded-md h-[265px] flex flex-col gap-5 text-lg items-center justify-center `;
  const laptop_class = `lg:bg-transparent lg:rounded-none lg:flex-row lg:h-full lg:w-1 lg:sm lg:text-left lg:text-sm`;
  const li_class = `cursor-pointer hover:after:content-[""] hover:after:w-full hover:after:h-1 hover:after:bg-c_gradient hover:after:absolute relative hover:after:-bottom-7 hover:after:right-0 hover:after:rounded-full`;
  return (
    <>
      <ul className={`${mobile_class} ${laptop_class}`}>
        <li className={li_class}>Home</li>
        <li className={li_class}>About</li>
        <li className={li_class}>Contact</li>
        <li className={li_class}>Blog</li>
        <li className={li_class}>Careers</li>
      </ul>
    </>
  );
};

export default Menu;
