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
  //this.snake = this.physics.add.sprite(1920 / 2, 1080 - 100, 'snake')
    var Food = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,

        initialize:

        function Food (scene, x, y)
        {
            Phaser.GameObjects.Image.call(this, scene)

            this.setTexture('food');
            this.setPosition(x * 16, y * 16);
            this.setOrigin(0);

            this.total = 0;

            scene.children.add(this);
        }

    })

      var Snake = new Phaser.Class({

        initialize:

        function Snake (scene, x, y)
        {
            this.headPosition = new Phaser.Geom.Point(x, y)

            this.body = scene.add.group()

            this.head = this.body.create(x * 32, y * 32, 'body')
            this.head.setOrigin(0)

            this.alive = true

            this.speed = 100

            this.moveTime = 0

            this.heading = RIGHT
            this.direction = RIGHT
        },

        update: function (time)
        {
            if (time >= this.moveTime)
            {
                return this.move(time)
            }
        },

        faceLeft: function ()
        {
            if (this.direction === UP || this.direction === DOWN)
            {
                this.heading = LEFT
            }
        },

        faceRight: function ()
        {
            if (this.direction === UP || this.direction === DOWN)
            {
                this.heading = RIGHT
            }
        },

        faceUp: function ()
        {
            if (this.direction === LEFT || this.direction === RIGHT)
            {
                this.heading = UP
            }
        },

        faceDown: function ()
        {
            if (this.direction === LEFT || this.direction === RIGHT)
            {
                this.heading = DOWN
            }
        },

        move: function (time)
        {
            switch (this.heading)
            {
                case LEFT:
                    this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40)
                    break

                case RIGHT:
                    this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40)
                    break

                case UP:
                    this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30)
                    break

                case DOWN:
                    this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30)
                    break
            }

            this.direction = this.heading

            //  Update the body segments
            Phaser.Actions.ShiftPosition(this.body.getChildren(), this.headPosition.x * 16, this.headPosition.y * 16, 1)

            //  Update the timer ready for the next movement
            this.moveTime = time + this.speed

            return true
        }

    });

    snake = new Snake(this, 8, 8)
    food = new Food(this, 3, 4);
    //  Create our keyboard controls
    cursors = this.input.keyboard.createCursorKeys()
  
}

update (time, delta) {

      if (!snake.alive)
    {
        return;
    }

    /**
    * Check which key is pressed, and then change the direction the snake
    * is heading based on that. The checks ensure you don't double-back
    * on yourself, for example if you're moving to the right and you press
    * the LEFT cursor, it ignores it, because the only valid directions you
    * can move in at that time is up and down.
    */
    if (cursors.left.isDown)
    {
        snake.faceLeft();
    }
    else if (cursors.right.isDown)
    {
        snake.faceRight();
    }
    else if (cursors.up.isDown)
    {
        snake.faceUp();
    }
    else if (cursors.down.isDown)
    {
        snake.faceDown();
    }

    snake.update(time);
    //const keyLeftObj = this.input.keyboard.addKey('LEFT')
    //const keyRightObj = this.input.keyboard.addKey('RIGHT')

    //if (keyLeftObj.isDown === true) {
     // this.snake.body.velocity.x = -200
     // this.snake.body.velocity.y = 0
      
      
      //this.snake.x -= 15
      //if (this.snake.x < 0) {
        //this.snake.x = 0
     // }
  

  //  if (keyRightObj.isDown === true) {
    //  this.snake.body.velocity.x = 200
      //this.snake.body.velocity.y = 0

      //this.snake.x += 15
      //if (this.snake.x > 1920) {
        //this.snake.x = 1920
    //}
  }
}

export default GameScene