import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post('/app/v1/equipments/search', controller.equipments.search);
  router.resources('equipments', '/app/v1/equipments', controller.equipments);
};
