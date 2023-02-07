import React from 'react';

const ChannelsListContainer: React.FC<{ channelsList: string[] }> = (props) => {
  const { channelsList } = props;

  return (
    <div>
      {channelsList?.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default ChannelsListContainer;
