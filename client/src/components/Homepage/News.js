import React from "react";
import "./news.css";

import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="news">
      <h2 className="news__title">{t("Latest updates")}</h2>
    </div>
  );
};

export default News;
