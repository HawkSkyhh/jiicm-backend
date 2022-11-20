import { Service } from 'egg';

/**
 * Equipemnts Service
 */
export default class Equipments extends Service {

  /**
   * search equipment
   */
  public async searchList(body: any) {
    // let result: EggMySQLSelectResult;
    const { searchContent, property, department } = body;
    this.app.logger.info(`正在搜索设备名:${searchContent}, 属性：${property}, 部门: ${department} 的设备列表`);
    const result: EggMySQLSelectResult = await this.app.mysql.select('equipment', {
      where: {
        equipment_name: searchContent,
        // department_name: department,
      },
    });
    return result;
  }

  /**
   * get equipment list
   */
  public async getList() {
    this.app.logger.info('正在获取设备列表');
    return await this.app.mysql.select('equipment');
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
