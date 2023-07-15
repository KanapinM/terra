import styled from 'styled-components';

interface StyledFlexProps {
    direction?: string;
    justify?: string;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    max?: string;
    background?: string;
    radius?: string;
    fontWeight?: string;
    fontSize?: string;
    line?: string;
    fontFamily?: string;
    shadow?: string;
}

const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'space-between'};
  margin: ${(props) => props.margin || '0 auto'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || '86.67%'};
  height: ${(props) => props.height || 'fit-content'};
  max-width: ${(props) => props.max || '325px'};
  background: ${(props) => props.background || 'white'};
  border-radius: ${(props) => props.radius || '0'};
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '16px'};
  line-height: ${(props) => props.line || 'normal'};
  font-family: ${(props) => props.fontFamily || 'Open Sans'};
  box-shadow: ${(props) => props.shadow || 'none'};
`;

interface FlexProps extends StyledFlexProps {
    children?: React.ReactNode;
}

function Flex(props: FlexProps) {
    return <StyledFlex {...props} />;
}

export default Flex;