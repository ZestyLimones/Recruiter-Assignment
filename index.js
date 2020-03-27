'use strict';

const searchURL = "https://api.github.com/users/"

function getRepos() {

    fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}
$(getRepos);