import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text } from "react-native";
import { WarnaSaya } from "./src/styles/Warna";
import { ThemeContext } from "./src/context/ThemeContext";
import KalkulatorSaya from "./src/components/KalkulatorSaya";

export default function App() {
  const [tema, setTema] = useState("light");
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
          onValueChange={() => setTema(tema === "light" ? "dark" : "light")}
        />
        <KalkulatorSaya />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: WarnaSaya.light,
  },
});
