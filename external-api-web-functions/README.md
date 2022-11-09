# Watson Assistant: learn to access data from third party applications and APIs

In this article, you are provided with the information needed to set up a Watson Assistant instance to augment a conversation with live data from API calls. APIs can be set up to fetch near real time data from databases and/or to fetch public information on the internet. The uses can be extended to run search engine query, fetch machine learninng model output based on input, wikipedia search etc.  

## Here is a step by step guide to implement web function:

Web functions are available on IBM cloud > Functions > Actions

![functionlocation](https://github.com/jaypandyaibm/WAWFuction.github.io/blob/main/images/1function.png?raw=true)

Step 1: Create an Action by providing a name and selecting a runtime environment (which could be python or node.js) and click on Create:

<img width="1728" alt="image" src="https://user-images.githubusercontent.com/114666786/200766566-bbf778c5-d32e-438e-8ea3-29ac82f4122a.png">
<!-- <img src="./images/2CreateAction.png" alt="2CreateAction" style="width:2000px;"/> -->

Step 2: One can use the predefined API templates and modify them to create a custom program that fits a particular need. Here are templates for [NodeJS](https://github.com/ibm-build-lab/Watson-Assistant/blob/main/external-api-web-functions/nodejs-template) and [Python](https://github.com/ibm-build-lab/Watson-Assistant/blob/main/external-api-web-functions/python-template) languages.  Simply, cut and paste the code into your Web Function action. 

<img width="1099" alt="image" src="https://user-images.githubusercontent.com/114666786/200764232-873132a2-af14-4afe-ba6a-13b8c9744a14.png">
<!-- <img width="1656" alt="image" src="https://user-images.githubusercontent.com/114666786/200764062-6dabe0db-51ae-45b2-a194-152fb5312da3.png">
<img width="1000" alt="image" src="https://user-images.githubusercontent.com/114666786/200752416-70860cce-225c-4fe2-9970-1ca682ef95b9.png"> -->
<!-- <img src="./images/4codetemp.png" alt="4codetemp" style="width:2000px;"/>  -->

The above code displays multiple conditions and when the parsed value matches the parameter value the code gets executed. 
- Here, the “url: and raw_url:” are API endpoint URLs. 
- API key can be setup, if needed otherwise could be removed. 
- Request “method” could be “get”, “put” or “post. 
- In return function provides the response 

Once done, Save the function. You will see Invoke and Invoke with Parameters as below:

<img src="./images/5invokepara.png" alt="5invokepara" style="width:700px;"/> 

Click on the Invoke with Parameters and add key, value pair to call a webhook as shown below. Apply the change and click on Invoke to validate it.

<img width="700" alt="image" src="https://user-images.githubusercontent.com/114666786/200752942-6ffbbcb8-2758-4b28-bd8d-da0db443094a.png">
<!-- <img src="./images/6invokepara.png" alt="6invokepara" style="width:2000px;"/>-->

Step 3: Now, select Endpoints from the left-hand side of the page and check Enable as Web Action and Save your changes.
Copy down the URL that’s created under Web Actions, you’ll need this later.

<img width="1690" alt="image" src="https://user-images.githubusercontent.com/114666786/200764884-5d29510d-3961-4fb4-aa8e-f1d61303a87f.png">
<!-- <img width="1698" alt="image" src="https://user-images.githubusercontent.com/114666786/200753107-090b0b8f-4e75-4da1-b425-abae3143111a.png"> -->
<!-- <img src="./images/7endpoint.png" alt="7endpoint" style="width:2000px;"/> -->


Now that you have the program/function ready, you would like to know how to integrate it or link it with your Watson Assistant. This is where the WebHooks come in to play.

Webhooks are used to bridge two applications/programs/functions which gets triggered by a specific event and transfer data on a near real time basis.

_The webhook mechanism allow program to call an external program. When used in a dialog skill, a webhook gets triggered at the moment Watson Assistant processes a node for which webhook is enabled. The webhook collects the specified data or the data that the program collects from the user during the conversation and stores in context variables. It sends the data as part of a HTTP POST request to the URL you specify as part of your webhook definition. The URL that receives the webhook is the listener. It performs a predefined action on the information passed and returns a desired response._

Let’s see how to enable it.

>Tip: Make sure your Function namespace and your Watson Assistant both are on same region.

Step 1 — Open Watson Assistant > Dialogs > Options > Webhooks:
You will land on the window which looks like the one below. Now, we need to copy the endpoint of a web action we created above and paste it in the URL field along with the “.json” suffix as shown in the below screenshot:

<img width="822" alt="image" src="https://user-images.githubusercontent.com/114666786/200757933-f33a50f0-4aa1-4377-8b31-3fb02c560d08.png">
<!-- <img width="754" alt="image" src="https://user-images.githubusercontent.com/114666786/200755361-864ac104-f289-46e4-911e-75e5da66f2ee.png"> -->
<!-- <img src="./images/8webhook.png" alt="8webhook" style="width:2000px;"/> -->


Step 2 — Build Dialog:
Now, let’s create the conversational part. Navigate yourself to the Dialog section and click on Create Dialog. You will see how a basic dialog tree builds up. Create a new dialog node by clicking on Add Node.
<img width="805" alt="image" src="https://user-images.githubusercontent.com/114666786/200756196-5d8eb142-0374-41a0-9230-5eca25bc9f20.png">


Go to the dialog node you just created and click on Customize on the top right corner with gear icon. Now enable Call out to webhooks / actions and select the Call a webhook as shown below: 

<img width="1253" alt="image" src="https://user-images.githubusercontent.com/114666786/200757029-19597e02-9908-4318-9129-77852491189e.png">
<!-- <img src="./images/9customize.png" alt="9customize" style="width:2000px;"/>-->

Step 3 — Define Responses: 
 Select the intent you want to use and provide the key, value pair for a webhook call: 
<img width="650" alt="image" src="https://user-images.githubusercontent.com/114666786/200762174-8c374076-f45a-401e-8a7b-2d0a285749cc.png">
<!-- <img src="./images/10keyvalue.png" alt="10keyvalue" style="width:600px;"/> -->
 
After that name the returning variable. 
Values from the repones can be extracted using the following code:

< ? $webhook_result_1.extract  ? >

<img width="650" alt="image" src="https://user-images.githubusercontent.com/114666786/200761838-3f99b1d6-6f13-417e-a08c-46ccbfe4ca14.png">
<!-- <img src="./images/11response.png" alt="11response" style="width:600px;"/> -->

Step 4 — Check Result:
You can easily try out your assistant by clicking on “Try it” on the right side. Pose different questions and notice the result! Have a look at the structure $webhook_result_1 by clicking on “Manage Context” in the Try Out Pane.

<img width="350" alt="image" src="https://user-images.githubusercontent.com/114666786/200760021-9541940e-96af-4f02-ad21-4ecb985794fe.png"> | <img width="350" alt="image" src="https://user-images.githubusercontent.com/114666786/200760819-0c44e150-3007-4b82-91a1-2ba33db42608.png">

<!-- <img src="./images/12tryit.png" alt="12tryit" style="width:2000px;"/> -->

Now you have successfully integrated third party App/API with your Assistant, Cheers!!
See the use case in action:

- Asset: https://techzone.ibm.com/collection/watson-assistant-for-backend-data-access
- Demo: https://htmlpreview.github.io/?https://github.com/ibm-build-lab/Watson-Assistant/blob/main/external-api-web-functions/Main/AcmeCorp.html

Now Your turn 

