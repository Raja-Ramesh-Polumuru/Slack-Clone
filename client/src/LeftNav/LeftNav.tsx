import React from 'react';
import styled from 'styled-components';
import ChannelsListContainer from './ChannelsListContainer';
import { SearchIconCmp } from './shared';

const LeftNavWrapper = styled.div``;
const SearchWrapper = styled.div``;
const HeaderWrapper = styled.div``;
const ChannelsListHeader = styled.div``;

const CHANNELS_LIST = ['qbo', 'Sales'];
export const LeftNav: React.FC<{ navItems: string[] }> = (props) => {
  const { navItems } = props;
  return (
    <LeftNavWrapper>
      <HeaderWrapper>LeftNavHeader</HeaderWrapper>
      <SearchWrapper>
        <SearchIconCmp /> <input placeholder="Search" />
      </SearchWrapper>
      {navItems?.map((item) => {
        return <div>{item}</div>;
      })}
      <ChannelsListHeader>Channels + </ChannelsListHeader>
      <ChannelsListContainer channelsList={CHANNELS_LIST} />
    </LeftNavWrapper>
  );
};
