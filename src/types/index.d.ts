import {navRoutes} from '../utils/constants';

type RouteKeys = keyof typeof navRoutes;
type RouteValues = (typeof navRoutes)[RouteKeys];

export interface ScreenProps {
  navigation: {
    navigate: (route: RouteValues, props?: any) => void;
    goBack: () => void;
  };
}
