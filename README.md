# Sample Utterance Generator

## What:

The tool introduces an easy to generate multiple sample utterance values with just a few comma separated  words.  
  

## Why use this tool:

-   Provide more consistency and variety in your sample utterance collection by defining their grammar rather than writing down one by one.
-   Don't care about duplicates and overlaps in utterances and slot values as this tool eliminates them.
  

### Here is a classic Example

**Intent Name:**  BookingCarIntent  
**Purpose:**  Use this set to train the model to book a cab in any way you ask.  
  
Sample utterances can be:  

Get me a cab  
Book us a cab  
Get me car  
Book me a vehicle  
.  
.  
.  
.  
.  
The list goes on…..

  
  

## **About**

By Entering a simple set of comma-separated keywords(preferably Synonymical), one can Generate Sample utterances and export to either JSON or a CSV and feed it to your data model. 
  
**Note:**  
-   There should be a minimum of 2 rows (Text-boxes).
-   Minimum 2 comma-separated words.
-   The text boxes should not end with a comma.
-   The text box should not start with a comma.
-   Text box can start with a Space followed by a comma.
-   You can have a blank space between commas. (this can be used to accept both book me a cab and also book me cab).

## Usage *(please refer to the video attached)*

   Start adding the keywords in the text boxes.
-   Click  _Generate Sample Utterances._
-   Export to CSV or JSON.

  


https://user-images.githubusercontent.com/17703864/129265945-c45c27c6-72a9-47d5-8cdd-6170e91f6459.mp4


  

## **Result**

From the above video, doing a simple math the above line can generate 2*4*2*2*4 = 128 unique dialogues. (Here we consider blank space even as they are also part of the generated utterances).  
  
Yes. you read it right  **128  unique**  dialogues that can be exported as CSV/JSON.

## **Note**
UI in Attached video is not part of the repo. It needs to be built as required.
