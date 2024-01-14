import react  from "react";
import { View ,Text} from "react-native";
import styles from '../../services/appStyle'

const Catalog = () => {
    return(
        <View style={[styles.container,{backgroundColor:'#ffffff'}]}>
            <Text>Catalog</Text>
        </View>
    )
}
export default Catalog;