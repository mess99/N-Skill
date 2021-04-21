import React from "react";
import "./news.css";

import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="news">
      {/* ajouter word of the day */}
      <h2 className="news__title">{t("Latest updates")}</h2>
      <img
        className="news__image"
        src="https://image.shutterstock.com/shutterstock/photos/1857699742/display_1500/stock-vector-weekly-or-daily-newspaper-with-articles-news-sheet-with-picture-and-text-folded-tabloid-isolated-1857699742.jpg"
        alt=""
      />
    </div>
  );
};

export default News;
