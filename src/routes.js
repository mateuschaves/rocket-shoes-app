import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Cart from '~/pages/Cart';

const Routes = createAppContainer(createSwitchNavigator({ Main, Cart }));

export default Routes;
