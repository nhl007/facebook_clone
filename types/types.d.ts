type onlyChildrenProps = {
  children?: React.ReactNode | React.ReactElement | React.ReactElement[];
};

type navProps = {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
};

// ? context //auth // initial state

//? Feature context types

type initialFeatureContextStateType = {
  showAlert: boolean;
  alertText: string;
  alertSuccess: boolean;
  isLoading: boolean;
};

type featureContextActionsType = {
  type: string;
  payload?: {
    type?: boolean;
    text?: string;
    isLoading?: boolean;
  };
};

type PostCardPropsType = {
  image: string;
  name: string;
};
