import tw, { styled } from 'twin.macro';

export const ActionsWrapper = styled.div`
  ${tw`
    flex
    flex-wrap
    mb-5
    gap-x-3
    gap-y-4
  `}

  /* Disable Tooltip On Small Screen */
  .__react_component_tooltip {
    ${tw`
      hidden
      sm:inline-block
    `}
  }
`;

export const ActionButton = styled.button`
  ${tw`
    rounded-full
    flex
    items-center
    justify-center
    bg-accent
  `}

  &:hover{
    background: #417ec4;
  }

  width: 40px;
  height: 40px;
  font-size: ${({ fz }) => fz || 20}px;
`;

export const Score = styled(ActionButton)`
  ${tw`
    font-primary
    text-primary
    font-bold
    text-base
    hover:text-white
  `}

  background-color: ${(props) => props.bg};
`;

export const PlayButton = styled.span`
  ${tw`
    bg-transparent
    text-2xl
    rounded-full
    flex
    items-center
    justify-center
    bg-none
  `}

  width: 40px;
  height: 40px;
  font-size: ${({ fz }) => fz || 20}px;
  opacity: 0.96;
`;

export const PlayAction = styled.button`
  ${tw`
    flex
    items-center
    bg-accent
    pr-4
    pl-1 
    sm:pl-3 
    sm:pr-5
    rounded-full
  `}

  &:hover{
    background: #417ec4;
  }
`;

export const Text = styled.p`
  ${tw`
    font-primary
    text-base
    sm:text-lg
    font-semibold
  `}
`;

export const StyledTooltip = styled.span`
  ${tw`
    font-primary
    text-base
    font-semibold
  `}
`;
