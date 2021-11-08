// Import plugin
import styled from "styled-components";

// TypeScript for Props
interface Props {
  theme: {
    break: [{ main: string }];
  };
}

// Create new style
const Section = styled.section`
  width: 100%;
  height: auto;
  display: block;
  min-height: 100vh;
  position: relative;
`;

// Export new style
export default Section;
