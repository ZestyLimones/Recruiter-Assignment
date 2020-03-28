'use strict';

const searchURL = "https://api.github.com/users"

function formatPath(path) {
    const pathItem = Object.keys(path)
    .map(key => `${path[key]}`)
    return pathItem;
}

function getRepos(userHandle,) {
    const path = {
        userHandle,
    }

    const pathString = formatPath(path);
    const url = searchURL + "/" + pathString + "/repos";

    console.log(url);

    fetch(url)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => console.log(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      });
}

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        const searchUser = $('#js-user-search').val();
        getRepos(searchUser,);
    })
}

$(watchForm);