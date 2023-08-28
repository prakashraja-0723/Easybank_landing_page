
const FeatureList = (props) => {
	const feature_class={
		ul_class:`flex items-center justify-center flex-col gap-14 py-14 w-10/12 xl:w-full xl:gap-[30px] xl:flex-row  xl:w-full xl:items-start xl:justify-start xl:py-20`,
		li_class:`flex items-center justify-center flex-col gap-5 xl:items-start xl:justify-start`,
		h1_class:`text-2xl text-c_dark_blue`,
		p_class:`text-sm text-c_grayish_blue xl:w-[95%] xl:text-base`
	}
	return (
    <>
      <ul className={`${feature_class.ul_class} `}>
        <li className={`${feature_class.li_class} `}>
          <img
            src={props.Feature_Online.img}
            alt="Online Banking"
            className={``}
          />
          <h1 className={feature_class.h1_class}>
            {props.Feature_Online.title}
          </h1>
          <p className={feature_class.p_class}>
            {props.Feature_Online.content}
          </p>
        </li>
        <li className={feature_class.li_class}>
          <img
            src={props.Feature_Budgeting.img}
            alt="Simple Budgeting"
            className={``}
          />
          <h1 className={feature_class.h1_class}>
            {props.Feature_Budgeting.title}
          </h1>
          <p className={feature_class.p_class}>
            {props.Feature_Budgeting.content}
          </p>
        </li>
        <li className={feature_class.li_class}>
          <img
            src={props.Feature_Onboarding.img}
            alt="Fast Onboarding"
            className={``}
          />
          <h1 className={feature_class.h1_class}>
            {props.Feature_Onboarding.title}
          </h1>
          <p className={feature_class.p_class}>
            {props.Feature_Onboarding.content}
          </p>
        </li>
        <li className={feature_class.li_class}>
          <img src={props.Feature_Api.img} alt="Open Api" className={``} />
          <h1 className={feature_class.h1_class}>{props.Feature_Api.title}</h1>
          <p className={feature_class.p_class}>{props.Feature_Api.content}</p>
        </li>
      </ul>
    </>
  );
}
export default FeatureList
