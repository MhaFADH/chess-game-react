export default () => {
  const noSelectElements = document.querySelectorAll(".no-select")
  noSelectElements.forEach((element) => {
    element.style.webkitUserSelect = "none"
    element.style.mozUserSelect = "none"
    element.style.msUserSelect = "none"
    element.style.userSelect = "none"
  })
}
