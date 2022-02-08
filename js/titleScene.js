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
    this.titleSceneTextStyle = { font: '60px Times', fill: '#4b855f', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './cartoon-meadow-landscape-summer-green-fields-view-spring-lawn-hill-blue-sky-green-grass-fields-landscape-background-illustration-field-grass-meadow-landscape-spring-summer_229548-381 (1).jpg')
  }

  create (data) {

    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(1.5)
    this.titleSceneBackgroundImage.x = 640 / 2
    this.titleSceneBackgroundImage.y = 480 / 2

    this.titleSceneText = this.add.text(600 / 2, (480 / 8) + 100, 'Snake Game', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update (time, delta) {
    if (time > 6000) {
      this.scene.switch('menuScene')
    }
  }
}

export default TitleScene