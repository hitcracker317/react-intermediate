import React, { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  // children：呼び出し側で囲っている要素(ボタンのラベル)を受け取る
  children: ReactNode;
  isFullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = props => {
  const {
    children,
    isFullWidth = false,
    disabled = false,
    loading = false,
    onClick
  } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      disabled={disabled || loading}
      isLoading={loading}
      isFullWidth={isFullWidth}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};