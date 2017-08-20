var $ = require('jquery'),
    carousel = require('./com/carousel'),
    detectionScreen = require('./com/detectionScreen'),
    goTop = require('./com/goTop')

carousel.roll($('.carousel'))

goTop.go($('.go-top'))

