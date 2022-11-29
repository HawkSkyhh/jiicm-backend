import { Controller } from 'egg';
export default class EquipmentController extends Controller {
    getPicsById(): Promise<void>;
    uploadPic(): Promise<void>;
    search(): Promise<void>;
    index(): Promise<void>;
    show(): Promise<void>;
    create(): Promise<void>;
    update(): Promise<void>;
    destroy(): Promise<void>;
}
