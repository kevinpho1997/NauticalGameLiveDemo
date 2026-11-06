controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - lastCast >= 1000) {
        lastCast = game.runtime()
        projectile = sprites.createProjectileFromSprite(assets.image`net`, boat, 0, 50)
        music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
    }
})
let projectile: Sprite = null
let lastCast = 0
let boat: Sprite = null
scene.setBackgroundImage(assets.image`Backdrop`)
boat = sprites.create(assets.image`PlayerSprite`, SpriteKind.Player)
boat.setPosition(78, 25)
controller.moveSprite(boat, 65, 0)
let enemyList = [
assets.image`f1`,
assets.image`f2`,
assets.image`f3`,
assets.image`f5`,
assets.image`f4`,
assets.image`shark`
]
lastCast = -1000
