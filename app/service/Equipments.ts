import { Service } from 'egg';

/**
 * Equipemnts Service
 */
export default class Equipments extends Service {
  /**
   * get equipment list
   */
  public async getList(query: any) {
    let result: EggMySQLSelectResult;
    const { key } = query;
    if (key) {
      this.app.logger.info(`正在获取设备名为${key}的设备列表`);
      result = await this.app.mysql.select('equipment', {
        where: {
          equipment_name: key,
        },
      });
    } else {
      this.app.logger.info('正在获取设备列表');
      result = await this.app.mysql.select('equipment');
    }
    return result;
  }

  /**
   * get equipment detail by id
   * @param id equipment id
   */
  public async getDetail(id: any) {
    let result: EggMySQLSelectResult;
    if (id) {
      this.app.logger.info(`正在获取设备id为${id}的设备信息`);
      result = await this.app.mysql.select('equipment', {
        where: {
          id,
        },
        limit: 1,
      });
    } else {
      this.app.logger.info('id为空');
      result = [];
    }
    return result;
  }

  /**
   * create equipment by id
   * @param params equipment info
   */
  public async create(params: any) {
    return `equipment ${params}`;
  }

  /**
   * update equipment info by id
   * @param id equipment id
   * @param params equipment info
   */
  public async update(id: string, params: any) {
    return `update equipment ${id} ${params}`;
  }

  /**
   * delete equipment by id
   * @param id equipment id
   */
  public async destroy(id: string) {
    return `delete equipment ${id}`;
  }
}
