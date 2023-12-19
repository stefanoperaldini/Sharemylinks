import selectAllLinksModel from '../../models/links/selectAllLinksModel.js';

const listLinksController = async (req,res,next) => {
    try {
        
        const links = await selectAllLinksModel();

        res.send({
            status:'Ok',
            data: links
        })
    } catch (error) {
        next(error);
    }
}

export default listLinksController;