function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add('light')
  }*/

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // substituir text
  if (html.classList.contains("light")) {
    // se tiver light mode, adcionar texto alternativo a imagem light
    img.setAttribute(
      "alt",
      "Mayk brito sorrindo usando oculos escuros e jaqueta de couro preta."
    )
  } else {
    // se tiver sem light mode, manter o texto alternativo a imagem normal
    img.setAttribute(
      "alt",
      "Mayk brito sorrindo usando oculos e jaqueta de couro preta."
    )
  }
}
