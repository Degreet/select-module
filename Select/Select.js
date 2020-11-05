class Select {
  constructor(placeholder, options) {
    const el = document.createElement("div")
    const placeholderDiv = document.createElement("div")
    const placeholderSpan = document.createElement("span")
    const optionsDiv = document.createElement("div")
    const arrowDownIcon = document.createElement("i")

    el.classList.add("Select-menu")
    optionsDiv.classList.add("options")
    arrowDownIcon.classList.add("arrow", "fa", "fa-arrow-down")

    placeholderSpan.innerHTML = placeholder
    placeholderDiv.classList.add("placeholder")

    el.onclick = () => this.toggle()

    options.forEach((option, i) => {
      const optionEl = document.createElement("div")

      optionEl.innerHTML = option.text || "Error"
      optionEl.classList.add("option")
      optionEl.dataset.value = option.value || `error(${i})`

      optionEl.onclick = () => {
        placeholderSpan.innerHTML = option.text || "Error"
        placeholderSpan.dataset.value = option.value || `error(${i})`

        el.dispatchEvent(new Event("input"))
        el.dispatchEvent(new Event("change"))
      }

      optionsDiv.append(optionEl)
    })

    placeholderDiv.append(placeholderSpan, arrowDownIcon)
    el.append(optionsDiv, placeholderDiv)
    this.el = el
  }

  appendTo(parent) {
    parent.append(this.el)
  }

  connectBasicStyles() {
    const styles = document.createElement("link")
    styles.rel = "stylesheet"
    styles.href = "Select/Select.css"
    document.head.append(styles)

    const fontawesome = document.createElement("link")
    fontawesome.rel = "stylesheet"
    fontawesome.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    document.head.append(fontawesome)

    styles.onload = fontawesome.onload = () => {
      setTimeout(() => this.el.style.width = `${this.el.offsetWidth}px`, 500)
    }
  }

  open() {
    this.el.querySelector(".options").classList.add("show")
  }

  close() {
    this.el.querySelector(".options").classList.remove("show")
  }

  toggle() {
    this.el.querySelector(".options").classList.toggle("show")
  }

  get value() {
    return this.el.querySelector(".placeholder span").dataset.value
  }

  set value(val) {
    const span = this.el.querySelector(".placeholder span")
    const option = this.el.querySelector(`.options .option[data-value="${val}"]`)
    if (!option) return
    
    span.innerHTML = option.innerHTML
    span.dataset.value = val
  }
}