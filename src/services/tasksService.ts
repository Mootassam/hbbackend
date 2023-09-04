import TasksRepository from "./../database/repositories/tasksRepository";
export default class TasksService {
  async create(data) {
    const record = await TasksRepository.create(data);
  }
  async update(id, data) {
    const record = await TasksRepository.update(id);
  }
  async destroyAll(ids) {
    try {
      for (const id of ids) {
        await TasksRepository.destroy(id);
      }
    } catch (error) {}
  }
  async findById(id) {
    return TasksRepository.findById(id);
  }
}
