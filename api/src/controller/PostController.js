import ProjectService from "../service/ProjectService.js";


class PostController {
    async create(req, res) {
        try {
            const project = await ProjectService.create(req.body, req.files.picture);
            res.json(project)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try{
            const projects = await ProjectService.getAll();
            return res.json(projects);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getOne(req, res) {
        try{
            const project = await ProjectService.getOne(req.params.id);
            return res.json(project);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try{
            const updatedProject = await ProjectService.update(req.body);
            return res.json(updatedProject);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try{
            const project = await ProjectService.delete(req.params.id)
            return res.json(project);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new PostController();