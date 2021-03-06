/**
 *
 * Button
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import mixins from '../../assets/styles/mixins';

const Button = styled.button`
  /* General style */
  height: ${sizes.button.height.large};
  padding: ${sizes.button.padding.topBottom} ${sizes.button.padding.leftRight};
  font-weight: ${sizes.fontWeight.bold};
  font-size: 1.3rem;
  line-height: normal;
  border-radius: ${sizes.borderRadius};
  cursor: pointer;
  outline: 0;
  background-color: ${colors.white};
  &:hover, &:active {
    ${mixins(colors.lightGreyAlpha).bshadow};
  }
  &:focus {
    outline: 0;
  }


  ${({ disabled }) =>
    disabled &&
    `
    &:hover {
      box-shadow: none;
      cursor: initial;
    }
    `}

  /* Specific style */
  ${({ color }) =>
    color !== 'none' &&
    `
      background-color: ${colors.button[color].backgroundColor};
      border: 1px solid ${colors.button[color].borderColor};
      color: ${colors.button[color].color};
    `}

  ${({ disabled }) =>
    disabled &&
    `
      background-color: ${colors.button.disabled.backgroundColor};
      border: 1px solid ${colors.button.disabled.borderColor};
      color: ${colors.button.disabled.color};
      &:hover {
        box-shadow: none;
        cursor: initial;
      }
    `}

  ${({ color }) =>
    color === 'success' &&
    `
      min-width: ${sizes.button.minWidth};
    `}

    /* FontAwesome icons */

    > span svg {
      font-size: 10px;
      vertical-align: initial;
    }

    /* Custom icons */

    > svg {
      height: 10px;
      width: auto;
      margin-right: 10px;
      vertical-align: baseline;
    }



`;

Button.defaultProps = {
  color: 'primary',
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'cancel',
    'success',
    'delete',
    'none',
  ]),
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
