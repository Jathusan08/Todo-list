import { tabModule } from "../app.js";
import { checkIfGridTaskExist } from "../Utils/tabUtil.js";

const searchBar = document.querySelector(".searchbar");

export const searchModule = (() => {
  const performSearch = () => {
    searchBar.addEventListener("input", (event) => {
      // Code to execute when the input value changes

      //  console.log("Input value changed:", event.target.value);

      if (event.target.value === "" || event.target.value.trim() === "") {
        //   console.log("empty ");
        if (!checkIfGridTaskExist()) {
          tabModule.loadTaskDataInTab();
        }
      } else {
        tabModule.searchTaskInTab(event.target.value);
      }
    });
  };

  const clearSearchBar = () => {
    searchBar.value = "";
  };

  return { performSearch, clearSearchBar };
})();
