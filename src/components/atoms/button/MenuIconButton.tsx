import React, { VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// propsの型定義
// propsで関数を親コンポーネントから受け取る
type Props = {
  onOpen: () => void;
};

// proprsを利用する場合のtypescriptの書き方(VFC<Props> = props)
export const MenuIconButton: VFC<Props> = props => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
};