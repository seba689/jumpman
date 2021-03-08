bomb = this.physics.add.sprite(300, 450, 'bomb');
star = this.physics.add.sprite(400, 450, 'star');

stars = this.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
});

stars.children.iterate(function (child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
});

this.physics.add.collider(stars, platforms);
this.physics.add.overlap(player, stars, collectStar, null, this);
// fijamos un rebote y limitamos al mundo visible
//          bomb
bomb.setBounce(0.2);
bomb.setCollideWorldBounds(true);
// fijamos su gravedad
bomb.body.setGravityY(300);
// evitamos que traspase las plataformas
this.physics.add.collider(bomb, platforms);
//               star
stars.setBounce(0.2);
stars.setCollideWorldBounds(true);
// fijamos su gravedad
stars.body.setGravityY(300);
// evitamos que traspase las plataformas
//this.physics.add.collider(stars, platforms);
//this.physics.add.overlap(player,stars,collectStar,null,this);
this.physics.add.overlap(player,bomb,bombw,null,this);