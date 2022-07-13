import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${p => p.theme.colors.overlay};
`;

export const ModalStyled = styled.div`
  display: block;
  max-width: 100%;
  max-height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.modalShadow};
`;
