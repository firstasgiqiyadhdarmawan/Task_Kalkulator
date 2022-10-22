import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text } from "react-native";
import { WarnaSaya } from "./src/styles/Warna";
import { ThemeContext } from "./src/context/ThemeContext";
import KalkulatorSaya from "./src/components/KalkulatorSaya";

export default function App() {
  const [tema, Tema] = useState("light");
  return (
    <ThemeContext.Provider value={tema}>
      <SafeAreaView
        style={
          tema === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <Switch
          value={tema === "dark"}
          onValueChange={() => Tema(tema === "light" ? "dark" : "light")}
        />
        <KalkulatorSaya />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WarnaSaya.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
