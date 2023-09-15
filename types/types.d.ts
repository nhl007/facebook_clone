type onlyChildrenProps = {
  children?: React.ReactNode | React.ReactElement | React.ReactElement[];
};

// type navProps = {
//   currentTab: string;
//   setCurrentTab: Dispatch<SetStateAction<string>>;
// };

type tabs = 'home' | 'friends' | 'notification' | 'profile';

type tabParams = {
  params: { currentTab: string };
};

type PostCardPropsType = {
  image: string;
  name: string;
};
