function buildBarHtml(bar) {
  // add --> buildImage(bar)
  return `<li id="${bar.id}"> ${buildLink(bar)} ${buildImage(bar)}<br> </li>`
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
  return `<img class="js-bar-img" src="${bar.image}" width="200"><br>`
}
