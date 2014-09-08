var Astronaut = {
    preload: function() {
        game.load.image('astronaut', 'gayastronauts/assets/astronaut.png');
    },

    create: function() {
        this.sprite = game.add.sprite(
            game.world.centerX,
            game.world.centerY,
            'astronaut'
        );

        // add physics to astronaut sprite and collide with world boundaries
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.collideWorldBounds = true;

        // add cursor keys
        this.cursors = game.state.getCurrentState().cursors;
    },

    update: function() {
        this.handleMovement();
    },

    handleMovement: function() {
        // reset movement
        this.sprite.body.velocity.x = 0;
        this.sprite.body.velocity.y = 0;

        // movement
        if (this.cursors.up.isDown)
        {
            this.sprite.body.velocity.y -= 300;
        }

        if (this.cursors.down.isDown)
        {
            this.sprite.body.velocity.y += 300;
        }

        if (this.cursors.left.isDown)
        {
            this.sprite.body.velocity.x -= 300;
        }

        if (this.cursors.right.isDown)
        {
            this.sprite.body.velocity.x += 300;
        }
    }
}
