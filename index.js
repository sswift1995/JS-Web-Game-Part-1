//calling and aligning sky to background imagery//
    function tile(url, left, bottom, width, height){
        for(let h = 0; h < height; h++){
            for(let w = 0; w < width; w++){
                newImage(url, left + w*100, bottom+h*100)
            }
        }
    }
    //Control Height for the horizon
    let horizon = window.innerHeight / 2.9
    let heightOfSky = window.innerHeight-horizon
    let heightOfGrass = horizon
    
    tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/50)
    tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/50)
    
    //calling the functions seperatly//
    // greenCharacter
    let greenCharacter = document.createElement('img')
    greenCharacter.src='assets/green-character.gif'
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = '100px'
    greenCharacter.style.bottom = '100px'
    document.body.append(greenCharacter) 
    
    //pineTree Function
    let pineTree = document.createElement('img')
    pineTree.src = 'assets/pine-tree.png'
    pineTree.style.position = 'fixed'
    pineTree.style.left = '450px'
    pineTree.style.bottom = '200px'
    document.body.append(pineTree)
    
   //tree object function
    let tree = document.createElement('img')
    tree.src = 'assets/tree.png'
    tree.style.position = 'fixed'
    tree.style.left = '200px'
    tree.style.bottom = '300px'
    document.body.append(tree)
    
    //pillar object function
    let pillar = document.createElement('img')
    pillar.src = 'assets/pillar.png'
    pillar.style.position = 'fixed'
    pillar.style.left = '350px'
    pillar.style.bottom = '100px'
    document.body.append(pillar)
    
    //crate object
    let crate = document.createElement('img')
    crate.src = 'assets/crate.png'
    crate.style.position = 'fixed'
    crate.style.left = '150px'
    crate.style.bottom = '200px'
    document.body.append(crate)
    
    let well = document.createElement('img')
    well.src = 'assets/well.png'
    well.style.position = 'fixed'
    well.style.left = '500px'
    well.style.bottom = '425px'
    document.body.append(well)
    

    
    //combining the images to call out from one function//
    function newImage(url, left, bottom){
        let object = document.createElement('img')
        object.src = url
        object.style.position = 'fixed'
        object.style.left = left + 'px'
        object.style.bottom = bottom + 'px' 
        document.body.append(object)
        return object
    }

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}
    //calling the image to appear//
    newImage('assets/sword.png', 500, 405)
    newImage('assets/sheild.png', 165, 185)
    newImage('assets/staff.png', 600, 100)

    function newItem(url, left, bottom){
        let object = newImage(url, left, bottom)
    
        object.addEventListener('dblclick', () => {
            object.remove()
        })
    }


  