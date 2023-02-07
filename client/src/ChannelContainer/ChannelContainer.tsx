import styled from 'styled-components';

const ChannelContentWrapper = styled.div`
  border-right: 1px solid lightgray;
`;
const ThreadsListWrapper = styled.div``;
const ThreadListItemWrapper = styled.div`
  padding: 20px 10px;
  background-color: #f2ebfb;
  border-bottom: 1px solid lightgray;
`;
const HeaderWrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid #8790998c;
  display: grid;
  align-content: center;
  align-items: center;
  column-gap: 10px;
  padding: 0 10px;
`;
const AddNewThread = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 15px 10px;
  display: grid;
  align-items: center;
  align-content: center;
`;
const AllThreadsHeader = styled.div`
  padding: 20px 10px;
  font-size: 14px;
  color: darkslategrey;
`;

const TREADS_LIST = ['Thread 1', 'Thread 2'];
const ChannelContainer: React.FC<{
  selectedChannel?: { id: number; name: string };
}> = ({ selectedChannel }) => {
  return (
    <ChannelContentWrapper>
      <HeaderWrapper>{selectedChannel?.name ?? ''}</HeaderWrapper>
      <AddNewThread>Start a new thread</AddNewThread>
      <AllThreadsHeader>All threads</AllThreadsHeader>
      <ThreadsListWrapper>
        {TREADS_LIST?.map((item) => {
          return (
            <ThreadListItemWrapper key={item}>{item}</ThreadListItemWrapper>
          );
        })}
      </ThreadsListWrapper>
    </ChannelContentWrapper>
  );
};

export default ChannelContainer;
