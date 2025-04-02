#!/usr/bin/env node

export const validTemplates = ["rnbare", "expobare"];

if (!process.env.RN_TEMPLATE) {
  console.error('::Error: No template specified. Please set the RN_TEMPLATE environment variable.');
  process.exit(1);
} else if (!validTemplates.includes(process.env.RN_TEMPLATE)) {
  console.error(`::Error: Invalid template specified. Please use one of the following: ${validTemplates.join(' or ')}`);
  process.exit(1);
} else {
  console.log(`::Using template: ${process.env.RN_TEMPLATE}`);
}