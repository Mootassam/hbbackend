import ProductRepository from "./../database/repositories/productRespository";

export default class ProductService {
  async create(data) {
    const record = await ProductRepository.create(data);
  }
  async update(id, data) {
    const record = await ProductRepository.update(id);
  }
  async destroyAll(ids) {
    try {
      for (const id of ids) {
        await ProductRepository.destroy(id);
      }
    } catch (error) {}
  }
  async findById(id) {
    return ProductRepository.findById(id);
  }
}
