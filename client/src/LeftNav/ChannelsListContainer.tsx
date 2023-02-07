import React from 'react';
import styled from 'styled-components';

const ChannelListWrapper = styled.div`
  display: grid;
  margin: 0 10px;
`;
const ChannelListItem = styled.div`
  color: #6c7783;
  padding: 5px;
`;
const ChannelsListContainer: React.FC<{
  channelsList: { id: number; name: string }[];
  handleChannelSelected: (id: number) => void;
}> = (props) => {
  const { channelsList, handleChannelSelected } = props;
  return (
    <ChannelListWrapper>
      {channelsList?.map((item) => (
        <ChannelListItem
          key={item.id}
          onClick={() => handleChannelSelected(item.id)}
        >{`#${item.name}`}</ChannelListItem>
      ))}
    </ChannelListWrapper>
  );
};

export default ChannelsListContainer;
