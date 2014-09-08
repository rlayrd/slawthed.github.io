var Play = {
    preload: function() {
        // preload assets
        this.load.image('background', 'gayastronauts/assets/background.jpg');
        Astronaut.preload();
        this.load.image('zac', 'gayastronauts/assets/zac.png');
        this.load.image('asteroid', 'gayastronauts/assets/asteroid.png');
    },

    create: function() {
        // add cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();

        // add background
        this.background = this.add.image(
            0,
            0,
            'background'
        );

        // add astronaut
        Astronaut.create();

        // add zac boy
        this.zac = this.add.sprite(
            10,
            10,
            'zac'
        );

        // add asteroid
        this.asteroid = this.add.sprite(
            100,
            100,
            'asteroid'
        );
    },

    update: function() {
        // update astronaut
        Astronaut.update();
    }
};
