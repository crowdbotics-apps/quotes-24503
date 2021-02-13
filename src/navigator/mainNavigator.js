import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen71204837Navigator from '../features/BlankScreen71204837/navigator';
import UserProfile204808Navigator from '../features/UserProfile204808/navigator';
import Tutorial204807Navigator from '../features/Tutorial204807/navigator';
import NotificationList204779Navigator from '../features/NotificationList204779/navigator';
import Settings204778Navigator from '../features/Settings204778/navigator';
import Settings204770Navigator from '../features/Settings204770/navigator';
import UserProfile204768Navigator from '../features/UserProfile204768/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen71204837: { screen: BlankScreen71204837Navigator },
UserProfile204808: { screen: UserProfile204808Navigator },
Tutorial204807: { screen: Tutorial204807Navigator },
NotificationList204779: { screen: NotificationList204779Navigator },
Settings204778: { screen: Settings204778Navigator },
Settings204770: { screen: Settings204770Navigator },
UserProfile204768: { screen: UserProfile204768Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
