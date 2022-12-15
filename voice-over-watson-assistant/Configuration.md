
<h2>Setup the Voice over Watson in Local System</h2>

Let's set up Voice Chatbot on the local machine. First, download all the configuration files, including the HTML file for the voice bot, JavaScript for calling the APIs, and other dependencies. All the required files are available in the Github repository mentioned below, download the repository form parent directory. Configure all API keys and path as shown below and launch the HTML file in the browser.

Link : https://github.com/ibm-build-lab/Watson-Assistant/tree/main/voice-over-watson-assistant

This voice-over-Watson configuration with Wikipedia APIs using Cloud functions known  as Webhook functions. The user can ask a question using keywords such as "tell me about" or "what is" and the Watson assistant will try to find out a short summary from Wikipedia. The best thing about Voice-over-Watson is that the user can get the answer in speech. In next section it demonstrate how to integrate all the services and configuration. 

**Voice Functionality Integration with Watson Assistant**

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


<h2>Watson Assistant Voice chatbot with Wikipedia API integration</h2>


Let's connect the voice chat bot to Wikipedia. This way, the user can ask Watson Assistant Voice Chat Bot any question, and Watson Assistant will try to find out the corresponding answer from Wikipedia using the Webhook API function. User can ask anything with tag word  “What is “ or “ Tell me about”.

1.	First, we need to prepare the user input parameters for the Watson Assistant dialog box. So the webhook function fetches the text entered by the user in chatbot. For that in parameter enter value as "<?input_text?>" so it will pass the user input to webhook function. 

![image 7](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/7.png)



2.	Now prepare the Webhook function that can access the Watson Assistant user input and pass it to the Wikipidia API. WebHook function Take the user input and remove some unwanted words like "What is", "Tell me about it" and extract important words that the user wants to know about and pass them to the Wikipedia API.


![image 8](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/8.png)

Webhook Wikipedia API helps to search for important terms on Wikipedia and gives short summary about it. Short summary is the short description about the thing the user wants to know. Now let’s ask something to Watson Assistant Voice chatbot. Here answer of the question “what is America” is short summary from Wikipedia. 


<img width="1323" alt="Screenshot 2022-12-15 at 11 46 55 AM" src="https://user-images.githubusercontent.com/112084296/207786877-c1e9de5a-dae7-4813-a13b-688044141f9b.png">
