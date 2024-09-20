import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { UserNameContextTypes } from "./types";

const UserNameContext = createContext<{
  userName?: UserNameContextTypes["name"];
  isQuizStarted?: UserNameContextTypes["isQuizStarted"];
  updateUserName: (_val: string) => void;
  updateIsQuizStarted: (_val: boolean) => void;
}>({
  updateUserName: () => {},
  updateIsQuizStarted: () => {},
});

const { Provider, Consumer: UserNameConsumer } = UserNameContext;

const UserNameContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [userName, setUserName] = useState<UserNameContextTypes["name"]>("");
  const [isQuizStarted, setIsQuizStarted] = useState<
    UserNameContextTypes["isQuizStarted"] | undefined
  >(false);

  const updateUserName = (val: UserNameContextTypes["name"]) => {
    setUserName(val);
  };
  const updateIsQuizStarted = (val: UserNameContextTypes["isQuizStarted"]) => {
    setIsQuizStarted(val);
  };

  return (
    <Provider
      value={{ userName, updateUserName, isQuizStarted, updateIsQuizStarted }}
    >
      {children}
    </Provider>
  );
};
const useUserName = () => useContext(UserNameContext);

export { UserNameConsumer, UserNameContextProvider, useUserName };
