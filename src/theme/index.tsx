import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

export const theme = extendTheme({
  colors,
  initialColorMode: "dark",
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      ":root": {
        colorScheme: "dark",
      },
      body: {
        // colorScheme: "dark",
        bg: "bg.900",
        color: "white",
      },
      pre: {
        bg: "red",
      },
    },
  },
});
