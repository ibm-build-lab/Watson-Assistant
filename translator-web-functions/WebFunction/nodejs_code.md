function main(params){
    
    ///////==========================================================================///////

    function detect_lingo(input_text){
        const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
        const { IamAuthenticator } = require('ibm-watson/auth');

        const languageTranslator = new LanguageTranslatorV3({
        version: '2018-05-01',
        authenticator: new IamAuthenticator({
            apikey: {"api key"},
        }),
        serviceUrl: {"service url"},
        });

        const identifyParams = {
        text: input_text
        };
        console.log(identifyParams);
        return languageTranslator.identify(identifyParams)
        .then(identifiedLanguages => {
            return {language: identifiedLanguages.result.languages[0].language}
            console.log(identifiedLanguages.result.languages[0].language);
        })
        .catch(err => {
            console.log('error:', err);
        });
        }

    ///////==========================================================================///////
    


    function xx2en(transcript, code) {
        console.log("!!!!",code+'-en',"!!!!")
        const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
        const { IamAuthenticator } = require('ibm-watson/auth');
        
        const languageTranslator = new LanguageTranslatorV3({
        version: '2018-05-01',
        authenticator: new IamAuthenticator({
            apikey: {"api key"},
        }),
        serviceUrl: {"service url"},
        });
    
        const translateParams = {
        text: transcript,
        modelId: code+'-en',
        };
       
        return languageTranslator.translate(translateParams)
        .then(translationResult => {
            // setTimeout(() => {
            console.log(translationResult.result.translations[0].translation)
            return {extract: translationResult.result.translations[0].translation}
            // },3000)  
        }).catch(err => {
            console.log('error:', err);
            return {extract: "Can you reword your statement? I'm not understanding."}
        });
    
    }
    
    ///////==========================================================================///////
    function wa(transcription){    
            const { IamAuthenticator } = require('ibm-watson/auth');
            const AssistantV2 = require('ibm-watson/assistant/v2');
            // const transcription = await ep2en(transcript);
            const assistant = new AssistantV2({
                version: '2021-06-14',
                authenticator: new IamAuthenticator({
                apikey: {"api key"},
                }),      
                serviceUrl: {"service url"}
            });
            
            const wa_rep = assistant
                .messageStateless({
                assistantId: {"Assistant ID"}
                input: {
                    'message_type': 'text',
                    'text': transcription.extract,
                }
                })
                return wa_rep
                .then(translationResult => {
                    console.log("wa_in",transcription.extract)
                    // setTimeout(() => {
                    console.log("wa_out",translationResult.result.output) //
                    return {extract: translationResult.result.output.generic[0].text}
                // }, 3000)
        }).catch(err => {
            console.log('error:', err);
            return {extract: "Can you reword your statement? I'm not understanding."}
            console.log('error:', {extract: "Can you reword your statement? I'm not understanding."});
        });
    
    }
    ///////==========================================================================///////
    async function en2xx(input) {
        const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
        const { IamAuthenticator } = require('ibm-watson/auth');
        const lingo = await detect_lingo(input);
        console.log(lingo);
        if (lingo.language =='en') {   
                            console.log("english", {extract:input})
                            const wa_response = await wa({extract:input});
                            console.log(">>>> wa_response", wa_response)

                            return wa_response
        } else {
            console.log("other")
                            const transcription = await xx2en(input, lingo.language);
                            const wa_response = await wa(transcription);
                                    // const transcription = await wa(transcript);
                            const languageTranslator = new LanguageTranslatorV3({
                                version: '2018-05-01',
                                authenticator: new IamAuthenticator({
                                    apikey: {"api key"},
                                }),
                                serviceUrl: {"service url"},
                                });
                                const translateParams = {
                                text: wa_response.extract,
                                modelId: 'en-'+lingo.language,
                                };
                            console.log("en_ep_in", wa_response.extract)
                            
                                return languageTranslator.translate(translateParams)
                                .then(translationResult => {
                                    console.log("en_ep_out",translationResult.result.translations[0].translation) //
                                    return {extract: translationResult.result.translations[0].translation}
                                }).catch(err => {
                                    console.log('error:', err);
                                    const translateParams = {
                                    text: "Can you reword your statement? I'm not understanding.",
                                    modelId: 'en-'+lingo.language,
                                    };
                                    
                                    return languageTranslator.translate(translateParams)
                                .then(translationResult => {
                                    console.log("en_ep_out",translationResult.result.translations[0].translation) //
                                    return {extract: translationResult.result.translations[0].translation}
                                })

        });                   
        }
    }
    
return en2xx(params.user_input)

}
