function Startgame (Rounds: number) {
    story.startCutscene(function () {
        color.startFade(color.Black, color.originalPalette, 2000)
    })
    MySprite()
    Light()
}
function Start () {
    color.startFade(color.Black, color.originalPalette)
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff111fffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff111111ffffffffffffffffffffffffff
        ffffffffffffffffffffffff11111f1ffffffffffffffffffffffffffff
        fffffffffffffffffffffff1111f11f222222ffffffffffffffffffffff
        ffffffffffffffffffffff1f1111f1f222222222fffffffffffffffffff
        ffffffffffffffffffffff11f11f111f2222222222fffffffffffffffff
        fffffffffffffffffffff111f11f111f222222222222fffffffffffffff
        fffffffffffffffffff2f1111111111f2222222222222ffffffffffffff
        ffffffffffffffffff2f11111111111112222222222222fffffffffffff
        fffffffffffffffff2f1111111f111111ff2222222222222fffffffffff
        ffffffffffffffff22f111111ff111111ffffff2222222222ffffffffff
        fffffffffffffff22f111111111111111fffffff222222222ffffffffff
        fffffffffffffff22f1111111ff111111f11111f2222222222fffffffff
        ffffffffffffff222f1111111ff111111f1111122222222222fffffffff
        ffffffffffffff2222f111111ff11111f111111222222222222ffffffff
        fffffffffffff22222ff111111111111f111122222222222222f11fffff
        fffffffffffff22222ff11111ff1111111112222222222222ff11ffffff
        ffffffffffff22222f11f111111111111122222222222ffff11ffffffff
        ffffffffffff2222f1111111111111111222222222221111111ffffffff
        ffffffffffff2222f1111111111111122222222222211111111ffffffff
        ffffffffffff222f11111111111111222222222221111111111f1111fff
        fff111ffffff22f1111111111111222222222222fff1111111111ffffff
        fffff111ffff2f111111111111122222222222111f111111ff11fffffff
        ffffff11111fff11111111111122222222222111f111ffff22f11ffffff
        ffff111111111111111111111222222222221111f1ff1112222ffffffff
        fffffff111111111111fff1222222222221111111ff1112222222ffffff
        ffffff11111111111fffff2222222222111111111111112222222ffffff
        fffff1fff11111f1f22f22222222222111111111111111222222fffffff
        fffffffffffff1ff222222222222211111111111111112222222fffffff
        ffffffffffffff1f222222222222111111111111111112222222fffffff
        fffffffffffffff222222222222ff11111111111111112222222fffffff
        ffffffffffffff222222222222ff1ffffff1111111122222222ffffffff
        fffffffffffffff222222222ffff11111111111111122222222ffffffff
        fffffffffffffff22222222ffff11111111111111222222222fffffffff
        ffffffffffffffff222222222f111111111111112222222222fffffffff
        fffffffffffffffff22222222221111111111222222222222ffffffffff
        ffffffffffffffffff222222222222222222222222222222fffffffffff
        fffffffffffffffffff222222222222222222222222222fffffffffffff
        ffffffffffffffffffff2222222222222222222222222ffffffffffffff
        fffffffffffffffffffff2222222222222222222222ffffffffffffffff
        ffffffffffffffffffffff22222222222222222222fffffffffffffffff
        ffffffffffffffffffffffff222222222222222ffffffffffffffffffff
        ffffffffffffffffffffffffffff222222fffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    textSprite = textsprite.create("GHOSTBUSTERS")
    textSprite.setMaxFontHeight(8)
    textSprite.setOutline(4, 2)
    textSprite.setPosition(107, 20)
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Start Game"),
    miniMenu.createMenuItem("Controls"),
    miniMenu.createMenuItem("Credits")
    )
    myMenu.setPosition(79, 68)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Padding, 6)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2)
    myMenu.setDimensions(100, 100)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "Start Game") {
            myMenu.close()
            sprites.destroy(textSprite)
            color.startFade(color.originalPalette, color.Black, 200)
            Startgame(1)
        } else if (selection == "Controls") {
            myMenu.close()
        } else if (selection == "Credits") {
            myMenu.close()
        }
    })
}
function Light () {
    multilights.toggleLighting(true)
    multilights.addLightSource(Ghostbuster_1, 4)
    multilights.addFlashLightSource(
    Ghostbuster_1,
    0,
    60,
    30
    )
    if (characterAnimations.matchesRule(Ghostbuster_1, characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving))) {
        characterAnimations.loopFrames(
        Ghostbuster_1,
        [img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e b e 1 f b b f . . . 
            . f f f e b b b b f . . . 
            . . f e e e e e f f . . . 
            . . e 2 2 2 d d d f c 5 . 
            . . e d d e e c c c c 5 . 
            . . f d d e e c c c c 5 . 
            . . . f f f f f f . c 5 . 
            . . . . f f f . . . . . . 
            `,img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e b e 1 f b b f . . . 
            . f f f e b b b b f . . . 
            . . f e e e e e f f . . . 
            . . e 2 2 2 d d d f c 5 . 
            . . e d d e e c c c c 5 5 
            . . f d d e e c c c c 5 5 
            . . . f f f f f f . c 5 . 
            . . . . f f f . . . . . . 
            `,img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e b e 1 f b b f . . . 
            . f f f e b b b b f . . . 
            . . f e e e e e f f . . . 
            . . e 2 2 2 d d d f c 5 . 
            . . e d d e e c c c c 5 5 
            . . f d d e e c c c c 5 5 
            . . . f f f f f f . c 5 . 
            . . . . f f f . . . . . . 
            `,img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e b e 1 f b b f . . . 
            . f f f e b b b b f . . . 
            . . f e e e e e f f . . . 
            . . e 2 2 2 d d d f c 5 . 
            . . e d d e e c c c c 5 5 
            . . f d d e e c c c c 5 5 
            . . . f f f f f f . c 5 . 
            . . . . f f f . . . . . . 
            `,img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e b e 1 f b b f . . . 
            . f f f e b b b b f . . . 
            . . f e e e e e f f . . . 
            . . e 2 2 2 d d d f c . . 
            . . e d d e e c c c c 5 . 
            . . f d d e e c c c c 5 . 
            . . . f f f f f f . c . . 
            . . . . f f f . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        multilights.flashlightSourceAttachedTo(Ghostbuster_1).direction = 0
    } else if (characterAnimations.matchesRule(Ghostbuster_1, characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving))) {
        characterAnimations.loopFrames(
        Ghostbuster_1,
        [img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f b b f 1 e b e f . 
            . . . f b b b b e f f f . 
            . . . f f e e e e e f . . 
            . 5 c f d d d 2 2 2 e . . 
            . 5 c c c c e e d d e . . 
            . 5 c c c c e e d d f . . 
            . 5 c . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `,img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f b b f 1 e b e f . 
            . . . f b b b b e f f f . 
            . . . f f e e e e e f . . 
            . 5 c f d d d 2 2 2 e . . 
            5 5 c c c c e e d d e . . 
            5 5 c c c c e e d d f . . 
            . 5 c . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `,img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f b b f 1 e b e f . 
            . . . f b b b b e f f f . 
            . . . f f e e e e e f . . 
            . 5 c f d d d 2 2 2 e . . 
            5 5 c c c c e e d d e . . 
            5 5 c c c c e e d d f . . 
            . 5 c . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `,img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f b b f 1 e b e f . 
            . . . f b b b b e f f f . 
            . . . f f e e e e e f . . 
            . 5 c f d d d 2 2 2 e . . 
            5 5 c c c c e e d d e . . 
            5 5 c c c c e e d d f . . 
            . 5 c . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `,img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f b b f 1 e b e f . 
            . . . f b b b b e f f f . 
            . . . f f e e e e e f . . 
            . . c f d d d 2 2 2 e . . 
            . 5 c c c c e e d d e . . 
            . 5 c c c c e e d d f . . 
            . . c . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        multilights.flashlightSourceAttachedTo(Ghostbuster_1).direction = 180
    } else if (characterAnimations.matchesRule(Ghostbuster_1, characterAnimations.rule(Predicate.FacingDown, Predicate.NotMoving))) {
        multilights.flashlightSourceAttachedTo(Ghostbuster_1).direction = 90
    } else if (characterAnimations.matchesRule(Ghostbuster_1, characterAnimations.rule(Predicate.FacingUp, Predicate.NotMoving))) {
        multilights.flashlightSourceAttachedTo(Ghostbuster_1).direction = 90
    }
}
function MySprite () {
    Ghostbuster_1 = sprites.create(img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e b e 1 f b b f . . . 
        . f f f e b b b b f . . . 
        . . f e e e e e f f . . . 
        . . e 2 2 e d d d f c . . 
        . . e d d e e c c c c 5 5 
        . . f e e f e c c c c 5 5 
        . . . f f f f f f . c . . 
        . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.cameraFollowSprite(Ghostbuster_1)
    tiles.placeOnTile(Ghostbuster_1, tiles.getTileLocation(0, 2))
    controller.moveSprite(Ghostbuster_1, 50, 50)
}
let Ghostbuster_1: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let textSprite: TextSprite = null
Start()
