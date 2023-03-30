import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxImg, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'NxtWave Orientation',img:'/images/certi.jpg', url: 'https://drive.google.com/file/d/1e9hRb71mthittAsRYB1NYugsT--j6xrm/view?usp=sharing', isImg:true},
  { text: 'Edureka Orientation',img:'/images/kickstart.jpg', url: 'https://drive.google.com/file/d/1vITBwsfFPIb3t-QV9QYF8IZMc4cDGYkS/view?usp=sharing', isImg:true},
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishement</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          {card.isImg && <BoxImg src={card.img} onClick={()=>{window.open(card.url, '_blank')}} />}
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
