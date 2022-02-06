/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'startScreen' })

    this.splashSceneBackgroundImage = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
    this.load.image('startScreenBackground', './Untitled.png')
  }

  create (data) {
    //let startScreen = true
    this.startScreenBackgroundImage = this.add.sprite(0, 0, 'startScreenBackground')
    this.startScreenBackgroundImage.x = 640 / 1.9
    this.startScreenBackgroundImage.y = 480 / 2
  }

  update (time, delta) {
    if (time > 4000) {
      this.scene.switch('titleScene')
    }
  }
}
export default SplashScene