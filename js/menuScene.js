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

  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Menu Scene')

  

    this.load.audio('music', './music.mp3')

    this.load.image('menuSceneBackground', './grass.png')
    this.load.image('startButton', './start.png')

    this.load.audio('click', './mixkit-arcade-game-jump-coin-216.wav')
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(3.5)
    this.menuSceneBackgroundImage.x = 640 / 2
    this.menuSceneBackgroundImage.y = 480 / 2

    //music.game.add.audio('music')
    //music.play()

    this.startButton = this.add.sprite(640 / 2, (480 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    this.sound.play('click')
  }

  update (time, delta) {
  }

  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene