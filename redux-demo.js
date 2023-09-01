const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'increment': {
      ++newState.counter;
      break;
    }
    case 'decrement': {
      --newState.counter;
      break;
    }
    default: {
      break;
    }
  }
  return newState;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
