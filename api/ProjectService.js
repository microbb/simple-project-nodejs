import Project from "./Project.js";

class ProjectService {
    async create(project) {
        return await Project.create(project);
    }

    async getAll() {
        return await Project.find();
    }

    async getOne(id) {
        if (!id) {
            throw new Error('ID не указан')
        }
        return await Project.findById(id);
    }

    async update(project) {
        if (!project._id) {
            throw new Error('ID не указан');
        }
        return await Project.findByIdAndUpdate(project._id, project, {new: true});
    }

    async delete(id) {
        if (!id) {
            throw new Error('ID не указан')
        }

        return await Project.findByIdAndDelete(id);
    }
}

export default new ProjectService();