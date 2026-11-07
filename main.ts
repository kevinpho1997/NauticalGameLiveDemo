controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - lastCast >= 1000) {
        lastCast = game.runtime()
        projectile = sprites.createProjectileFromSprite(assets.image`net`, boat, 0, 50)
        music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite.image == enemyList[5]) {
        info.changeScoreBy(1000)
        bigNet += 1
    } else {
        if (otherSprite.y <= 110) {
            info.changeScoreBy(100)
        } else {
            info.changeScoreBy(500)
            bigNet += 1
        }
    }
    sprites.destroy(otherSprite, effects.bubbles, 100)
    sprites.destroy(sprite)
})
let enemySprite: Sprite = null
let bigNet = 0
let projectile: Sprite = null
let lastCast = 0
let enemyList: Image[] = []
let boat: Sprite = null
scene.setBackgroundImage(assets.image`Backdrop`)
boat = sprites.create(assets.image`PlayerSprite`, SpriteKind.Player)
boat.setPosition(78, 25)
controller.moveSprite(boat, 65, 0)
enemyList = [
assets.image`f1`,
assets.image`f2`,
assets.image`f3`,
assets.image`f5`,
assets.image`f4`,
assets.image`shark`
]
lastCast = -1000
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(enemyList[randint(0, 5)], SpriteKind.Enemy)
    enemySprite.setPosition(162, randint(35, 115))
    enemySprite.setVelocity(randint(-40, -60), 0)
})
