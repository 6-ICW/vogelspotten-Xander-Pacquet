const alleVogels = require("../data/index")


// het gaat hem om kleine fouten, maar ze zorgen voor een resultaat! 
const getVogels = (req,res)=>{
    res.json(alleVogels.map((vogel)=>({
        id: vogel.id,
        soor: vogel.soort
    })))
}

const getOneVogel = (req,res)=>{
    res.json(alleVogels.find((vogel)=>vogel.id == req.params.ID))
}

// dit was niet gevraagd.
const AddVogel = (req,res)=>{
    const newVogel ={
        // newID verwacht 2 parameters, niet enkel de lijst
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

// wat wilde je hier doen? 
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