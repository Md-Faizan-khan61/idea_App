const ideas = require("../models/ideas.model")

exports.getAllIdeas=(req,res)=>{

    res.status(200).send(ideas)
}

exports.getIdeaBasedOnId = (req,res)=>{
           idea_id =req.params.id
           if(ideas[idea_id]){
             res.status(200).send(ideas[idea_id])
           } else {
             res.status(404).send({message:"idea with the given idea id not found"})
           }
}

let id =3 
exports.createIdea=(req,res)=>{
    idea_object = req.body
    id++
    idea_object["id"]=id
    ideas[id]=idea_object

    res.status(201).send(idea_object)
}

exports.updateIdea=(req,res)=>{
    idea_id=req.params.id
    if(ideas[idea_id]){
          idea_object=req.body
          ideas[idea_id]=idea_object
          res.status(200).send(idea_object)
    }else{
        res.status(404).send({message:"idea of that particular id which you wanted to update is not found"})
    }
}

exports.deleteIdea=(req,res)=>{
             idea_id = req.params.id
             if(ideas[idea_id]){
                 delete ideas[idea_id]
                 res.status(200).send({message:"yay,your idea has been successfully delete "})
             } else{
              res.status(404).send({message:"id idea u wanted to delete is not present"})
             }
}