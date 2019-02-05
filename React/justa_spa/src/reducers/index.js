// import { ADD_CUSTOMER } from "../constants/action-types";

//TODO: Trocar isso por um mock via JSON;
const initialState = {
    customers: [{
        "customer": {
            "id":"1",
            "name":"Eugenia King",
            "company":" Breakfast of Champions",
            "status":" Idle",
            "lastChange":" 04/24/2017",
            "notes":" Fact and Truth"
        }
    },
    {
        "customer": {
            "id":"2",
            "name":"Customer Beta",
            "company":"Breakfast of Champions",
            "status":" Close",
            "lastChange":" 11/01/2017",
            "notes":" On being Human"
        }
    }],

    charts: [
        {"date": '31/12', rs: 4000},
        {"date": '', rs: 3000},
        {"date": '', rs: 2000},
        {"date": '', rs: 3000},
        {"date": '', rs: 3000},
        {"date": '', rs: 5500},
        {"date": '', rs: 3000},
        {"date": '', rs: 3000},
        {"date": '', rs: 3000},
        {"date": '', rs: 8000},
        {"date": '', rs: 3000},
        {"date": '', rs: 900},
        {"date": '', rs: 12000},
        {"date": '', rs: 3000},
        {"date": '14/01', rs: 2780},
        {"date": '', rs: 1890},
        {"date": '', rs: 2390},
        {"date": '', rs: 3000},
        {"date": '', rs: 3000},
        {"date": '', rs: 400},
        {"date": '', rs: 3000},
        {"date": '', rs: 3000},
        {"date": '', rs: 6000},
        {"date": '', rs: 700},
        {"date": '', rs: 900},
        {"date": '', rs: 3000},
        {"date": '', rs: 3000},
        {"date": '', rs: 3000},
        {"date": '28/01', rs: 3490},]
};

function rootReducer(state = initialState, action) {
//   if (action.type === ADD_CUSTOMER) {
//     return Object.assign({}, state, {
//         customers: state.customers.concat(action.payload)
//     });
//   }
  return state;
}

  export default rootReducer;