import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/api/equipments/pics/:id', controller.equipments.getPicsById);
  router.post('/api/equipments/search', controller.equipments.search);
  router.post('/api/equipments/upload/pic', controller.equipments.uploadPic);
  router.resources('equipments', '/api/equipments', controller.equipments);
};
