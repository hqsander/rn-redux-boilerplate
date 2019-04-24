import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from './telas/Login';
import ExemploA from './telas/ExemploA';
import ExemploB from './telas/ExemploB';

const Navigator = createAppContainer(
  createSwitchNavigator({
    Login,
    App: createBottomTabNavigator({
      ExemploA,
      ExemploB
    })
  })
);

export default Navigator;
