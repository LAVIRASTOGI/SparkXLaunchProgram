import React , {Component} from 'react';

import { actionCreators } from "../../store/actions/actionCreator";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
      userSpaceXdata: state.userSpaceXReducer,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
  }

class SpaceXUserList extends Component {
    state = {  }
    render() { 
        return ( 
            <>
           
            </>
         );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SpaceXUserList);