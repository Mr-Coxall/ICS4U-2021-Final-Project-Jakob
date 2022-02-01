/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
    
    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Title Scene')
      this.load.image('titleSceneBackground', './title.png')
      //this.load.audio('music', './music.mp3')
  }

  create (data) {

    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(1)
    this.titleSceneBackgroundImage.x = 800 / 4
    this.titleSceneBackgroundImage.y = 600 / 4

    //this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Space Aliens', //this.titleSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}

export default TitleScene