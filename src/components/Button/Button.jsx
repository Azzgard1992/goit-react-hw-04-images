import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', children, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
