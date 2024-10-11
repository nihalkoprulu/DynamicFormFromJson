### Summary

The DynamicForm component dynamically generates a form based on a given configuration and allows users to modify the form's structure and data. It features tab-based navigation for updating form inputs or configuring the form layout.

### Key Functions

####  1.Tabs Navigation:

Switch between "Update Form" (input data) and "Form Configuration" (adjust form structure).

####  2.State Management:

`initialData:` Holds the original form structure.

`formData:` Editable form data.

`showOutput:` Toggles the display of the current form as JSON.

####  3.Form Editing:

`updateHandler:` Updates input values by matching the field’s path.

`saveForm:` Saves and displays the current form data.

`deleteField:` Removes fields from the form.

####  4.Form Configuration Editing:

Users can rename and remove fields. (Adding new fields and reordering fields will be added later)

####  5.Path Formatting:

`formatFieldPath:` Formats field labels into valid paths for the form.


### Steps to Run the Project

Follow the steps below to run the project on your local machine:

#### 1. Clone the Repository

Clone the project files to your local machine:

`git clone https://github.com/nihalkoprulu/Xtract-Task.git`

#### 2. Navigate to the Project Directory

Move into the cloned project folder:

`cd Xtract-Task`

#### 3.Install Required Dependencies

Install all the dependencies used in the project by running the following command:

`npm install`

#### 4.Start the Project

`npm start`

#### 5. View the Project in the Browser

Once the project starts, you can view the application by visiting the following URL in your browser:

`http://localhost:3000`
