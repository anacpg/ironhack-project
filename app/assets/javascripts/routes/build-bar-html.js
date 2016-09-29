function buildBarHtml(bar) {
  return `<li class="li-bar list-group-item" id="${bar.id}"> ${buildLink(bar)} ${buildImage(bar)}<br> </li>`
}

function buildBarDescriptionHtml(bar) {
  return `<p> ${bar.description} </p>`
}


function buildLink(bar) {
      return `<a href="#" class="js-bar-li"
          bar-id=" ${bar.id}"> ${bar.name} </a>`
}

function buildImage(bar) {
  return `<img class="js-bar-img" src="${bar.image}" width="150"><br>`
}
