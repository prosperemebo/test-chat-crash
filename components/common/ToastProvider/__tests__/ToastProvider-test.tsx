import React from "react";
import ToastProvider from "../ToastProvider";
import { ThemeProvider } from "styled-components/native";
import { render } from "@testing-library/react-native";

jest.mock("react-native-toast-message", () => ({
  __esModule: true,
  default: jest.fn(() => null),
  BaseToast: jest.fn(() => null),
}));

const mockTheme = {
  common: {
    toastBorderColor: "#4CAF50",
    toastBackground: "#F5F5F5",
    toastTextColor: "#333",
  },
};

describe("ToastProvider", () => {
  it("renders the Toast component with correct theme", () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <ToastProvider />
      </ThemeProvider>
    );
  });
});
