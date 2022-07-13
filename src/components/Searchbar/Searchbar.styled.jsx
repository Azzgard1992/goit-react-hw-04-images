import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SearchbarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchButton = styled.button`
  position: absolute;
  top: ${p => p.theme.space[0]};
  right: ${p => p.theme.space[0]};
  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.white};
  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  cursor: pointer;
  border-bottom-right-radius: ${p => p.theme.radii.normal};
  border-top-right-radius: ${p => p.theme.radii.normal};
`;

export const SearchForm = styled(Form)`
  position: relative;
`;

export const Input = styled(Field)`
  display: block;
  width: ${p => p.theme.sizes.input}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
`;
