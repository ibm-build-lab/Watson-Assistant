<h2>Technical Description of Voice over Watsonx Assistant</h2>


Voice over Watsonx Assistant listens to your voice input, accesses intent, and responds with relevant answers or subsequent questions via voice. These conversational interfaces understand natural language using NLP/NLU.

An organization can prepare questions-answers as per the business requirements using different intents/entities, and then configure Voice functionality with Watsonx Assistant. For this, we leverage three IBM services as follows.

1.	Watsonx Assistant (WA)
2.	Speech to text convertor (STT) 
3.	Text to Speech convertor (TTS)

<h2>Prerequisites</h2>
These three services are prerequisites for the application. The services can be set up using an IBM Cloud account by following the links below. 

Watson Assistant: https://cloud.ibm.com/catalog/services/watson-assistant

Speech to Text service: https://cloud.ibm.com/catalog/services/speech-to-text

Text to Speech service: https://cloud.ibm.com/catalog/services/text-to-speech


After configuring and starting the required services, we can integrate the voice solution with Watsonx Assistant. For this solution, we have a repository that contains HTML code for a voice UI microphone button along with Watsonx Assistant chatbot and JavaScript for sending the request to STT and TTS services.

<h2> Watsonx Assistant Voice Chatbot Architecture </h2>

![Flowcharts](https://user-images.githubusercontent.com/112084296/207308405-bfb6cfd2-3c3d-457e-8550-da932926a38e.png)


<p align="center"> Watsonx Assistant Voice Chatbot Architecture </p>

The architecture above introduces five features that can integrate voice functionality along with Watsonx Assistant.

1.	Web page: this is the HTML page where we integrate the microphone button with Watsonx Assistant. This HTML file also contains a javascript file for running all the APIs and a CSS file for setting the microphone position.

2.	STT: This is the IBM Cloud service known as Speech to Text, which converts speech to text so we can pass the text to Watsonx Assistant. When the user clicks the microphone button, the voice recording will start, and when the user deselects the microphone button, the recording will stop, and the audio file will be sent to the STT service. STT has a training model that can identify the words and uses NLP models. STT contains more than 70 custom models for the user.  In addition, you can create your own if needed. 

3.	WA: This is Watsonx Assistant one of the most important parts of this architecture. The STT service passes the converted text to Watsonx Assistant, which gives the answers to the user queries in text form. The user needs to train and set up the intents on IBM Cloud so that Watsonx Assistant can understand the user queries.

4.	 TTS: This is an IBM service known as Text to Speech. It takes the text input from Watsonx Assistant and converts it to speech, and we can play the audio file in the user's browser so that the user can hear the voice response.

5.	Web function: it is also known as IBM Cloud function. This function helps to retrieve data from various APIs. The user can get the response from any external API, so this web function connects the external APIs with Watsonx Assistant. We can say that the web function is the bridge between Watsonx Assistant and external services, for example. We can connect Wikipedia API with Watsonx Assistant, so the user can ask a question to WA and WA will get the answer from Wikipedia API.

<img width="1344" alt="Screenshot 2022-12-15 at 11 35 11 AM" src="https://user-images.githubusercontent.com/112084296/207785144-cb5ab025-ab6c-459c-a3c3-4c7882318a2e.png">


In the screenshot above, Watson Assistant is included and we can see the microphone button at the bottom right.
