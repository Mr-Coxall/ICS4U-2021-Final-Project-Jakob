/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    this.menuSceneBackgroundImage = null
    this.startButton = null
    this.cog = null

  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Menu Scene')

  

    this.load.audio('music', './music.mp3')

    this.load.image('menuSceneBackground', './cartoon-meadow-landscape-summer-green-fields-view-spring-lawn-hill-blue-sky-green-grass-fields-landscape-background-illustration-field-grass-meadow-landscape-spring-summer_229548-381 (1).jpg')
    this.load.image('startButton', './button.png')
    this.load.image('cog', './cog.png')

    this.load.audio('click', './mixkit-arcade-game-jump-coin-216.wav')
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(1.5)
    this.menuSceneBackgroundImage.x = 640 / 2
    this.menuSceneBackgroundImage.y = 480 / 2

    this.startButton = this.add.sprite(640 / 2, (480 / 8) + 100, 'startButton').setScale(0.3)
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    this.sound.play('click')

    this.cog = this.add.sprite(640 / 1.1, (480 / 1.5) + 100, 'cog').setScale(0.4)
    this.cog.setInteractive({ useHandCursor: true })
    this.cog.on('pointerdown', () => this.clickSettings())
    this.sound.play('click')
  }

  update (time, delta) {
  }

  clickButton () {
    this.scene.start('gameScene')
  }

    clickSettings () {
    this.scene.start('settings')
  }
}

export default MenuScene