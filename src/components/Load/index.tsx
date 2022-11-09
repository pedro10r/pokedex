import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

export function Load() {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={theme?.colors?.primary}
      size='small'
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    />
  );
}