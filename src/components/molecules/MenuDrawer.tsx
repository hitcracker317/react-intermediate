 import React, { VFC, memo } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo(props => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickUserManagement,
    onClickSetting
  } = props; // propsで親コンポーネントから関数を受け取る

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody as="nav" p={0} bg="gray.100">
            <Button as="nav" w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button as="nav" w="100%" onClick={onClickUserManagement}>
              ユーザー一覧
            </Button>
            <Button as="nav" w="100%" onClick={onClickSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});