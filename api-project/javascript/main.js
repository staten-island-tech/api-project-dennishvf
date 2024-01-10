import { Domselectors } from "./dom";
import "../css/style.css";

const iurl = `http://universities.hipolabs.com/search?country=United States`;
function iInsert(iarr) {
  iarr.forEach((School) => {
    document.querySelector(".Flex-container").insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
     <h2 class="Uname">${School.name}</h2>
     <h3 class="Ulink">${School.web_pages}</h3>
     </div>`
    );
  });
}

async function igetData(URL) {
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    console.log(data);
    iInsert(data);
    //if data length 0 then error
}
igetData(iurl);

//search bar
Domselectors.Form.addEventListener("submit", function (event) {
  event.preventDefault();
  Domselectors.FlexContainer.innerHTML = "";
  var ser = `${Domselectors.SearchBar.value}`;
  console.log(ser);
  const URL = `http://universities.hipolabs.com/search?country=${ser}`;

  function Insert(arr) {
    arr.forEach((School) => {
      document.querySelector(".Flex-container").insertAdjacentHTML(
        "afterbegin",
        `<div class="card">
     <h2 class="Uname">${School.name}</h2>
     <h3 class="Ulink">${School.web_pages}</h3>
     </div>`
      );
    });
  }

  async function getData(URL) {
    try {
      const response = await fetch(URL);
      if (response.status != 200) {
        throw new Error(response.statusText);
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      Insert(data);
      //if data length 0 then error
      if (data.length === 0) {
        Domselectors.error.textContent = "Error";
        Domselectors.FlexContainer.innerHTML = "";
      } else {
        Domselectors.error.textContent = "";
      }
    } catch (error) {
      Domselectors.error.textContent = "Error";
    }
  }
  getData(URL);
});

