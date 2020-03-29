'use strict';

const searchURL = "https://api.github.com/users"

function formatPath(path) {
    const pathItem = Object.keys(path)
    .map(key => `${path[key]}`)
    return pathItem;
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('#results-list').empty();
    for (let i = 0; i < responseJson.length; i++){
      $('#results-list').append(
        `<li><h3>${responseJson[i].name}</h3>
            <p><a href="${responseJson[i].html_url}">Link</a></p>
        </li>`
      )};
    $('#results').removeClass('hidden');
    };

function getRepos(userHandle) {
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
      .then(responseJson => displayResults(responseJson))
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