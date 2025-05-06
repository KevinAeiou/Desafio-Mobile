import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

interface BarraInferiorProps {
    children?: React.ReactNode;
}
type tabBarIconProps = {
    focused: boolean;
    color: string;
    size: number;
  }
type RootTabParamList = {
    Home: undefined;
    'Câmera': undefined;
}
type IoniconsName = (
    'home' | 'home-outline' | 'camera' | 'camera-outline' | 'alert-circle'
  )
const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BarraInferior({ children }: BarraInferiorProps) {
    
    const getIconName = (routeName: string, focused: boolean): IoniconsName => {
        switch (routeName) {
            case 'Home':
                return focused ? 'home' : 'home-outline';
            case 'Câmera':
                return focused ? 'camera' : 'camera-outline';
            default:
                return 'alert-circle';
        }
    };
    const TabBarIcon = ({ route, focused, color, size }: {route: RouteProp<RootTabParamList, keyof RootTabParamList>} & tabBarIconProps) => {
        return <Ionicons
            name={getIconName(route.name, focused)}
            size={size}
            color={color}
        />
    };
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }: tabBarIconProps) => (
                    <TabBarIcon
                        route={route}
                        focused={focused}
                        color={color}
                        size={size}
                    />
                ),
                tabBarActiveTintColor: '#6200ee',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
            >
                {children}
            </Tab.Navigator>
    )
}