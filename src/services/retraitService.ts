import RetraitRepository from "./../database/repositories/retraitRepository";

export default class RetraitService {
  async create(data) {
    const record = await RetraitRepository.create(data);
  }
  async update(id, data) {
    const record = await RetraitRepository.update(id);
  }
  async destroyAll(ids) {
    try {
      for (const id of ids) {
        await RetraitRepository.destroy(id);
      }
    } catch (error) {}
  }
  async findById(id) {
    return RetraitRepository.findById(id);
  }
}
