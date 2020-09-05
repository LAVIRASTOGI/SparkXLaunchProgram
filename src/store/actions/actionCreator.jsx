import * as actionTypes from "./actionType";

import userSpaceXService from "./../../services/userSpaceXService";

export const actionCreators = {
  getUserListAction: (data) => async (dispatch, GetState) => {
    dispatch({ type: actionTypes.GET_USER_LIST_REQUEST });

    var res = await userSpaceXService.getUserList();

    var filterData = res.data.map((userSpacex) => {
      return {
        image: userSpacex.links.mission_patch,
        payload_id: userSpacex.rocket.second_stage.payloads[0].payload_id,
        missionId: userSpacex.mission_id,
        launch_year: userSpacex.launch_year,
        launch_success: userSpacex.launch_success,
        land_success: userSpacex.rocket.first_stage.cores[0].land_success,
      };
    });

    dispatch({ type: actionTypes.GET_USER_LIST_RESPONSE, data: filterData });
  },
};
