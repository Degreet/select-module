const select = new Select("placeholder", [
  {
    text: "First",
    value: 1,
    selected: false
  },
  {
    text: "Second",
    value: 2,
    selected: false
  },
  {
    text: "Third",
    value: 3,
    selected: false
  }
])

select.connectBasicStyles()
select.appendTo(selectEl)