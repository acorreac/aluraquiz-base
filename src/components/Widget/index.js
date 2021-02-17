import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: #00000070;
  border-radius: 10px 25px 10px 25px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 800;
    line-height: 1;
    margin-bottom: center;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 2;
  }
  
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
  background-color: #00000070;
 
   * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 15px 24px 15px;
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

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 10px 15px;
  margin-bottom: .3s;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
