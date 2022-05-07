import Project from "./Project.js";

class PostController {
    async create(req, res) {
        try {
            const { p_name, p_organization, view, p_link, p_git, img, p_description, p_i_did, team_link, skills } = req.body;
            const project = await Project.create({ p_name, p_organization, view, p_link, p_git, img, p_description, p_i_did, team_link, skills });

            res.json(project)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try{
            const projects = await Project.find();
            return res.json(projects);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try{
            const { id } = req.params;
            if (!id) {
                res.status(400).json({massage: 'id not found'})
            }
            const project = await Project.findById(id);
            return res.json(project);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try{
            const project = req.body;
            if (!project._id) {
                res.status(400).json({massage: 'id not found'});
            }
            const updatedProject = await Project.findByIdAndUpdate(project._id, project, {new: true});
            return res.json(updatedProject);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try{
            const { id } = req.params;
            if (!id) {
                res.status(400).json({massage: 'id not found'})
            }
            const project = await Project.findByIdAndDelete(id);
            return res.json(project);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();