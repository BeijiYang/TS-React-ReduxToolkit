import { Dispatch } from 'redux';

import { get } from '../../utils/request';
import { EmployeeRequest, EmployeeResponse } from '../../interface/employee';
import  { GET_EMPLOYEE_URL } from '../../constants/urls';
import { GET_EMPLOYEE } from '../../constants/actions';

type State = Readonly<{
  employeeList: EmployeeResponse
}>

type Action = {
  type: string;
  payload: EmployeeResponse
}

const initialState: State = {
  employeeList: undefined
}

export const getEmployee = (param: EmployeeRequest) => {
  return (dispatch: Dispatch) => {
    get(GET_EMPLOYEE_URL, param)
      .then(res => {
        dispatch({
          type: GET_EMPLOYEE,
          payload: res.data
        })
      })
  };
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        employeeList: action.payload
      };
  
    default:
      return state;
  }
}
