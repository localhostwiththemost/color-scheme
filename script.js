"use strict";

const seedColor = document.getElementById("seed-color").value;
const hexCode = seedColor.substring(1); // Removes # from hex code
const colorScheme = document.getElementById("select-scheme").value;

document.getElementById("getscheme-btn").addEventListener("click", function () {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexCode}&mode=${colorScheme}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.colors[0].hex.value);

      document.getElementById("colors").innerHTML = `
          <div class="color-scheme">
          <div class="color" style="background-color:${data.colors[0].hex.value}"></div>
          <div class="color" style="background-color:${data.colors[1].hex.value}"></div>
          <div class="color" style="background-color:${data.colors[2].hex.value}"></div>
          <div class="color" style="background-color:${data.colors[3].hex.value}"></div>
          <div class="color" style="background-color:${data.colors[4].hex.value}"></div>
          </div>
          `;

      document.getElementById("hex-codes").innerHTML = `
          <div class="hex-scheme">      
          <div class="hex"><p>${data.colors[0].hex.value}</p></div>
                <div class="hex"><p class="copy-hex">${data.colors[1].hex.value}</p></div>
                <div class="hex"><p class="copy-hex">${data.colors[2].hex.value}</p></div>
                <div class="hex"><p class="copy-hex">${data.colors[3].hex.value}</p></div>
                <div class="hex"><p class="copy-hex">${data.colors[4].hex.value}</p></div>
               </div>
                `;
    });
});
