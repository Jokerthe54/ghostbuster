function Start () {
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccfcccffffccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccffcccccfcffcccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbfbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccccccccccccccccccccfccccccccfcccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbb2fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccccccccccccccccccfccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Start Game"),
    miniMenu.createMenuItem("Controls"),
    miniMenu.createMenuItem("Credits")
    )
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Padding, 6)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2)
    myMenu.setDimensions(100, 100)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "Ur Gay") {
            myMenu.close()
        } else if (selection == "Controls") {
            myMenu.close()
        } else if (selection == "Credits") {
            myMenu.close()
        }
    })
}
let myMenu: miniMenu.MenuSprite = null
Start()
