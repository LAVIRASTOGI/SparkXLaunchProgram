import * as actionTypes from "./actionType";

import userSpaceXService from "./../../services/userSpaceXService";

export const actionCreators = {
  getUserListAction: (data) => async (dispatch, GetState) => {
    //alert(data);
    console.log(data);
    dispatch({ type: actionTypes.GET_USER_LIST_REQUEST });

    let res = await userSpaceXService.getUserList(data);

    let filterData = res.data.map((userSpacex) => {
      return {
        image: userSpacex.links.mission_patch,
        mission_name:userSpacex.mission_name,
        flight_number:userSpacex.flight_number,
        missionId: userSpacex.mission_id,
        launch_year: userSpacex.launch_year,
        launch_success: userSpacex.launch_success,
        land_success: userSpacex.rocket.first_stage.cores[0].land_success,
      };
    });

    dispatch({ type: actionTypes.GET_USER_LIST_RESPONSE, data: filterData });
  },
};
