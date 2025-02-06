import { useMemo } from "react";
import { useTheme } from "styled-components/native";
import Toast, { BaseToast, BaseToastProps } from "react-native-toast-message";

const ToastProvider = () => {
  const theme = useTheme();

  const toastConfig = useMemo(
    () => ({
      success: (props: BaseToastProps) => (
        <BaseToast
          {...props}
          style={{
            borderLeftColor: theme.common.toastBorderColor,
            backgroundColor: theme.common.toastBackground,
          }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          text1Style={{
            fontSize: 15,
            fontWeight: "400",
            color: theme.common.toastTextColor,
          }}
          text1NumberOfLines={3}
        />
      ),
    }),
    []
  );

  return <Toast config={toastConfig} />;
};

export default ToastProvider;
