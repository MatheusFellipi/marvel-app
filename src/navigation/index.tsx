import { appStackRoutes } from "./routes";
import { Stack } from "expo-router";

export const Navigation = () => (
  <Stack>
    {appStackRoutes.map((item) => (
      <Stack.Screen
        key={item.name}
        name={item.name}
        options={{ headerShown: false }}
      />
    ))}
  </Stack>
);
