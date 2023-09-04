import BrandsRepository from "./../database/repositories/brandsRepository";

export default class BrandService {
  async create(data) {
    const record = await BrandsRepository.create(data);
  }
  async update(id, data) {
    const record = await BrandsRepository.update(id);
  }
  async destroyAll(ids) {
    try {
      for (const id of ids) {
        await BrandsRepository.destroy(id);
      }
    } catch (error) {}
  }
  async findById(id) {
    return BrandsRepository.findById(id);
  }
}
