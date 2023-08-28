import FeatureList from "../UI_Components/FeatureList.jsx";

const Features = () => {
  const features_list = [
    {
      img: "../../src/assets/images/icon-api.svg",
      title: "Online Banking",
      content: `Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.`,
    },
		{
			img: "../../src/assets/images/icon-budgeting.svg",
			title: "Simple Budgeting",
			content: `See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.`,
		},
		{
			img: "../../src/assets/images/icon-onboarding.svg",
			title: "Fast Onboarding",
			content: `We don't do branches. Open your account in minutes online and start taking control of your finances right away.`,
		},
		{
			img: "../../src/assets/images/icon-api.svg",
			title: "Open API",
			content: `Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`,
		},
  ];
  return (
    <>
      <section
        className={`flex items-center justify-center flex-col  text-center text-c_dark_blue xl:text-left`}
      >
        <div className={`xl:w-full `}>
          <h1 className={`text-4xl`}>Why choose Easybank?</h1>
          <p className={`px-7 text-base pt-4 text-c_grayish_blue xl:px-0 xl:w-[38rem] xl:text-base`}>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <FeatureList
				Feature_Online={features_list[0]}
				Feature_Budgeting={features_list[1]}
				Feature_Onboarding={features_list[2]}
				Feature_Api={features_list[3]}
				/>
      </section>
    </>
  );
};
export default Features;
