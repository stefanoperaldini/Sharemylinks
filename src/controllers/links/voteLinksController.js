import selectLinkByIdModel from "../../models/links/selectLinkByIdModel.js";
import { cannotVoteOwnEntryError } from "../../services/errorService.js";
import insertLinkModel from "../../models/links/insertLinkModel.js";

const voteLinksController = async (req,res,next) => {
    try {
        const { link_id } = req.params;
        const { value } = req.body;

        const link = await selectLinkByIdModel(link_id);

        //el dueño de la entrada no puede votarse a el mismo
        //cannotVoteOwnEntryError
        if(link.user_id === req.user.id) cannotVoteOwnEntryError();

        const votesAvg = await insertLinkModel(value, link_id, req.user.id);

        res.send({
            status: 'ok',
            data: votesAvg
        });

    } catch (error) {
        next(error);
    }
}

export default voteLinksController;