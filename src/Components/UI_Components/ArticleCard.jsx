const ArticleCard = (props) => {
  return (
    <div className={`w-[327px] h-[394px] bg-white rounded-md overflow-hidden xl:w-[255px]`}>
      <div className={`w-full h-[200px] bg-c_light_grayish_blue object-fill overflow-hidden`}>
        <img src={props.ArticleInfo.img} alt="Article" className={`h-full w-full`}/>
      </div>
      <div className={`w-[265px] m-auto flex items-start justify-start flex-col text-left gap-1.5 mt-8 xl:w-[200px] xl:mt-6`}>
        <p className={`text-[10px] text-c_grayish_blue text-left w-full `}>
          By {props.ArticleInfo.user_name}
        </p>
        <h1 className={`text-base text-c_dark_blue leading-tight mt-1`}>
          {props.ArticleInfo.article_title}
        </h1>
        <p className={`text-[13px] text-c_grayish_blue xl:text-xs xl:pt-1`}>
          {props.ArticleInfo.article_content}
        </p>
      </div>
    </div>
  );
};
export default ArticleCard;
