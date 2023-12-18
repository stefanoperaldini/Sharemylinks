import selectAllLinksModel from '../../models/links/selectAllLinksModel.js';

const listLinksController = async (req,res,next) => {
    try {
        
        const entries = await selectAllLinksModel();

        res.send({
            data: entries
        })
    } catch (error) {
        next(error);
    }
}

export default listLinksController;