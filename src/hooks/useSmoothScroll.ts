export const useSmoothScroll = () => {
  const scrollToHash = (href: string) => {
    if (!href.startsWith("#")) return;

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    history.pushState(null, "", href);
  };

  const handleClick =
    (href: string) =>
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      scrollToHash(href);
    };

  const scrollOnLoad = () => {
    const hash = window.location.hash;
    if (hash) scrollToHash(hash);
  };

  return { handleClick, scrollOnLoad };
};
