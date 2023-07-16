markdown

# Recipe CRUD App

![Recipe App](https://raw.githubusercontent.com/gabrielsanchez/erddiagram/main/deliciousfoods.png)

## Description

This project is a Recipe tracking app that allows users to add, display, and delete recipes. The app is built using React and styled with CSS. It provides functionality to manage a list of recipes and showcases how to organize React components effectively.

## Features

- Add a new recipe with fields for name, cuisine, photo URL, ingredients, and preparation instructions.
- Display a list of recipes with details including name, cuisine, photo, ingredients, and preparation.
- Delete a recipe by clicking the delete button associated with each recipe.

## Installation

1. Clone the repository:

git clone <repository-url>

css


2. Navigate to the project directory:

cd recipe-crud-app

markdown


3. Install the dependencies:

npm install

markdown


4. Start the development server:

npm start

sql


5. Open your web browser and visit `http://localhost:3000` to view the app.

## Usage

- To create a new recipe, fill out the input fields for name, cuisine, photo URL, ingredients, and preparation instructions in the "Create Recipe" section. Click the "Create" button to add the recipe to the list.
- The list of recipes will be displayed in a table format. Each recipe will show the name, cuisine, photo, ingredients, and preparation instructions. You can scroll through the list and view the details.
- To delete a recipe, click the "Delete" button associated with the recipe you want to remove. The recipe will be deleted from the list.

## Styling

- The app follows styling instructions provided in the project. It uses the "Playfair Display SC" font for the header text and sets the size to 64px.
- The table layout is structured with appropriate column widths using nth-child CSS selectors.
- The rows in the table body have a zebra striping color pattern, alternating between colors to improve readability.
- The preparation and ingredients columns have scrollbars when the text content exceeds the available space. The content is wrapped inside `<p>` tags with the predefined "content_td" class.
- The images in the photo column are scaled down and set to 100% width using the "object-fit" property.

## Success Criteria

The project meets the following success criteria:

- Functionality:
- Users can create a recipe entry.
- Users can read the list of recipes. The new recipe is added to the end of the list of recipes.
- Users can delete a recipe.
- CSS is used to make the app look similar to the provided mockup.
- React Code Organization:
- The app uses multiple components that work together effectively.
- Recipe data is managed in the app state.
- General Code Organization:
- Code duplication is minimized.

Feel free to explore and enhance the app as per your require
