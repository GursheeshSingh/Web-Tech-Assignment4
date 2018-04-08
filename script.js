// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
var checkbox = document.getElementsByClassName("checkbox");
var question = new Array(false, false, false);
var selectedChoices = new Array(3);

const CHECKED_BOX_SRC = "images/checked.png";
const UNCHECKED_BOX_SRC = "images/unchecked.png";
const QUESTION_ONE = "one";
const QUESTION_TWO = "two";
const QUESTION_THREE = "three";

const SELECTED = true;
const NOT_SELECTED = false;

const ONE = 0;
const TWO = 1;
const THREE = 2;

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", function() {
        console.log("Check box clicked");

        if (isQuizOver()) {
            console.log("Quiz Over");
            return;
        }

        let selectedBox = i;
        let selectedParentDiv = checkbox[selectedBox].parentElement;
        let selectedBoxQuestion = selectedParentDiv.getAttribute(
            "data-question-id"
        );
        // let selectedChoice = selectedParentDiv.getAttribute("data-choice-id");

        console.log("Selected Choice Number = " + selectedBox);

        console.log("Selected Answers: " + question);
        console.log("Selected Choices: " + selectedChoices);
        console.log("Selected Question = " + selectedBoxQuestion);
        // console.log("Selected Choice = " + selectedChoice);

        if (selectedBoxQuestion === QUESTION_ONE) {

            if (question[ONE] === NOT_SELECTED) {
                selectedChoices[ONE] = selectedBox;
                question[ONE] = SELECTED;
            } else {
                if (selectedBox == selectedChoices[ONE]) {
                    question[ONE] = NOT_SELECTED;
                    selectedChoices[ONE] = null;
                } else {
                    let oldChoice = selectedChoices[ONE];
                    let oldCheckBox = checkbox[oldChoice];
                    oldCheckBox.src = UNCHECKED_BOX_SRC;
                    let oldCheckBoxParentDiv = oldCheckBox.parentElement;

                    //Changing Unselected box background-color
                    oldCheckBoxParentDiv.style.background = "#f4f4f4";

                    console.log("New Choice selected = " + selectedBox);
                    selectedChoices[ONE] = selectedBox;
                }
            }
        } else if (selectedBoxQuestion === QUESTION_TWO) {
            if (question[TWO] === NOT_SELECTED) {
                question[TWO] = SELECTED;
                selectedChoices[TWO] = selectedBox;
            } else {
                if (selectedBox == selectedChoices[TWO]) {
                    question[TWO] = NOT_SELECTED;
                    selectedChoices[TWO] = null;
                } else {
                    let oldChoice = selectedChoices[TWO];
                    let oldCheckBox = checkbox[oldChoice];
                    oldCheckBox.src = UNCHECKED_BOX_SRC;
                    let oldCheckBoxParentDiv = oldCheckBox.parentElement;

                    //Changing Unselected box background-color
                    oldCheckBoxParentDiv.style.background = "#f4f4f4";

                    console.log("New Choice selected = " + selectedBox);
                    selectedChoices[TWO] = selectedBox;
                }
            }
        } else if (selectedBoxQuestion === QUESTION_THREE) {
            if (question[THREE] === NOT_SELECTED) {
                question[THREE] = SELECTED;
                selectedChoices[THREE] = selectedBox;
            } else {
                if (selectedBox == selectedChoices[THREE]) {
                    question[THREE] = NOT_SELECTED;
                    selectedChoices[THREE] = null;
                } else {
                    let oldChoice = selectedChoices[THREE];
                    let oldCheckBox = checkbox[oldChoice];
                    oldCheckBox.src = UNCHECKED_BOX_SRC;
                    let oldCheckBoxParentDiv = oldCheckBox.parentElement;

                    //Changing Unselected box background-color
                    oldCheckBoxParentDiv.style.background = "#f4f4f4";

                    console.log("New Choice selected = " + selectedBox);
                    selectedChoices[THREE] = selectedBox;
                }
            }
        }

        console.log("Selected Choices updated: " + selectedChoices);
        console.log("Selected Answers updated: " + question);

        let checkBoxImgSrc = checkbox[selectedBox].getAttribute("src");
        // console.log('Img SRC = ' + imgSrc);

        if (checkBoxImgSrc === CHECKED_BOX_SRC) {
            // console.log('Change to unchecked');
            checkbox[selectedBox].src = UNCHECKED_BOX_SRC;

            //Changing Unselected box background-color
            selectedParentDiv.style.background = "#f4f4f4";

            //Changing other Boxes opacities
            for (let box = 0; box < checkbox.length; box++) {
                let parentDiv = checkbox[box].parentElement;
                let questionNumber = parentDiv.getAttribute("data-question-id");

                if (
                    box === selectedBox ||
                    selectedBoxQuestion != questionNumber
                ) {
                    continue;
                }

                parentDiv.style.opacity = 1;
            }
        } else if (checkBoxImgSrc === UNCHECKED_BOX_SRC) {
            // console.log('Change to checked');
            checkbox[selectedBox].src = CHECKED_BOX_SRC;

            //Changing Selected box background-color
            selectedParentDiv.style.background = "#cfe3ff";

            //Changing other Boxes opacities
            for (let box = 0; box < checkbox.length; box++) {
                let parentDiv = checkbox[box].parentElement;
                let questionNumber = parentDiv.getAttribute("data-question-id");

                if (selectedBoxQuestion != questionNumber) {
                    continue;
                } else if (box === selectedBox) {
                    parentDiv.style.opacity = 1;
                    continue;
                }

                parentDiv.style.opacity = 0.6;
            }
        }

        // console.log("New image " + checkbox[selectedBox].getAttribute("src"));
    });
}

function isQuizOver() {
    if (
        selectedChoices[ONE] != null &&
        selectedChoices[TWO] != null &&
        selectedChoices[THREE] != null
    ) {
        return true;
    }

    return false;
}

function resartQuiz(){
  // console.log("Restart Quiz!");
  resetOpacity();
  resetSelectedChoicesAppearence()
  resetChoices();
}

function resetOpacity(){
  for (let i = 0; i < checkbox.length; i++) {
    let parentDiv = checkbox[i].parentElement;
    parentDiv.style.opacity = 1;
  }
}

function resetSelectedChoicesAppearence(){

  for (let i = 0; i < selectedChoices.length; i++) {
    if(selectedChoices[i]!=null){
      checkbox[selectedChoices[i]].src = UNCHECKED_BOX_SRC;
      var parentDiv = checkbox[selectedChoices[i]].parentElement;
      parentDiv.style.background = "#f4f4f4";

    } 
  }
}

function resetChoices(){

  for (let i = 0; i < 3; i++) {
      selectedChoices[i] = null;
      question[i] = false;
  }

}
