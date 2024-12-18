# PT Solusi Karya Terdepan - Consultation Form

This project is a consultation form designed for **PT Solusi Karya Terdepan**, allowing users to submit their project requirements. Once the form is submitted, the details are sent via WhatsApp to the specified contact.

## Project Structure

### Files and Directories
- **index.html**: The main HTML file containing the structure of the web page.
- **styles.css**: The CSS file for styling the webpage.
- **script.js**: The JavaScript file for handling form submission and integrating with WhatsApp.

### Features
1. **Responsive Design**: The webpage is mobile-friendly and adapts to different screen sizes.
2. **WhatsApp Integration**: Automatically generates a message based on user input and opens it in WhatsApp.
3. **Validation**: Ensures that required fields are filled before submission.

## Usage

### Prerequisites
To use this project, ensure you have the following:
- A browser capable of running HTML, CSS, and JavaScript.
- Internet access to open the WhatsApp URL.

### Steps to Use
1. Open the `index.html` file in your browser.
2. Fill out the form with the required details:
   - **Name**: Your full name.
   - **Institution**: The name of your company or institution (optional).
   - **Order Type**: The type of service or product you require.
   - **Deadline**: The date by which you need the project completed.
   - **Description**: Additional details about your requirements.
3. Click the **Submit** button.
4. The form will open a WhatsApp chat with a pre-filled message containing your details.
5. Send the message to complete the consultation request.

## Customization

### Update Contact Number
To change the WhatsApp contact number:
1. Open `script.js`.
2. Locate the line:
   ```javascript
   const phone = "628979195660";
   ```
3. Replace `628979195660` with your desired WhatsApp number (include the country code without `+`).

### Modify Styles
To customize the appearance of the page:
1. Open `styles.css`.
2. Edit the styles as needed (e.g., change colors, fonts, or layout).

## License
This project is protected under copyright laws. Unauthorized reproduction, distribution, or modification without prior consent is prohibited. For inquiries about usage or licensing, please contact the project owner.

