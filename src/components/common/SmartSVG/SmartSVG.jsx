import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  * {
    fill: ${props => props.color};
  }
`
const SmartSVG = ({color, height, width, SvgComponent}) => {
    return <>
        <Wrapper color={color}>
            <SvgComponent width={width} height={height}/>
        </Wrapper>
    </>
}

export default SmartSVG;