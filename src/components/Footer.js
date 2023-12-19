import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import logo from '../assets/OpenAi-Logo.png';

export default function Footer() {
  return (
    <Box marginTop='50px'>
        <Flex justifyContent='center' alignItems='center' >
            <Image src={ logo } alt='OpenAi Logo' marginRight={1} width='30px' />
            <Text marginLeft='10px'>
                Powerd by Open AI
            </Text>
        </Flex>
    </Box>
  )
}
