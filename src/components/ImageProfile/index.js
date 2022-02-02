import React, { useState, useRef } from 'react';
import { ImageContainer } from './styles';
import ProfileSVG from '../../assets/images/profiles/profile1.svg';
import EditSVG from '../../assets/edit.svg';

import { Image, Icon } from './styles';

function ImageProfile() {

  const [image, setImage]= useState(ProfileSVG);
  const inputFileRef= useRef();
  
  const openFileSelector=()=>{
    inputFileRef.current.click();
  }

  const changeImage=(event)=>{
    if (event.target.files && event.target.files[0]) {
      event.stopPropagation();
      event.preventDefault();
      const fileImg = event.target.files[0];
      const image = URL.createObjectURL(fileImg);
      setImage(image);
    }
  }

  return (
          <ImageContainer>
           <Image image={image}>
           <Icon htmlFor="button-file" position="absolute" src={EditSVG} onClick={openFileSelector}></Icon>
           </Image>
           <div>
           <input
            id="file-upload"
            type="file"
            value=""
            accept=".png, .jpg, .jpeg, .jfif"
            style={{ display: 'none' }}
            ref={inputFileRef}
            onChange={changeImage}
          />
    </div>
          </ImageContainer>
  );
}

export default ImageProfile;