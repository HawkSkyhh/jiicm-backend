import { Controller } from 'egg';

// 定义创建接口的请求参数规则

export default class EquipmentController extends Controller {

  public async getPicsById() {
    const { ctx } = this;
    const { params } = ctx;
    const result = await ctx.service.equipments.getPicsById(params.id);
    ctx.body = {
      currEquipment_pics: result,
    };
    ctx.status = 201;
  }

  public async uploadPic() {
    const { ctx } = this;
    const { request } = ctx;
    const { files, query } = request;
    const result = await ctx.service.equipments.uploadPic(files, query.id, query.isCover);
    ctx.body = {
      equipmentList: result,
    };
    ctx.status = 201;
  }

  public async search() {
    const { ctx } = this;
    const { request } = ctx;
    const result = await ctx.service.equipments.searchList(request.body);
    ctx.body = {
      equipmentList: result,
    };
    ctx.status = 201;
  }

  public async index() {
    const { ctx } = this;
    const result = await ctx.service.equipments.getList();
    ctx.body = {
      equipmentList: result,
    };
    ctx.status = 201;
  }

  public async show() {
    const { ctx } = this;
    const { params } = ctx;
    const equipmentInfo = await ctx.service.equipments.getDetail(params);
    ctx.body = {
      equipmentInfo,
    };
    ctx.status = 201;
  }

  public async create() {
    const { ctx } = this;
    const result = await ctx.service.equipments.create('create');
    ctx.body = {
      equipment: result,
    };
    ctx.status = 201;
  }


  public async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.equipments.update('update', 'params');
  }

  public async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.equipments.destroy('destroy');
  }
}
