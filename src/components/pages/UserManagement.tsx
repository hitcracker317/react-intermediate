/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from 'react'
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/modal/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/providers/useLoginUserProvider";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen] // useCallbackの依存配列。この配列にセットしたstateの値の更新を監視する。
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner color="teal.200" />
        </Center>
      ) : (
        // wrap：https://chakra-ui.com/docs/layout/wrap
        // いい感じのレスポンシブで横並びしてくれる
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map(user => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  );
})