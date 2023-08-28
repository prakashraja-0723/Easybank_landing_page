import ArticleCard from "../UI_Components/ArticleCard.jsx";

const Articles = () => {
  const article_card_info = [
    {
      img: "/src/assets/images/image-currency.jpg",
      user_name:'Claire Robinson',
      article_title: `Receive money in any currency with no fees`,
      article_content:`The world is getting smaller and were becoming more mobile. So why should you be forced to only receive money in a single ...`
    },
    {
      img: "/src/assets/images/image-restaurant.jpg",
      user_name:'Wilson Hutton',
      article_title: `Treat yourself without worrying about money`,
      article_content:`Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...`
    },
    {
      img: "/src/assets/images/image-plane.jpg",
      user_name:'Claire Robinson',
      article_title: `Take your Easybank card wherever you go`,
      article_content:`We want you to enjoy your travels. This IS why we don't charge any fees on purchases while you're abroad. We'll even show you ...`
    },
    {
      img: "/src/assets/images/image-confetti.jpg",
      user_name:'Wilson Hutton',
      article_title: `Our invite-only Beta accounts are now live!`,
      article_content:`After a lot of hard work by the whole team. we're excited to launch our closed beta. It's easy to request an invite through the site ...`
    },
  ];
  return (
    <>
      <section
        className={`flex items-center justify-center flex-col  text-center text-c_dark_blue pb-16 xl:pt-4 `}
      >
        <h1 className={`text-4xl text-left xl:w-full`}>Latest Article</h1>
        <div className={`flex items-center justify-between flex-col gap-6 xl:flex-row mt-16 xl:gap-11`}>
          <ArticleCard ArticleInfo={article_card_info[0]}/>
          <ArticleCard ArticleInfo={article_card_info[1]}/>
          <ArticleCard ArticleInfo={article_card_info[2]}/>
          <ArticleCard ArticleInfo={article_card_info[3]}/>
        </div>
      </section>
    </>
  );
};
export default Articles;
