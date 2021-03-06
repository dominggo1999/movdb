import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from '../../shared/Link';
import {
  CardWrapper,
  CardImage,
  Text,
  CardContent,
} from './CastCardScroll.style';

import 'react-lazy-load-image-component/src/effects/opacity.css';

const imageURL = 'https://www.themoviedb.org/t/p//w300_and_h450_face';
const placeholderImage = '/avatar-placeholder.png';

const CastCardScroll = ({ castInfo }) => {
  const {
    name, character, profile_path: path, id,
  } = castInfo;

  return (
    <CardWrapper>
      <Link to={`/person/${id}`}>
        <CardImage>
          <LazyLoadImage
            src={path ? imageURL + path : placeholderImage}
            alt={`${name} ${character}`}
            effect="opacity"
          />
        </CardImage>
        <CardContent>
          <Text>{name}</Text>
          <Text>{character}</Text>
        </CardContent>
      </Link>
    </CardWrapper>
  );
};

export default CastCardScroll;
