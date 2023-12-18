/**
 * 
 * Fairmount Stories API
 * Developed by Engagement Lab, 2023
 *
 * @author Johnny Richardson
 * 
 * This script appends a dropdown to every form response row in the container spreadsheet,
 * and creates conditional validation/formatting rules based on the current value of that dropdown.
 * 
 * @see https://script.google.com/u/2/home/projects/1SrXSFhOalRc8A_he4hcwEyCjHek8lPH3kg9vTWiTpUJeaPCZUYVw-DBR
 * ==========
 */ 
function AddDropdown() {
	const STR_APPROVED = "Approved";
	const STR_NOT_APPROVED = "Not Approved";

	const spreadsheet = SpreadsheetApp.getActiveSheet();
    // Get the last row (the response that was just submitted), and cell for the dropdown, and the entire row
	const lastRow = spreadsheet.getLastRow();
	const endCell = spreadsheet.getRange(`D${lastRow}`);
	const currentRow = spreadsheet.getRange(`A${lastRow}:D${lastRow}`);

    // Build the dropdown options
	const validation = SpreadsheetApp.newDataValidation()
		.requireValueInList([STR_APPROVED, STR_NOT_APPROVED], true)
		.setAllowInvalid(false)
		.setHelpText(
			"This column was created by a script and cannot be modified."
		)
		.build();

    // Create conditional formatting rules
	const ruleNotApproved = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied(`=$D$${lastRow}="${STR_NOT_APPROVED}"`)
		.setRanges([currentRow])
		.setBackground("#ebb4b4")
		.setFontColor("white")
		.build();

	const ruleApproved = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied(`=$D$${lastRow}="${STR_APPROVED}"`)
		.setRanges([currentRow])
		.setBackground("#c3ebb4")
		.build();

	let rules = spreadsheet.getConditionalFormatRules();
	rules.push(ruleNotApproved);
	rules.push(ruleApproved);

    // Set rules and defaults
	spreadsheet.setConditionalFormatRules(rules);
	endCell.protect();
	endCell.setDataValidation(validation);
	endCell.setValue(STR_NOT_APPROVED);
}
