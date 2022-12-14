# Watson-Assistant
Watson-Assistant Feature Enablement Repository

**Feature Enablements:**
1. Watson Assistant augmented conversations including data from external API calls using Web Functions. 

<img width="1523" alt="image" src="https://user-images.githubusercontent.com/114666786/207609271-e2398fd6-523e-4fa2-9f23-3395d822d8a8.png">

- Step1: User, using channels like mobile/web page/slack/ ms teams/ facebook messenger, starts conversation with watson assistant

- Step2: Watson Asssistant's Dialog skills undersatnd the intent with the help of intent reasoning and entities

- Step3: If the processed intent node has webhook functionality enabled for it, it send the data saved in the form of context variable to the web function

- Step4: Web function calls an API and returns a json response

- Step5: Response gets displayed on the watson assistant's chat window

2. Enablement of voice over webchat using the Watson Assistant

<img width="1523" alt="image" src="https://user-images.githubusercontent.com/114666786/207640336-a407226d-0674-402a-8e3a-0c0de06202f0.png">
