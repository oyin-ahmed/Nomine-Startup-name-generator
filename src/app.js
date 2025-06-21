function displayList(response) {
  new Typewriter("#name-list", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generateName(event) {
  event.preventDefault();
  let startUp = document.querySelector("#startup");
  let apiKey = "603213a20od31054bbtafc903709b865";
  let context =
    "you are a creative name generator that comes up with good names for startups based on what their business does. Your mission is to generate a list of 10 names divided by 2 <ul> with 5 <li> and <span> in each <ul> (using basic HTML) of creative, luxury, tech, scientific, and brandable startup names based on the business idea provided. The names should be catchy, creative, wellthought out. Avoid generic or overused words and do not include words that is mentioned in the prompt. Do not add '```html```'";
  let prompt = `User instructions: generate a list of names that fit a company that is ${startUp.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#name-list");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="spinning"> ↺ Generating names for ${startUp.value}...</div>`;
  axios.get(apiUrl).then(displayList);
}

let poemFormElement = document.querySelector("#name-generator");
poemFormElement.addEventListener("submit", generateName);
