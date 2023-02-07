import React, { useState } from 'react';
import styled from 'styled-components';
import ChannelsListContainer from './ChannelsListContainer';
import { HamburgerMenuIconCmp, SearchIconCmp } from './shared';
import logo from './Qbo-logo.png';

const LeftNavWrapper = styled.div`
  border-right: 1px solid #8790998c;
  height: 100%;
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  column-gap: 10px;
  border-bottom: 1px solid #8790998c;
  input {
    border: none;
    outline: none;
  }
`;
const HeaderWrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid #8790998c;
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-columns: 24px auto;
  column-gap: 10px;
`;
const NavList = styled.div`
  display: grid;
  margin: 20px 10px;
`;
const NavItem = styled.div`
  color: #6c7783;
  padding: 5px;
`;
const ChannelsListHeader = styled.div`
  padding: 20px 10px;
  color: darkslategrey;
`;

export const LeftNav: React.FC<{
  navItems: string[];
  channelsList: { id: number; name: string }[];
  handleChannelSelected: (id: number) => void;
}> = (props) => {
  const { navItems, channelsList,handleChannelSelected } = props;
  const [addChannelModalOpen, setAddChannel] = useState(false);
  const handleAddChannel = () => {
    setAddChannel(true);
  };

  return (
    <LeftNavWrapper>
      <HeaderWrapper>
        <HamburgerMenuIconCmp />
        <img src={logo} alt="logo" height={40} />
      </HeaderWrapper>
      <SearchWrapper>
        <SearchIconCmp /> <input placeholder="Search" />
      </SearchWrapper>
      <NavList>
        {navItems?.map((item) => {
          return <NavItem>{item}</NavItem>;
        })}
      </NavList>
      <ChannelsListHeader>
        Channels <button onClick={handleAddChannel}>+</button>{' '}
      </ChannelsListHeader>
      <ChannelsListContainer
        channelsList={channelsList}
        handleChannelSelected={handleChannelSelected}
      />
    </LeftNavWrapper>
  );
};
