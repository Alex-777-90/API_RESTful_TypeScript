import {Router,Request,Response} from "express";
import {apiControllers} from "../controllers/apiController";
import {validate} from "./middleware/handleValidation";
import {movieCreateValidation} from "./middleware/movieValidation";

const router = Router();

router.get("/test",apiControllers.routerTest);
router.post("/movie",movieCreateValidation() , validate,apiControllers.createMovie);
router.get("/movie/:id",apiControllers.findMovieById);
router.get("/movie",apiControllers.getAllMovies);
router.delete("/movie/:id",apiControllers.removeMovie);
router.patch("/movie/:id",movieCreateValidation() , validate,apiControllers.updateMovie);

export default router;

