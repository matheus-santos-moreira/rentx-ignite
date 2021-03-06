import { Request, Response, Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request: Request, response: Response) =>
  createCategoryController.handle(request, response),
);

categoriesRoutes.get('/', (request: Request, response: Response) =>
  listCategoriesController.handle(request, response),
);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) =>
    importCategoryController.handle(request, response),
);

export { categoriesRoutes };
