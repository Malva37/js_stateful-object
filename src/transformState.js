'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const type = action.type;

    switch (type) {
      case 'addProperties':
        // const { extraData } = actions[act];

        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        // const { keysToRemove } = actions[act];

        action.keysToRemove.forEach(key => delete state[key]);
        break;
      default :
        Object.keys(state).forEach(key => delete state[key]);
    }
  }

  return state;
}

module.exports = transformState;
