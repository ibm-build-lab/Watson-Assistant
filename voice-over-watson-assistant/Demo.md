<h2>Watson Assistant Voice chatbot with Wikipedia API integration</h2>


Let's connect the voice chat bot to Wikipedia. This way, the user can ask Watson Assistant Voice Chat Bot any question, and Watson Assistant will try to find out the corresponding answer from Wikipedia using the Webhook API function. User can ask anything with tag word  “What is “ or “ Tell me about”.

1.	First, we need to prepare the user input parameters for the Watson Assistant dialog box. So the webhook function fetches the text entered by the user in chatbot. For that in parameter enter value as "<?input_text?>" so it will pass the user input to webhook function. 

![image 7](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/7.png)



2.	Now prepare the Webhook function that can access the Watson Assistant user input and pass it to the Wikipidia API. WebHook function Take the user input and remove some unwanted words like "What is", "Tell me about it" and extract important words that the user wants to know about and pass them to the Wikipedia API.


![image 8](https://github.com/sahil11129/Projects/blob/dd5ed95bdf6da6a79a037cbbb35c9a64d2728779/TZ%20Assets/Image/8.png)

Webhook Wikipedia API helps to search for important terms on Wikipedia and gives short summary about it. Short summary is the short description about the thing the user wants to know. Now let’s ask something to Watson Assistant Voice chatbot. Here answer of the question “what is America” is short summary from Wikipedia. 


<img width="1321" alt="Screenshot 2022-12-06 at 1 22 18 PM" src="https://user-images.githubusercontent.com/112084296/205852753-a3ec46b5-4f62-47a0-bfb4-ef80cb660000.png">

