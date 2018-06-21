//initial state
const initialState = {
  loanType: "Home Purchase",
  propertyType: "Single Family Home",
  city: "",
  propToBeUsedOn: "",
  found: "false",
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: "",
  history: "",
  addressOne: "",
  addressTwo: "",
  addressThree: "",
  firstName: "",
  lastName: "",
  email: ""
};

//action types
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_AGENT = "UPDATE_AGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_ADDRESS1 = "UPDATE_ADDRESS1";
const UPDATE_ADDRESS2 = "UPDATE_ADDRESS2";
const UPDATE_ADDRESS3 = "UPDATE_ADDRESS3";
const UPDATE_FIRST = "UPDATE_FIRST";
const UPDATE_LAST = "UPDATE_LAST";
const UPDATE_EMAIL = "UPDATE_EMAIL";

//reducer function
function reducer(state = initialState, action) {
  console.log("REDUCER HIT: Action ->", action);
  switch (action.type) {
    case UPDATE_LOAN_TYPE:
      //   return Object.assign({}, state, { loanType: action.payload });
      return {
        ...state,
        loanType: action.payload
      };
    case UPDATE_PROPERTY_TYPE:
      return {
        ...state,
        propertyType: action.payload
      };
    case UPDATE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case UPDATE_PROP:
      return {
        ...state,
        city: action.payload
      };
    case UPDATE_FOUND:
      return {
        ...state,
        found: action.payload
      };
    case UPDATE_AGENT:
      return {
        ...state,
        agent: action.payload
      };
    case UPDATE_COST:
      return {
        ...state,
        cost: action.payload
      };
    case UPDATE_DOWNPAYMENT:
      return {
        ...state,
        downpayment: action.payload
      };
    case UPDATE_CREDIT:
      return {
        ...state,
        credit: action.payload
      };
    case UPDATE_HISTORY:
      return {
        ...state,
        credit: action.payload
      };
    case UPDATE_ADDRESS1:
      return {
        ...state,
        address1: action.payload
      };
    case UPDATE_ADDRESS2:
      return {
        ...state,
        address2: action.payload
      };
    case UPDATE_ADDRESS3:
      return {
        ...state,
        address3: action.payload
      };
    case UPDATE_FIRST:
      return {
        ...state,
        first: action.payload
      };
    case UPDATE_LAST:
      return {
        ...state,
        last: action.payload
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
}

// action creators
export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  };
}
export function updatePropertyType(property) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateProp(prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  };
}

export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  };
}

export function updateAgent(agent) {
  return {
    type: UPDATE_AGENT,
    payload: agent
  };
}

export function updateCost(cost) {
  return {
    type: UPDATE_COST,
    payload: cost
  };
}

export function updateDownPayment(downpayment) {
  return {
    type: UPDATE_DOWNPAYMENT,
    payload: downpayment
  };
}

export function updateCredit(credit) {
  return {
    type: UPDATE_CREDIT,
    payload: credit
  };
}

export function updateHistory(history) {
  return {
    type: UPDATE_HISTORY,
    payload: history
  };
}

export function updateAddress1(address1) {
  return {
    type: UPDATE_ADDRESS1,
    payload: address1
  };
}

export function updateAddress2(address2) {
  return {
    type: UPDATE_ADDRESS2,
    payload: address2
  };
}

export function updateAddress3(address3) {
  return {
    type: UPDATE_ADDRESS3,
    payload: address3
  };
}

export function updateFirst(first) {
  return {
    type: UPDATE_FIRST,
    payload: first
  };
}

export function updateLast(last) {
  return {
    type: UPDATE_LAST,
    payload: last
  };
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
}

export default reducer;
