import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  width: ${p => p.theme.sizes.button}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};

  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
