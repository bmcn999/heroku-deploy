const detail = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("recipe");
  console.log(recipeId);

  fetch(`api/recipes/${recipeId}`)
    .then(response => response.json())
    .then(recipe => renderStory(recipe));

  const renderStory = recipe => {
    console.log(recipe);
    recipeEl = document.createElement("div");
    recipeEl.innerHTML = `
        <img src="img/${recipe.image}" />
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <a href="/">Back</a>
        `;
    document.querySelector("#root").append(recipeEl);

    // NEW
    const editForm = document.querySelector("form");
    // console.log(editForm.description);
    editForm.title.value = recipe.title;
    editForm.image.value = recipe.image;
    editForm.description.value = recipe.description;
    // END NEW
  };
};

const updateRecipe = () => {
  const editForm = document.querySelector("form");
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("recipe");

  const updatedRecipe = {
    title: editForm.title.value,
    image: editForm.image.value,
    description: editForm.description.value
  };

  const options = {
    method: "PUT",
    body: JSON.stringify(updatedRecipe),
    headers: { "Content-Type": "application/json" }
  };
  console.log("options.body ", options.body);
  fetch(`api/recipes/5dc9fe6f99e80c190a48a08e`, options).then(response =>
    console.log("response ", response)
  );
  event.preventDefault();
};

detail();
