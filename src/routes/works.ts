import { Router, Request, Response } from 'express';

const router = Router();

// Model
import Works from '../models/Works';

router.route('/create') 
    .get((req: Request, res: Response) => {
        res.render('works/create');
    })
    .post(async(req: Request, res: Response) => {
        const { title, description } = req.body;
        const newWorks = new Works({title, description});
        await newWorks.save();
        res.redirect('/works/list');
    });

router.route('/list')
    .get(async(req: Request, res: Response) => {
        const works = await Works.find();
        res.render('works/list', {works});
    });

router.route('/delete/:id')
    .get( async (req: Request, res: Response) => {
        const {id} = req.params;
        await Works.findByIdAndDelete(id);
        res.redirect('/works/list');
    });

router.route('/edit/:id')
    .get( async (req: Request, res: Response) => {
        const { id } = req.params;
        const works = await Works.findById(id);
        res.render('works/edit', {works});
    })
    .post(async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, description } = req.body;
        await Works.findByIdAndUpdate(id, { title, description });
        res.redirect('/works/list');
    });
export default router;