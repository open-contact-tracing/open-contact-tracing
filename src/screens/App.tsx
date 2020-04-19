import * as React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import OCTStrongText from "../components/OCTStrongText";
import OCTText from "../components/OCTText";
import useColors from "../hooks/useColors";
import typography from "../utils/typography";
import Spacer from "../components/Spacer";

const App = () => {
  const colors = useColors();
  return (
    <>
      <StatusBar barStyle={colors.dark ? "light-content" : "dark-content"} />
      <SafeAreaView
        style={{
          justifyContent: "center",
          flex: 1,
          backgroundColor: colors.background,
        }}
      >
        <View
          style={{
            padding: typography.spacing._5,
          }}
        >
          <OCTStrongText
            color={colors.label}
            size={typography.sizes.label}
            align="center"
          >
            No contact detected
          </OCTStrongText>
          <Spacer height="_2" />
          <OCTText
            color={colors.secondaryLabel}
            size={typography.sizes.label}
            align="center"
          >
            Based on your data, you have not been nearby someone who tested
            positive
          </OCTText>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
