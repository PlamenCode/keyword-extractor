import './App.css';
import { useState } from 'react';
import { Box, Container } from '@chakra-ui/react';

import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import KeywordsModal from './components/KeywordsModal';


function App() {
    const [keywords, setKeywords] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    async function extractKeywords(text){
        setLoading(true);
        setIsOpen(true);
        console.log(process.env.REACT_APP_OPEN_AI_API_KEY);
        console.log(process.env.REACT_APP_OPEN_AI_API_URL);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: `Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n` + text + '',
                temperature: 0.5,
                max_token: 60,
                frequency_penalty: 0.8
            })
        };

        const response = await fetch('https://api.openai.com/v1/completions', options);
        const resultJson = await response.json();
        const data = resultJson.choices[0].text.trim();
        console.log(data);

        setKeywords(data)
        setLoading(false);
    };

    function closeModal(){
        setIsOpen(false);
    }

  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop='130px' >
        <Container maxWidth='3xl' centerContent >
            <Header />
            <TextInput extractKeywords={extractKeywords}/>
            <Footer />
        </Container>
        <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal} />
    </Box>
  );
}

export default App;
