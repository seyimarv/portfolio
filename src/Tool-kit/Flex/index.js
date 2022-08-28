import styled from 'styled-components';
import { space, layout } from 'styled-system';



const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  justify-content: ${({  justifyContent }) => (justifyContent ? justifyContent : 'center')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  ${layout}
  ${space}
`;

export default Flex;

