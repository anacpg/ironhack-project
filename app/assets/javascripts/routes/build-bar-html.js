function buildBarHtml(bar) {
  // add --> buildImage(bar)
  return `<li> ${buildLink(bar)} <br> </li>`
}

function buildBarDescriptionHtml(bar) {
  return `<p> ${bar.description} </p>`
}


function buildLink(bar) {
  return `<a href="${bar.name}" class="js-bar-li"
          bar-id=" ${bar.id}"> ${bar.name} </a>`
}

function buildImage(bar) {
  // return '<img src="' + bar.image + '"><br>'
  return `<img class="js-bar-img" src="" width="20"><br>`
}
