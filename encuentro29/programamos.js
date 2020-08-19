function getGithubUserInformation(username) {
  fetch("https://api.github.com/users/" + username)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      // Javascript Object Notation
      alert(
        `Nombre de usuario: ${json.login}, cantidad de seguidores: ${json.followers}, cantidad de personas que sigue: ${json.following}, cantidad de repos publicos: ${json.public_repos}`
      );
    });
}

getGithubUserInformation("gerardosabetta");


// Mas info 👇🏻
// https://codepen.io/acamica_dwfs/pen/MWaJJRK?editors=1010