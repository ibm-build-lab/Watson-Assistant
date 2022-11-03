                                                  Voice over Watson Assistant
In this article, we will provide instruction and code required to implement voice over webchat using the Watson Assistant.  This means interacting with a chatbot with your voice instead of typing. We will demonstrate connecting the Watson Assistant with Wikipedia for question answer responses using voice to communicate questions and responses.


A voice chatbot is a virtual assistant that hears, perceives, and responds to your voice input. Voice chatbot assistants that read your voice input, analyse the task at hand, and respond with relevant answers. These conversational interfaces understand natural language as they use NLP and NLU, and are also trained to respond in natural language.

The Watson Assistant provides a question-answering computer system capable of answering questions posed in natural language.  

The user can prepare the questions as, per the business requirements, using different intents. We then configure Watson Assistant with Voice functionality.  For that, we leverage three IBM services as follows. 

1.	Watson Assistant.
2.	Speech to text convertor. 
3.	Text to Speech convertor.

After configuring and starting the required services, we can integrate the voice solution with Watson Assistant. For this solution, we have a repository that contains HTML code for a voice UI microphone button along with Watson Assistant chatbot and JavaScript for sending the request to STT and TTS services.


![Watson Assistant Voice Chatbot Architecture ](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/Picture%201.png)
 Watson Assistant Voice Chatbot Architecture 
 
The architecture above introduces five features that can integrate voice functionality along with Watson Assistant.

1.	Web page: this is the HTML page where we integrate the microphone button with Watson Assistant. This HTML file also contains a javascript file for running all the APIs and a CSS file for setting the microphone position.

2.	STT: This is the IBM cloud service known as Speech to Text, which converts speech to text so we can pass the text to Watson Assistant. When the user clicks the microphone button, the voice recording will start, and when the user deselects the microphone button, the recording will stop, and the audio file will be sent to the STT service. SST has a training model that can identify the words and uses NLP models. SST contains more than 70 custom models for the user.  In addition, you can create your own if needed. 

3.	WA: This is Watson Assistant one of the most important parts of this architecture. The SST service passes the converted text to Watson Assistant, which gives the answers to the user queries in text form. The user needs to train and set up the intents on IBM Cloud so that Watson Assistant can understand the user queries.

4.	 TTS: This is an IBM service known as Text to Speech. It takes the text input from Watson Assistant and converts it to speech, and we can play the audio file in the user's browser so that the user can hear the voice response.

5.	Web function: it is also known as IBM cloud function. This function helps to retrieve data from various APIs. The user can get the response from any external API, so this web function connects the external APIs with Watson Assistant. We can say that the web function is the bridge between Watson Assistant and external services, for example. We can connect Wikipedia API with Watson Assistant, so the user can ask a question to WA and WA will get the answer from Wikipedia API.

![image 2](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/2.png)


In the screenshot above, Watson Assistant is included and we can see the microphone button at the bottom right.


**Setup the Voice over Watson in Local System**

Let's set up Voice Chatbot on the local machine. First, download all the configuration files, including the HTML file for the voice bot, JavaScript for calling the APIs, and other dependencies. All the required files are available in the Github repository mentioned below. Configure all API keys and path as shown below and launch the HTML file in the browser.

Link : https://github.com/ibm-build-lab/Watson-Assistant/tree/main/voice-over-watson-assistant

This voice-over-Watson configuration with Wikipedia APIs using Cloud functions known  as Webhook functions. The user can ask a question using keywords such as "tell me about" or "what is" and the Watson assistant will try to find out a short summary from Wikipedia. The best thing about Voice-over-Watson is that the user can get the answer in speech. In next section it demonstrate how to integrate all the services and configuration. 

**Voice Functionality Integration with Watson Assistant **

Let’s  connect Watson Assistant with Voice UI, so that we can communicate with the chatbot via the  microphone button 

1.	First, we need to mention the JavaScript path in the HTML code. One is recoder.js, which contains functions for recording the voice, and the second is voice.js, which sends the voice file to the STT service and gets the result from the TTS service. It also contains a microphone icon with Watson Assistant.
```
  <img class="voice" id="recordVoice" src="./img/mic.png">
  <div id="log"/>
  <script src="scripts/recorder.js"></script>
  <script src="scripts/voice.js"></script>
```

Paste the above code into the body section of the main HTML as shown below.


<img width="1200" alt="image" src="https://user-images.githubusercontent.com/112084296/199696440-d03c0031-c26a-4319-a11e-69aa65752770.png">


**Note: Make sure that all required files are available under the specified path**



2.	Now we can also include CSS file with given HTML file so we can set all the design and style as per requirement.


```
<head>
      <title>Home Lending pal</title>        
      <link rel="stylesheet" href="./css/style.css">
</head>
```


<img width="1200" alt="image" src="https://user-images.githubusercontent.com/112084296/199696997-8ba2e802-06e2-43f0-8b5d-ddee70be8b9e.png">


After this configuration, launch the HTML file so that the microphone icon appears near Watson Assistant, and when you click on it, you can communicate with the Watson Assistant chatbot with Voice.


**Setting up the all require service with Voice Chatbot**

To set up Watson Assistant, add details in voice.js as shown below.

According to the code below, we need to set IntegrationID, Region and ServiceInstanceID of Watson Assistant. All the required details are available in our embedded Watson Assistant code. After that, we need to set up the STT and TTS service in the same file.


<img width="1200" alt="image" src="https://user-images.githubusercontent.com/112084296/199697181-04844044-87cf-4a30-976c-911b6e41bfb3.png">

Set up the URL of STT in SSTInvoke function and TTS in PlayAudio function in Voice.js and also set up the API key (base64 encoded).


<img width="1200" alt="image" src="https://user-images.githubusercontent.com/112084296/199697205-7267fac9-41dc-4ef3-814c-7a9b03700a3c.png">


After setting up all the necessary API and keys, all the services such as Watson Assistant, Speech to Text and Text to Speech are integrated into the main HTML file. No additional embedded Watson Assistant code is required. Watson Assistant can be embedded directly with JavaScript and deployed via HTML.


**Watson Assistant Voice chatbot with Wikipedia API integration**


Let's connect the voice chat bot to Wikipedia. This way, the user can ask Watson Assistant Voice Chat Bot any question, and Watson Assistant will try to find out the corresponding answer from Wikipedia using the Webhook API function. User can ask anything with tag word  “What is “ or “ Tell me about”.

1.	First, we need to prepare the user input parameters for the Watson Assistant dialog box. So the webhook function fetches the text entered by the user in chatbot. For that in parameter enter value as "<?input_text?>" so it will pass the user input to webhook function. 

![image 7](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/7.png)



2.	Now prepare the Webhook function that can access the Watson Assistant user input and pass it to the Wikipidia API. WebHook function Take the user input and remove some unwanted words like "What is", "Tell me about it" and extract important words that the user wants to know about and pass them to the Wikipedia API.


![image 8](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/8.png)

Webhook Wikipedia API helps to search for important terms on Wikipedia and gives short summary about it. Short summary is the short description about the thing the user wants to know. Now let’s ask something to Watson Assistant Voice chatbot. Here answer of the question “what is America” is short summary from Wikipedia. 


![image 9](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/9.png)

Demo Link: https://htmlpreview.github.io/?https://github.com/sahil11129/Projects/blob/main/Wiki_Voice_bot/Voice_bot.html

