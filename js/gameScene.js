/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Game Scene

var snake
var food
var cursors

var UP = 0
var DOWN = 1
var LEFT = 2
var RIGHT = 3

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
  this.snake = this.physics.add.sprite(800 / 2, 600 - 100, 'snake')
  this.food = this.physics.add.sprite(200, 100, 'food')

  game.physics.startSystem(Phaser.Physics.ARCADE);

  cursors = this.input.keyboard.createCursorKeys();
}

update (time, delta) {


    if (cursors.left.isDown) {

        

      this.snake.body.velocity.x = -200
      this.snake.body.velocity.y = 0
      
      
      //this.snake.x -= 15
      //if (this.snake.x < 0) {
        //this.snake.x = 0
      }
  

    else if (cursors.right.isDown) {
      this.snake.body.velocity.x = 200
      this.snake.body.velocity.y = 0

      //this.snake.x += 15
      //if (this.snake.x > 1920) {
        //this.snake.x = 1920
      }
      if (cursors.up.isDown) {
        this.snake.body.velocity.x = 0
        this.snake.body.velocity.y = -200
      }

      else if (cursors.down.isDown) {
        this.snake.body.velocity.x = 0
        this.snake.body.velocity.y = 200
      }
  }

}
export default GameScene