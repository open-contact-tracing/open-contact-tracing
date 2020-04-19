import * as React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import OCTSemiBoldText from "../components/OCTSemiBoldText";
import OCTText from "../components/OCTText";
import useColors from "../hooks/useColors";
import typography from "../utils/typography";
import Spacer from "../components/Spacer";
import Button from "../components/Button";
import Radar from "../components/Radar";

const App = () => {
  const colors = useColors();
  return (
    <>
      <StatusBar barStyle={colors.dark ? "light-content" : "dark-content"} />
      <View
        style={{
          paddingTop: 236,
          flex: 1,
          backgroundColor: colors.background,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Radar />
          </View>
        </View>
        <View
          style={{
            padding: typography.spacing._8,
            alignItems: "center",
          }}
        >
          <OCTSemiBoldText
            color={colors.label}
            size={typography.sizes.label}
            align="center"
          >
            No contact detected
          </OCTSemiBoldText>
          <Spacer height="_2" />
          <OCTText
            color={colors.secondaryLabel}
            size={typography.sizes.label}
            align="center"
          >
            Based on your data, you have not been nearby someone who tested
            positive
          </OCTText>
          <View style={{ width: 200 }}>
            <Spacer height="_12" />
            <Button onPress={() => undefined}>I think I'm infected</Button>
            <Spacer height="_5" />
            <Button onPress={() => undefined}>Learn more</Button>
          </View>
        </View>
      </View>
    </>
  );
};

export default App;
