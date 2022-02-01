import React, { useState } from 'react';
import { ImageContainer } from './styles';
import ProfileSVG from '../../assets/images/profiles/profile1.svg';
import EditSVG from '../../assets/edit.svg';

import { Image, Icon } from './styles';

function ImageProfile() {

  const [image, setImage]= useState(ProfileSVG);

  return (
          <ImageContainer>
           <Image image={image}>
           <Icon htmlFor="button-file" position="absolute" src={EditSVG}></Icon>
           </Image>
           <input 
           type="file"
           accept="image/*"
           style={{display:"none"}}
           id="button-file"
           />
          </ImageContainer>
  );
}

export default ImageProfile;