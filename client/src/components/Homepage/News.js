import React from "react";
import "./news.css";

import { useTranslation } from "react-i18next";

const News = ({ loadNew, news }) => {
  const { t } = useTranslation();
  // useEffect(loadNew, []);

  return (
    <div className="news">
      <div className="news__news">news</div>
      {/* ajouter word of the day */}
      <h2 className="news__title">{t("Latest updates")}</h2>
      <div className="news__latest">
        {news?.map((latestNew) => {
          const latestN = new Date(latestNew.createdAt);
          const month = latestN.toLocaleString("default", { month: "long" });

          return (
            <p key={latestNew.id}>
              {latestN.getUTCDate()} {month}: {latestNew.content}
            </p>
          );
        })}
      </div>

      {/* <img
        className="news__image"
        src="https://image.shutterstock.com/shutterstock/photos/1857699742/display_1500/stock-vector-weekly-or-daily-newspaper-with-articles-news-sheet-with-picture-and-text-folded-tabloid-isolated-1857699742.jpg"
        alt=""
      /> */}
    </div>
  );
};

export default News;
