import RechargeRespository from "./../database/repositories/rechargeRepository";

export default class RechargeService {
  async create(data) {
    const record = await RechargeRespository.create(data);
  }
  async update(id, data) {
    const record = await RechargeRespository.update(id);
  }
  async destroyAll(ids) {
    try {
      for (const id of ids) {
        await RechargeRespository.destroy(id);
      }
    } catch (error) {}
  }
  async findById(id) {
    return RechargeRespository.findById(id);
  }
}
