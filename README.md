This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

## Note: Images don't show up on local environment

Due to the relative filepath on the production environment being different, images only show up in PROD, not local. I will be fixing this soon.

## Styling

Styling is done with Styled Components. In each component folder, add a *styled.js* file and place the styles in there.

## Admin Mode

To use admin mode, visit /signin and log in with correct admin credentials. This will then re-direct you to the landing page and you can select a borough that you wish to edit.<br />
Now you can click "Edit" on a scheme to make it editable. Make the changes necessary and then click "Save". This will push your changes live so be careful!

To add a new scheme, scroll to the bottom of the borough page and see the "Add Scheme" button. It will add a new row which you can edit in the same way as above. Please try to fill in the fields closely following the format of the pre-existing schemes for consistency, and use official GMCA/local authority information and links where possible. When you press Save, it will add it to the site.

Due to too much potential for error, there is no delete function. Schemes can only be deleted directly in the database, so don't add something if we don't need it!

You can Sign Out using the button in the footer.
