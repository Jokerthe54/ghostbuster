function Start () {
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
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Start Game"),
    miniMenu.createMenuItem("Controls"),
    miniMenu.createMenuItem("Credits")
    )
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Padding, 6)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2)
    myMenu.setDimensions(100, 100)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "Start Game") {
            myMenu.close()
        } else if (selection == "Controls") {
            myMenu.close()
        } else if (selection == "Credits") {
            myMenu.close()
        }
    })
}
let myMenu: miniMenu.MenuSprite = null
let textSprite: TextSprite = null
Start()
