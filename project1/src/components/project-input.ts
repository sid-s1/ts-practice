/// <reference path = "base-component.ts" />
/// <reference path = "../decorators/autobind.ts" />
/// <reference path = "../util/validation.ts" />
/// <reference path = "../state/project-state.ts" />

namespace App {
    // Project input class
    export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
        titleInputElement: HTMLInputElement;
        descriptionInputElement: HTMLInputElement;
        peopleInputElement: HTMLInputElement;

        // selection and rough setup in the constructor, and then the insertion or fine tuning in separate methods

        constructor() {
            super("project-input","app",true,"user-input");

            // Because as soon as this class is instantiated, we want to create our form, we will do it right here in the constructor

            this.titleInputElement = this.element.querySelector("#title")! as HTMLInputElement;
            this.descriptionInputElement = this.element.querySelector("#description")! as HTMLInputElement;
            this.peopleInputElement = this.element.querySelector("#people")! as HTMLInputElement;

            // before we attach everything, we want to get access to the different inputs in that element/form; and we want to store them as properties in the class

            this.configure();
        }

        configure() {
            this.element.addEventListener("submit",this.submitHandler);
        }

        renderContent() {}

        private gatherUserInput(): [string, string, number] | void {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = this.peopleInputElement.value;

            const titleValidatable: Validatable = {
                value: enteredTitle,
                required: true
            };

            const desciptionValidatable: Validatable = {
                value: enteredDescription,
                required: true,
                minLength: 5
            };

            const peopleValidatable: Validatable = {
                value: enteredPeople,
                required: true,
                min: 2,
                max: 5
            };

            if(!validate(titleValidatable) || !validate(desciptionValidatable) || !validate(peopleValidatable)) {
                alert("Invalid input, please try again");
                return;
            }
            else {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
        }

        private clearInputs() {
            this.titleInputElement.value = "";
            this.descriptionInputElement.value = "";
            this.peopleInputElement.value = "";
        }

        @autobind
        private submitHandler(event: Event) {
            event.preventDefault(); // to prevent an HTTP request to be sent
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, description, people] = userInput;
                console.log(title, description, people);
                projectState.addProject(title, description, people);
                this.clearInputs();
            }
        }
    }
}