import { Service } from 'egg';

/**
 * Equipemnts Service
 */
export default class Equipments extends Service {
  Equipments() {
    const { app } = this;
    this.app = app;
  }
  /**
   * get equipment list
   */
  public async getList() {
    const result = await this.app.mysql.get('equipment');
    this.app.logger.info(`equipment list: ${result}`);
    return `result:${result}`;
  }

  /**
   * get equipment detail by id
   * @param id equipment id
   */
  public async getDetail(id:string) {
    return `equipment ${id}`;
  }

  /**
   * create equipment by id
   * @param params equipment info
   */
  public async create(params:any) {
    return `equipment ${params}`;
  }

  /**
   * update equipment info by id
   * @param id equipment id
   * @param params equipment info
   */
  public async update(id:string, params:any) {
    return `update equipment ${id} ${params}`;
  }

  /**
   * delete equipment by id
   * @param id equipment id
   */
  public async destroy(id:string) {
    return `delete equipment ${id}`;
  }
}
