import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

import introVideo from '../../assets/videos/demo.mp4';
const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: '32463782456375',
      title: 'simple',
      video: {
        public: '',
        url: '',
      },
      description: 'dsvhd sdjh fgsdu jh sdfgsyu  biesuefyeu ',
    },
    {
      _id: '32463sdfs782456375',
      title: 'data',
      video: {
        public: '',
        url: '',
      },
      description: 'data4dsvhd sdjh fgsdu jh sdfgsyu  biesuefyeu ',
    },
    {
      _id: '324637dfgd82456375',
      title: 'apple',
      video: {
        public: '',
        url: '',
      },
      description: ' data 2dsvhd sdjh fgsdu jh sdfgsyu  biesuefyeu ',
    },
    {
      _id: '32463dsfd782456375',
      title: 'react',
      video: {
        public: '',
        url: '',
      },
      description: 'data ',
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
      <video
      controls
      controlsList="nodownload  noremoteplayback nofullscreen"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
      // style={{marginLeft:"auto"}}
    ></video>

        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m="4" children={'Description'} />
        <Text m="4" children={lectures[lectureNumber].description} />
        
      </Box>
      
      <VStack>
        {lectures.map((item, index) => (
          <Button
            onClick={() => setLectureNumber(index)}
            key={item._id}
            style={{
              width: '100%',
              padding: '1.9rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text>
              #{index + 1}
              {item.title}
            </Text>
          </Button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
