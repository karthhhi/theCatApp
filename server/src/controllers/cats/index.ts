import { Response, Request } from 'express'
import { ICat } from './../../types/cat';
import Cat from '../../models/cat';

const getAllCats = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            query: { name, page, limit, sortBy='createdAt', sortDirection='desc'}
        } = req;
        // Filters
        let filter = {};
        if (name) {
            filter = { 'name': { '$regex': name } }
        }
        // Sort
        const sortDirections: any = {
            'asc': 1,
            'desc': -1
        };
        const sort = {
            [sortBy as string]: sortDirections[sortDirection as string]
        }
        let cats: ICat[];
        // Pagination
        if (page && limit) {
            const pageLimit: number = parseInt(limit as string);
            const pageNumber: number = parseInt(page as string);
            cats = await Cat.find(filter)
                .limit(pageLimit)
                .skip((pageNumber as any - 1) * pageLimit)
                .sort(sort);
            const count = await Cat.countDocuments(filter);
            res.status(200).json({
                cats,
                totalPages: Math.ceil(count / pageLimit),
                currentPage: pageNumber,
            });
            return;
        }
        cats = await Cat.find(filter).sort(sort);
        res.status(200).json({ cats });
    } catch (error) {
        throw error;
    };
}

const getCatById = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
        } = req;
        const cat: ICat | null = await Cat.findById(id);
        if (!cat) {
            res.status(404).json({
                message: 'Cat not found!'
            });
            return;
        }
        res.status(200).json(cat);
    } catch (error) {
        throw error;
    };
}

const addCat = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ICat, 'name' | 'breed' | 'weight'>
        const cat: ICat = new Cat({
            name: body.name,
            breed: body.breed,
            weight: body.weight
        });
        const newCat: ICat = await cat.save();
        res.status(201).json({ message: 'Cat added', cat: newCat });
    } catch (error) {
        throw error;
    }
}

const updateCat = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req;
        const updatedCat: ICat | null = await Cat.findByIdAndUpdate(
            { _id: id },
            body
        );
        if (!updatedCat) {
            res.status(404).json({
                message: 'Cat not found!'
            });
            return;
        }
        res.status(200).json({
            message: 'Cat updated successfully',
            cat: updatedCat,
        });
    } catch (error) {
        throw error;
    };
}

const deleteCat = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedCat: ICat | null = await Cat.findByIdAndRemove(
            req.params.id
        );
        if (!deletedCat) {
            res.status(404).json({
                message: 'Cat not found!',
            });
            return;
        }
        res.status(200).json({
            message: 'Cat deleted successfully',
            cat: deletedCat,
        });
    } catch (error) {
        throw error;
    }
}

export {
    getAllCats,
    getCatById,
    addCat,
    updateCat,
    deleteCat
};
