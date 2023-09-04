import VipRepository from "./../database/repositories/vipRespository";
export default class VipService {
  async create(data) {
    const record = await VipRepository.create(data);
  }
  async update(id, data) {
    const record = await VipRepository.update(id);
  }
  async destroyAll(ids) {
    try {
      for (const id of ids) {
        await VipRepository.destroy(id);
      }
    } catch (error) {}
  }
  async findById(id) {
    return VipRepository.findById(id);
  }
}
