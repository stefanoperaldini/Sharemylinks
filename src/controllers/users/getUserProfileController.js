import selectUserByIdModel from '../../models/users/selectUserByIdModel.js';

const getUserProfileController = async (req, res, next) => {
  try {
    const { user_id } = req.params;

    const user = await selectUserByIdModel(user_id);
    //Borramos email para que no sea visto por otra persona
    delete user.email;

    res.send({
      status: 'ok',
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default getUserProfileController;
