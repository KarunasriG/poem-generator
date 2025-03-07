function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

function generatePoem(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "7d8t09obdd36eff4c3d78d572abcad31";
    let context =
      "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 lines poem which are separated by each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
    let prompt = `User instructions: Generate a Telugu poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a Telugu poem about ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayPoem);
  }

let poemFormElement=document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem);