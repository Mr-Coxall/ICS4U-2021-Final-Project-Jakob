/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the settings Scene

class Settings extends Phaser.Scene {
  constructor () {
    super({ key: 'settings' })

    this.settingsText = null
    this.menuSceneBackgroundImage = null
    this.titleSceneTextStyle = { font: '30px Arial', fill: '#000000', align: 'center' }
    this.titleSceneTextStyle2 = { font: '40px Arial', fill: '#000000', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Settings')
    this.load.image('startScreenBackground', './startimage.png')
    this.load.image('cog', './cog.png')
    this.load.image('menuSceneBackground', './cartoon-meadow-landscape-summer-green-fields-view-spring-lawn-hill-blue-sky-green-grass-fields-landscape-background-illustration-field-grass-meadow-landscape-spring-summer_229548-381 (1).jpg')
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(1.5)
    this.menuSceneBackgroundImage.x = 640 / 2
    this.menuSceneBackgroundImage.y = 480 / 2

    this.settingsText = this.add.text(600 / 2, (480 / 6), 'Controls', this.titleSceneTextStyle2).setOrigin(0.5)

    this.settingsText = this.add.text(600 / 2, (480 / 2), '🡹 = Move up\n🡻 = Move down\n🡸 = Move left\n🡺 = Move right', this.titleSceneTextStyle).setOrigin(0.5)

    this.cog = this.add.sprite(640 / 1.1, (480 / 1.5) + 100, 'cog').setScale(0.4)
    this.cog.setInteractive({ useHandCursor: true })
    this.cog.on('pointerdown', () => this.clickSettings())
    this.sound.play('click')
  }

  update (time, delta) {
  }
    clickSettings () {
    this.scene.start('menuScene')
  }
}
export default Settings