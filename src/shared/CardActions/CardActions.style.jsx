import tw, { styled } from 'twin.macro';
import { colors } from '../../constants/colors';
import { breakpoints } from '../../constants/breakpoints';

export const CardActionsWrapper = styled.div`
  ${tw`
    absolute 
    top-0
  `}
  
  right: 15px;
`;

export const IconWrapper = styled.button`
  ${tw`
    relative
    top-0
    right-0 
    flex
    items-center 
    justify-center
    outline-none
  `}

  width: 50px;
  height: 50px;
`;

export const Icon = styled.div`
  ${tw`
    absolute
    inline-block
    rounded-full
    text-black
    z-50 
    flex
    items-center 
    justify-center
    right-2 
    top-2
    hover:bg-accent
    hover:opacity-100
  `}

  width: 20px;
  height: 20px;
  background: #9EA5BB;
  opacity: 0.8;

`;

export const Actions = styled.div`
  ${tw`
    absolute
    right-2
    bg-white
    mt-2
    rounded-sm
    z-50
  `}
  top: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  /* Very small screen */
  @media screen and (max-width:320px){
    right: -50px;
  }

`;

export const ActionItem = styled.button`
  ${tw`
    py-2
    lg:py-3
    px-2
    sm:hover:bg-accent
    text-left
    font-primary
    font-semibold
    text-black
    flex
    items-center
  `}

  width: 150px;
  font-size: 12px;
  z-index: 5000;

  ${({ added }) => added && tw`bg-accent`}

  svg{
    font-size: 14px;
    fill:${colors.primary};
  }


  @media screen and (min-width:${breakpoints.lg}px){
    width: 190px;
    font-size:14px;

    svg{
      font-size: 18px;
    }

    &:nth-of-type(2){
      svg{
        font-size: 20px;
      }
    }
  }
`;

export const ActionIcon = styled.span`
  ${tw`
    mr-2  
  `}
`;
