var myTooltipEl = document.getElementById('myTooltip')
var tooltip = new bootstrap.Tooltip(myTooltipEl)

myTooltipEl.addEventListener('hidden.bs.tooltip', function () {
  // do something...
})


tooltip.hide()
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})

