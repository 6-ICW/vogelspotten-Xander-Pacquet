const alleVogels = require("../data/index")


const getVogels = (req,res)=>{
    res.json(alleVogels.map((vogel)=>{
        vogel.id,
        vogel.soort
    }))
}

const getOneVogel = (req,res)=>{
    res.json(alleVogels.find((vogel)=>vogel.id == req.params.ID))
}

const AddVogel = (req,res)=>{
    const newVogel ={
        id: newID(alleVogels),
        soort: req.body.soort,
        aantalKeerGespot: req.body.aantalKeerGespot,
    }

    const pushnewVogel = alleVogels.push(newVogel)
    res.json(pushnewVogel)

}

const newID = (lijst,idProp)=>{
    let maxId = 0
    alleVogels.forEach((element)=>{
        if (lijst.id<element[idProp]){
            maxId == element[idProp]

        }
    })
    maxId++
    return maxId
}

const vogelGespot = (req,res)=>{
    
    const gespot = alleVogels.map((vogel)=>{
        vogel.aantalKeerGespot
    })
    console.log(gespot);

    const maxGespot = gespot.forEach((element)=>{
        const maxGespot =max(element)
    })

    res.json(maxGespot+1)
    

    


}

module.exports = {
    getVogels,
    getOneVogel,
    AddVogel,
    vogelGespot,


}