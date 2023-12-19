import React from 'react';
import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/LightBulb-Logo.png';


export default function Header() {
  return (
    <>
        <Image src={logo} alt='Light Bulb Logo' width='100px' marginBottom='1rem' />
        <Heading color='white' marginBottom='1rem' >
            AI Keyword Extractor
        </Heading>
        <Text fontSize='25px' textAlign='center' >
            Paste in your text below and we will extract the keywords.
        </Text>
    </>
  )
}
