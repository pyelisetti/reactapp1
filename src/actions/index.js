
/*
export function getCurrentTime () {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      getTime();
    }, 1000);
  };
}*/


export function getCurrentTime() {
  const dateTime = Date.now();
  const ts = Math.floor(dateTime / 1000);
  return dispatch => {
    dispatch({
    type: 'GET_TIME',
    timeValue: ts
  });
  };
}

function getTime(){
  return {
  type: 'GET_TIME',
  timeValue: ts
};
}

export function getCurrentTime2 () {
  return dispatch => {
    dispatch(setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      getTime();
    }, 1000));
  };
}
