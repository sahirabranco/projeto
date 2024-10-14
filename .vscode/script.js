function toggleMode() {
  const html = document.documentElement

  /* 
  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}

 já existe uma função toggle que é mais simples e ja fornecido pela ferramenta do programa*/

  html.classList.toggle("light")
}
