//? Feature context types

type initialFeatureContextStateType = {
  showAlert: boolean;
  alertText: string;
  alertSuccess: boolean;
  isLoading: boolean;
};

type FeatureContextType = {
  state: initialFeatureContextStateType;
  displayAlert: (alertText: string, Success: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
};

type featureContextActionsType = {
  type: string;
  payload?: {
    type?: boolean;
    text?: string;
    isLoading?: boolean;
  };
};
