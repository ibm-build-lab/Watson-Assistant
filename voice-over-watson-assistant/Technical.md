<h2>Technical Description of Voice over Watson Assistant</h2>


The user can prepare the questions as, per the business requirements, using different intents. We then configure Watson Assistant with Voice functionality.  For that, we leverage three IBM services as follows. 

1.	Watson Assistant
2.	Speech to text convertor 
3.	Text to Speech convertor

<h2>Prerequisites</h2>
These three services are prerequisites for the application. The services can be set up using an IBM cloud account by following the links below. 

Watson Assistant: https://cloud.ibm.com/catalog/services/watson-assistant

Speech to Text service: https://cloud.ibm.com/catalog/services/speech-to-text

Text to Speech service: https://cloud.ibm.com/catalog/services/text-to-speech


After configuring and starting the required services, we can integrate the voice solution with Watson Assistant. For this solution, we have a repository that contains HTML code for a voice UI microphone button along with Watson Assistant chatbot and JavaScript for sending the request to STT and TTS services.


![Watson Assistant Voice Chatbot Architecture ](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/Picture%201.png)
 <p style="text-align: center;">Watson Assistant Voice Chatbot Architecture</p>
 
The architecture above introduces five features that can integrate voice functionality along with Watson Assistant.

1.	Web page: this is the HTML page where we integrate the microphone button with Watson Assistant. This HTML file also contains a javascript file for running all the APIs and a CSS file for setting the microphone position.

2.	STT: This is the IBM cloud service known as Speech to Text, which converts speech to text so we can pass the text to Watson Assistant. When the user clicks the microphone button, the voice recording will start, and when the user deselects the microphone button, the recording will stop, and the audio file will be sent to the STT service. SST has a training model that can identify the words and uses NLP models. SST contains more than 70 custom models for the user.  In addition, you can create your own if needed. 

3.	WA: This is Watson Assistant one of the most important parts of this architecture. The SST service passes the converted text to Watson Assistant, which gives the answers to the user queries in text form. The user needs to train and set up the intents on IBM Cloud so that Watson Assistant can understand the user queries.

4.	 TTS: This is an IBM service known as Text to Speech. It takes the text input from Watson Assistant and converts it to speech, and we can play the audio file in the user's browser so that the user can hear the voice response.

5.	Web function: it is also known as IBM cloud function. This function helps to retrieve data from various APIs. The user can get the response from any external API, so this web function connects the external APIs with Watson Assistant. We can say that the web function is the bridge between Watson Assistant and external services, for example. We can connect Wikipedia API with Watson Assistant, so the user can ask a question to WA and WA will get the answer from Wikipedia API.

![image 2](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/2.png)


In the screenshot above, Watson Assistant is included and we can see the microphone button at the bottom right.
