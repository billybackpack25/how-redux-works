# Simple example of how redux works

- A single store, which takes in a reducer function to manage the state.

  ```js
  const store = redux.createStore(counterReducer);
  ```

- A reducer function from redux takes 2 parameters, the current state, and the action object which usually has a type property. The function must be pure, same input === same output, **no side effects**. The function must return the new state object without mutating it.

  ```js
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
  ```

- You can get the current state of the store by running

  ```js
  store.getState();
  ```

- Components subscribe to the store

  ```js
  store.subscribe(component);
  ```

- Those components can then dispatch `actions` to change the state from within redux, **never within the component**.

  ```js
  store.dispatch({ type: 'increment' });
  ```

# How to run

Running the below command.

```bash
cd redux-demo && npm i
node redux-demo.js
```

You should get this output

```
{ counter: 1 }
{ counter: 2 }
{ counter: 3 }
{ counter: 2 }
```
