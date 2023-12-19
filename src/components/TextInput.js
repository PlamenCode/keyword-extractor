import React, { useState } from 'react';
import { Button, Textarea, useToast } from '@chakra-ui/react';


export default function TextInput({ extractKeywords }) {
    const [text, setText] = useState('');
    const toast = useToast();

    function submitText(){
        if(text === ''){
            toast({
                title: 'Text field is empty',
                description: 'Please enter some text in the text field.',
                status: 'error',
                duration: 4000,
                isClosable: true
            })
        } else{
            extractKeywords(text);
        }
    };

  return (
    <>
        <Textarea 
            bg='blue.400' 
            color='white' 
            padding='4px' 
            marginTop='6px' 
            height='200px'
            value={text}
            onChange={ (e) => setText(e.target.value) }
        />

        <Button 
            bg='blue.500'
            color='white'
            marginTop='4px'
            width='100%'
            _hover={{ bg: 'blue.700' }} 
            onClick={ submitText }
        > Extract Keywords</Button>
    </>
  )
}
