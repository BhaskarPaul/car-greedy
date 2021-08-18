const startButton = document.getElementById("start");
const display = document.getElementById("result");

// creating child node - paragraph tag, br tag and hr tag
const insertChildIntoDisplay = (description) => {
  if (description === "hr") {
    const hr = document.createElement("hr");
    display.appendChild(hr);
    return;
  }
  if (description !== " ") {
    const p = document.createElement("p");
    const text = document.createTextNode(description);
    p.appendChild(text);
    p.classList.add("desc");
    display.appendChild(p);
  } else {
    const br = document.createElement("br");
    display.appendChild(br);
  }
};

startButton.addEventListener("click", () => {
  // checking child nodes.
  if (display.hasChildNodes()) {
    display.innerHTML = "";
  }

  let petrol = 50;
  insertChildIntoDisplay("Game started");
  insertChildIntoDisplay("hr");

  // creating unique petrol pumps using Set data structure
  const set = new Set();
  while (set.size != 6) {
    const num = Math.floor(Math.random() * 100) + 1;
    set.add(num);
  }
  const petrolPumps = [...set];
  petrolPumps.sort((a, b) => a - b);

  insertChildIntoDisplay(
    `⛽ Petrol pumps generated at ${petrolPumps.join(",  ")}`
  );
  let start = 0,
    move = 0;
  insertChildIntoDisplay(" ");
  while (petrol > 0) {
    move++;
    let step = Math.floor(Math.random() * 6) + 1;
    start += step;
    if (petrolPumps.includes(start)) {
      petrol += 30;
    }
    petrol -= step * 2;
    if (petrol < 0) {
      let extra = 0 - petrol;
      start -= extra / 2;
      petrol = 0;
    }
    let description;
    if (petrol != 0)
      description = `🚖 Move ${move}  -  car at ${start},  petrol remaining ${petrol}`;
    else
      description = `🚖 Move ${move}  -  car at ${start},  petrol remaining ${petrol},  game over`;
    insertChildIntoDisplay(description);
  }
});
