class Dom {
    static loop
    static navMenu = {
        "on": true,
        "width": "0rem"
    }

    static run(){
        Dom.clickFeature()
    }

    static clickFeature(){
        const icon = document.getElementById("nav-directory")
        const menu = document.getElementById("nav-menu")
        const iconName = document.getElementById("menu")

        icon.addEventListener('click', () => {
            menu.style.width = Dom.navMenu["width"]
            if (Dom.navMenu["on"]){
                Dom.navMenu["width"] = "20rem"
                Dom.navMenu["on"] = false
                // iconName.style.width = "0rem"
            }
            else {
                Dom.navMenu["width"] = "0rem"
                Dom.navMenu["on"] = true
                // iconName.style.width = "7rem"
            }
        })
    }

    // static scrollFeature(){
    //     const landing = document.getElementById("landing")
    //     const header = document.getElementById("title")
    //     landing.addEventListener('wheel', (e) => {
    //         console.log(1);
    //     })
    // }
    static releaseOverflow(){
        document.body.style.overflow = "visible"
    }
}

Dom.run()