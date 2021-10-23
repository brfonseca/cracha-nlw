const LinksSocialMedia = {
  github = 'brfonseca',
  instagram = 'b.rfonseca',
  twitter = 'brendsff'
}
function changeLinksSocialMedia(){
for (let li of socialLinks.children){
const social = li.getAttribute('class')
}
li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

}
changelinksSocialMedia()

function getGitHubProfileInfos (){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => { userName.textContent = data.name
    userBio.textContent = data.bio

  })
}