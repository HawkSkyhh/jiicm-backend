
import { Service } from 'egg';
import { copyFile } from 'tutils/fileSystemSync';


/**
 * Equipemnts Service
 */
export default class Equipments extends Service {

  /**
   * upload pic in equipment
   */
  public async uploadPic(files: any, id: string, isCover: string) {

    const basePath = 'E:/thawingx/tempData/';
    for (const file of files) {
      const { filename, filepath } = file;
      const target = basePath + filename;
      this.app.logger.info(`正在上传文件 '${filename}' 到 '${target}' `);
      copyFile(filepath, target, true);
      if (isCover === 'true') {
        await this.app.mysql.query(`update equipment set avatar_path = '${target}' where id = '${id}'`);
      } else {
        await this.app.mysql.insert('equipment_pic', {
          id,
          pic_path: target,
        });
      }

    }
  }

  /**
   * search equipment
   */
  public async searchList(body: any) {
    // let result: EggMySQLSelectResult;
    const { searchContent, property, department } = body;
    this.app.logger.info(`正在搜索设备名:${searchContent}, 属性：${property}, 部门: ${department} 的设备列表`);
    let result: EggMySQLSelectResult | EggMySQLUpdateResult | EggMySQLInsertResult;

    if (property === 'yard') {
      result = await this.app.mysql.query(`select * from equipment where name like '%${searchContent}%' and department = '${department}'`);
    } else if (property === 'item') {
      result = await this.app.mysql.query(`select * from equipment where name like '%${searchContent}%' and department like '联创项目%'`);
    } else {
      result = await this.app.mysql.query(`select * from equipment where name like '%${searchContent}%'`);
    }
    return result;
  }

  /**
   * get equipment list
   */
  public async getList() {
    this.app.logger.info('正在获取设备列表');
    const result = await this.app.mysql.select('equipment');
    result.map((item: any) => {
      item.tables = [{
        oid: item.oid,
        location: item.location,
        create_time: item.create_time,
        alignment: item.alignment,
        owner: item.owner,
        standard_owner: item.standard_owner,
      }];
      return item;
    });
    return result;
  }

  /**
   * get equipment detail by id
   * @param id equipment id
   */
  public async getDetail(name: any) {
    let result: EggMySQLSelectResult;
    if (name) {
      this.app.logger.info(`正在获取设备id为${name}的设备信息`);
      result = await this.app.mysql.select('equipment', {
        where: {
          name,
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
