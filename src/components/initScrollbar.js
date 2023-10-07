"use string";

export const initScrollbar = () => {
  Scrollbar.init(document.querySelector("#blog-scrollbar"), {
    damping: 0.1,
    alwaysShowTracks: true,
  });
};
