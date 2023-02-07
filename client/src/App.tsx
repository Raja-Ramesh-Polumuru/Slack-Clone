import { useState } from 'react';
import './App.css';
import ChannelContainer from './ChannelContainer/ChannelContainer';
import { LeftNav } from './LeftNav/LeftNav';
import { MainSectionWrapper } from './styledComponents';
import { ThreadView } from './ThreadView/ThreadView';
const NAV_ITEMS = ['Home', 'Starred'];
const CHANNELS_LIST = [
  { id: 1, name: 'qbo' },
  { id: 2, name: 'Sales' },
  { id: 2, name: 'Product' },
];

const App = () => {
  // const [navItems, setNavItems] = useState(NAV_ITEMS);
  const [channelsList, setChannelsList] = useState(CHANNELS_LIST);
  const [selectedChannel, setSelectedChannel] = useState<
    { id: number; name: string } | undefined
  >();
  const handleChannelSelected = (id: number) => {
    const channelSelected = channelsList?.find((channel) => channel.id === id);
    setSelectedChannel(channelSelected);
  };

  return (
    <MainSectionWrapper>
      <LeftNav
        navItems={NAV_ITEMS}
        channelsList={channelsList}
        handleChannelSelected={handleChannelSelected}
      />
      <ChannelContainer selectedChannel={selectedChannel} />
      <ThreadView />
    </MainSectionWrapper>
  );
};
export default App;
