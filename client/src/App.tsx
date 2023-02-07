import { AllThreads } from './AllThreads/AllThreads';
import './App.css';
import { LeftNav } from './LeftNav/LeftNav';
import { MainSectionWrapper } from './styledComponents';
import { ThreadView } from './ThreadView/ThreadView';
const NAV_ITEMS = ['Home', 'Starred'];
const App = () => {
  return (
    <MainSectionWrapper>
      <LeftNav navItems={NAV_ITEMS} />
      <AllThreads />
      <ThreadView />
    </MainSectionWrapper>
  );
};
export default App;
