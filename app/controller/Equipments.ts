import { Controller } from 'egg';

// 定义创建接口的请求参数规则

export default class EquipmentController extends Controller {
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
    const result = await ctx.service.equipments.getDetail('123123123');
    ctx.body = {
      equipment: result,
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
