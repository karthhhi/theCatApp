import { Router } from 'express';
import {
    getAllCats,
    getCatById,
    addCat,
    updateCat,
    deleteCat,
    getAllCatBreeds
} from '../controllers/cats';

const router: Router = Router();

router.get('/cats/breeds', getAllCatBreeds);

router.get('/cats/:id', getCatById);

router.get('/cats?page=:page?&limit=:limit?&name=:name?', getAllCats);

router.get('/cats', getAllCats);

router.post('/cats', addCat);

router.put('/cats/:id', updateCat);

router.delete('/cats/:id', deleteCat);

export default router
