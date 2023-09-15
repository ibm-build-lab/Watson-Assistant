<H2>Watsonx-Assistant</H2>
Watsonx-Assistant Feature Enablement Repository

<H3>Feature Enablement:</H3>
<H4>1. Watsonx Assistant augmented conversations including data from external API calls using Web Functions.</H4>

<!-- <img width="1523" alt="image" src="https://user-images.githubusercontent.com/114666786/207609271-e2398fd6-523e-4fa2-9f23-3395d822d8a8.png"> -->

<img width="1518" alt="image" src="https://user-images.githubusercontent.com/114666786/207687798-a282e24d-1846-496d-b32a-bd4142f6b53c.png">


Below is the explanation of the flow diagram:

- User/Channel: User, using channels such as mobile, web page, slack, teams, Facebook messenger, starts conversation with watsonx assistant

- Intent Understanding: Watsonx Assistant’s Dialog skills understand the intent with the help of intent reasoning and entities

- Webhook: If the processed intent node has webhook functionality enabled for it, it sends the data saved in the form of context variable to the web function

- API call: Web function calls an API which processes the task and returns a json response

- Response: Response gets displayed on the watsonx assistant's chat window


<H4>2. Enablement of voice over webchat using the Watsonx Assistant</H4>

<!-- <img width="1523" alt="image" src="https://user-images.githubusercontent.com/114666786/207640336-a407226d-0674-402a-8e3a-0c0de06202f0.png"> -->

<img width="1526" alt="image" src="https://user-images.githubusercontent.com/114666786/207686725-db8bcd3b-6041-4c0a-bfd4-a11f71a138a7.png">

The architecture above introduces five features that can integrate voice functionality along with Watsonx Assistant.

- Web page: this is the HTML page where we integrate the microphone button with Watsonx Assistant. This HTML file also contains a Javascript file for running all the APIs and a CSS file for setting the microphone position.

- Speech to Text: This is the IBM cloud service known as Speech to Text, which converts speech to text so we can pass the text to Watsonx Assistant. When the user clicks the microphone button, the voice recording will start, and when the user deselects the microphone button, the recording will stop, and the audio file will be sent to the STT service. SST has a training model that can identify the words and uses NLP models. SST contains more than 70 custom models for the user. In addition, you can create your own if needed.

- Watsonx Assistant: This is Watsonx Assistant one of the most important parts of this architecture. The SST service passes the converted text to Watsonx Assistant, which gives the answers to the user queries in text form. The user needs to train and set up the intents on IBM Cloud so that Watsonx Assistant can understand the user queries.

- Text to Speech: This is an IBM service known as Text to Speech. It takes the text input from Watsonx Assistant and converts it to speech, and we can play the audio file in the user's browser so that the user can hear the voice response.

- Web function: it is also known as IBM cloud function. This function helps to retrieve data from various APIs. The user can get the response from any external API, so this web function connects the external APIs with Watsonx Assistant. We can say that the web function is the bridge between Watsonx Assistant and external services, for example. We can connect Wikipedia API with Watsonx Assistant, so the user can ask a question to WA and WA will get the answer from Wikipedia API.
