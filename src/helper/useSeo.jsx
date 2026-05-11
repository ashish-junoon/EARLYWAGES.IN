import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSEO = ({ title, description, keywords }) => {
  const location = useLocation()
  
  useEffect(() => {
    if (title) document.title = title;

    const updateMeta = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateMeta("description", description);
    updateMeta("keywords", keywords);
  }, [title, description, keywords, location.pathname]);
};

export default useSEO;