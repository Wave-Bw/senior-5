
  let detectionScreen = (function() {
    let screenWidth = screen.width
    if(screenWidth < 1918) {
      $('.carousel').css({
        "max-width": "1366px",
        "height": "768px"
      })

      $('#poster img').css({
        "width": "410px"
      })
    }
  })()

  module.exports = detectionScreen

