const path = require("path");
const { validTemplates } = require("./script");

const getTemplateDir = () => {
  const templateName = process.env.RN_TEMPLATE || validTemplates[0];  // Default to rnbare if not specified

  if (!validTemplates.includes(templateName)) {
    console.error(`Error: Invalid template specified. Only ${validTemplates.join(' or ')} are allowed.`);
    process.exit(1);
  }

  return path.join("templates", templateName, "template");
};

module.exports = {
  placeholderName: "ProjectName",
  templateDir: getTemplateDir(),
  postInitScript: "./script.js",
};