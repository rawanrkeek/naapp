import react  from "react";
import { View ,Text } from "react-native";
import styles from '../../services/appStyle'

const Dashboard = () => {
    return(
        <View style={[styles.container,{backgroundColor:'#ffffff'}]}>
            <Text>Dashboard</Text>

        </View>
    )
}
export default Dashboard;