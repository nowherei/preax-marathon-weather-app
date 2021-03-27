window.onload = () => {
  const search = document.getElementById("search");
  const openButton = document.getElementById("openSearch");
  const closeSearch = document.getElementById("closeSearch");

  openButton.addEventListener("click", () => {
    search.classList.add("search_opened");
  });

  closeSearch.addEventListener("click", () => {
    search.classList.remove("search_opened");
  });
};
