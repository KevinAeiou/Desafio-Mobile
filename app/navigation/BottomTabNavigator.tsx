import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTela from '../screens/HomeTela';
import CameraTela from '../screens/CameraTela';
import BarraInferior from '../components/BarraInferior';

type RootTabParamList = {
  Home: undefined;
  'Câmera': undefined;
}
const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BarraInferior>
      <Tab.Screen name="Home" component={HomeTela} />
      <Tab.Screen name="Câmera" component={CameraTela} />
    </BarraInferior>
  );
}