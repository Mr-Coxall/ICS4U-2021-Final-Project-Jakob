/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'startScreen' })

    this.startScreenBackgroundImage = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
    this.load.image('startScreenBackground', './startimage.png')
  }

  create (data) {
    //let startScreen = true
    this.startScreenBackgroundImage = this.add.sprite(0, 0, 'startScreenBackground')
    this.startScreenBackgroundImage.x = 640 / 2
    this.startScreenBackgroundImage.y = 480 / 2
  }

  update (time, delta) {
    if (time > 4000) {
      this.scene.switch('titleScene')
    }
  }
}
export default SplashScene