import {Request,Response} from "express";
import {MovieModel}from "../src/models/Movie";
import Logger from "../config/logger";


export const apiControllers = { 
 
    routerTest: async (req:Request,res:Response) => {
        return res.status(200).send("API working!!!");
    },

    createMovie: async (req:Request,res:Response) => {
      
        try {
          const data = req.body
          const movied = await MovieModel.create(data)
          return res.status(201).json(movied)

        } catch (e:any) {
          Logger.error(`Erro no sistema: ${e.message}`);
          return res.status(500).json({error:"Por favor tente mais tarde."})
        }
    },

    findMovieById: async (req:Request,res:Response) => {
        
        try {
           const id = req.params.id;
           const movie = await MovieModel.findById(id);
            
           if (!movie) {
              return res.status(404).json({ error:"O filme não existe."});
           }
           return res.status(200).json(movie);
          
        } catch (e:any) {
            Logger.error(`Erro no sistema: ${e.message}`);
            return res.status(500).json({error:"Por favor tente mais tarde."});
        }
    },

    getAllMovies:async(req:Request,res:Response) => {

        try {

          const movies = await MovieModel.find()
          return res.status(200).json(movies);
          
        } catch (e:any) {
          Logger.error(`Erro no sistema: ${e.message}`);
          return res.status(500).json({error:"Por favor tente mais tarde."});
        }

    },

    removeMovie: async (req:Request,res:Response)=> {

       try {
         const id = req.params.id;
         const findMovie = await MovieModel.findById(id);

         if (!findMovie) {
          return res.status(404).json({ error:"O filme não existe."});
         }

         await findMovie.delete();
         return res.status(200).json({msg:"Filme removido com sucesso !!!"})

       } catch (e:any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        return res.status(500).json({error:"Por favor tente mais tarde."});
       }

    },
    updateMovie:async (req:Request,res:Response) => {

      try {

        const id = req.params.id;
        const data = req.body;
        const findMovieUpdate = await MovieModel.findById(id);

        if (!findMovieUpdate) {
         return res.status(404).json({ error:"O filme não existe."});
        }

        await MovieModel.updateOne({_id:id},data)
        return res.status(200).json(data)
        
      } catch (e:any) {
        Logger.error(`Erro no sistema: ${e.message}`);
        return res.status(500).json({error:"Por favor tente mais tarde."});
      }

    }

}

