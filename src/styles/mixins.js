import { css } from 'styled-components';

const button = css`
  color: ${({ theme }) => theme.accentColor};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.accentColor};
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.accentTint};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export const mixins = {
    flexCenter: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  
    flexBetween: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
  
    link: css`
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      position: relative;
      transition: var(--transition);
      cursor: pointer;
      &:hover,
      &:active,
      &:focus {
        color: ${({ theme }) => theme.accentColor};
        outline: 0;
      }
    `,

    inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    color: ${({ theme }) => theme.accentColor}
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.accentColor}
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${({ theme }) => theme.accentColor} !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${({ theme }) => theme.accentColor};
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button,

  smallButton: css`
    color: ${({ theme }) => theme.accentColor};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.accentColor};
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.accentTint};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${({ theme }) => theme.accentColor};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.accentColor};
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.accentTint};
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${({ theme }) => theme.backgroundShadow};
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${({ theme }) => theme.backgroundShadow};
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      color: ${({ theme }) => theme.textMain};
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.accentColor};
      }
    }
  `,
};

// export default mixins;