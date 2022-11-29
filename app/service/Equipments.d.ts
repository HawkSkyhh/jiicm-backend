import { Service } from 'egg';
/**
 * Equipemnts Service
 */
export default class Equipments extends Service {
    /**
     * upload pic in equipment
     */
    uploadPic(files: any, id: string, isCover: string): Promise<void>;
    /**
     * search equipment
     */
    searchList(body: any): Promise<EggMySQLSelectResult | EggMySQLUpdateResult | EggMySQLInsertResult>;
    /**
     * get equipment list
     */
    getList(): Promise<EggMySQLSelectResult>;
    /**
     * get equipment detail by id
     * @param id equipment id
     */
    getPicsById(id: string): Promise<EggMySQLSelectResult>;
    /**
     * get equipment detail by id
     * @param id equipment id
     */
    getDetail(name: any): Promise<EggMySQLSelectResult>;
    /**
     * create equipment by id
     * @param params equipment info
     */
    create(params: any): Promise<string>;
    /**
     * update equipment info by id
     * @param id equipment id
     * @param params equipment info
     */
    update(id: string, params: any): Promise<string>;
    /**
     * delete equipment by id
     * @param id equipment id
     */
    destroy(id: string): Promise<string>;
}
