/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })

    this.snake = null
  }
  
  init (data) {
    this.cameras.main.setBackgroundColor('#3d3c38')
  }

  preload () {
    console.log('Game Scene')
    this.load.image('snake', 'snake.png')
  }

create (data) {
  this.snake = this.physics.add.sprite(1920 / 2, 1080 - 100, 'snake')
  
}

update (time, delta) {
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')

    if (keyLeftObj.isDown === true) {
      this.snake.body.velocity.x = -200
      this.snake.body.velocity.y = 0
      
      
      //this.snake.x -= 15
      //if (this.snake.x < 0) {
        //this.snake.x = 0
      }
  

    if (keyRightObj.isDown === true) {
      this.snake.body.velocity.x = 200
      this.snake.body.velocity.y = 0

      //this.snake.x += 15
      //if (this.snake.x > 1920) {
        //this.snake.x = 1920
    }
  }
}

export default GameScene