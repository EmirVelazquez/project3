import React from "react";
import { Image, StyleSheet } from "react-native";

// Individual component for rendering the Logo
const LogoSecond = () => {
    return (
        <Image
            source={require("../assets/LogoSecond.png")}
            style={styles.image}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        marginTop: "10%",
        height: "30%",
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto"
    }
});
export default LogoSecond;