// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportEquipments from '../../../app/controller/Equipments';
import ExportHome from '../../../app/controller/Home';

declare module 'egg' {
  interface IController {
    equipments: ExportEquipments;
    home: ExportHome;
  }
}
