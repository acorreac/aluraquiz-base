import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #00000070;
  border-radius: 10px 25px 10px 25px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 0;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 2;
  }
  
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
 
   * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 14px 24px 14px;
  & > *:first-child {
    margin-top: 10px;
  }
  & > *:last-child {
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
