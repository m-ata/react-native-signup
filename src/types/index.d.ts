import {navRoutes} from '../utils/constants';

type RouteKeys = keyof typeof navRoutes;
type RouteValues = (typeof navRoutes)[RouteKeys];

export interface ScreenProps<params = Record<string, string>> {
  navigation?: {
    navigate: (route: RouteValues, props?: any) => void;
    goBack: () => void;
  };
  route?: {
    key: string;
    name: string;
    params?: params;
    path?: string;
  };
}
