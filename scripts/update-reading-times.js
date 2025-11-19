#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Reading time calculation function (matches the lib version)
const calculateReadingTime = (text, wordsPerMinute = 200) => {
  if (!text || typeof text !== "string") {
    return "0 min";
  }
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
};

// Extract actual article text from JSX content by parsing the return statement
const extractArticleTextFromJSX = (jsxContent) => {
  // Find the return statement and extract content between <rp.Page> and </rp.Page>
  const pageMatch = jsxContent.match(/<rp\.Page[\s\S]*?>([\s\S]*?)<\/rp\.Page>/);
  
  if (!pageMatch) {
    return '';
  }

  let text = pageMatch[1]
    // Remove all JSX tags like <rp.h1>, <rp.p>, etc.
    .replace(/<rp\.\w+[^>]*>/g, '')
    .replace(/<\/rp\.\w+>/g, '')
    // Remove HTML/JSX attributes
    .replace(/\s+\w+\s*=\s*{[^}]*}/g, '')
    .replace(/\s+\w+\s*=\s*"[^"]*"/g, '')
    .replace(/\s+\w+\s*=\s*'[^']*'/g, '')
    // Remove JSX expressions in curly braces
    .replace(/{[^}]*}/g, '')
    // Remove link/URL content that's not part of text
    .replace(/href\s*=\s*"[^"]*"/g, '')
    // Clean up multiple spaces
    .replace(/\s+/g, ' ')
    // Remove leading/trailing whitespace
    .trim();
  
  return text;
};

// Main function to process all resource articles
const updateResourceArticles = () => {
  const resourceDir = path.join(
    __dirname,
    '../src/app/[locale]/resources/resource-articles'
  );

  // Get all Resource*.jsx files
  const files = fs.readdirSync(resourceDir)
    .filter(file => file.match(/^Resource\d+\.jsx$/))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });

  console.log(`Found ${files.length} resource articles to process\n`);

  files.forEach((file, index) => {
    const filePath = path.join(resourceDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract the current readTime value
    const readTimeMatch = content.match(/const readTime = "([^"]+)"/);
    const currentReadTime = readTimeMatch ? readTimeMatch[1] : null;

    // Extract article content from the JSX
    const articleContent = extractArticleTextFromJSX(content);
    
    if (!articleContent) {
      console.log(`✗ ${file} - Could not extract article content`);
      return;
    }

    // Calculate new reading time
    const newReadTime = calculateReadingTime(articleContent);

    // Step 1: Remove old articleContent variable and old readTime if they exist
    content = content.replace(
      /\n\/\/ Article content for reading time calculation\nconst articleContent = [\s\S]*?;\n\nconst readTime = calculateReadingTime\(articleContent\);/,
      ''
    );
    
    // Also remove the old inline format if present
    content = content.replace(
      /const readTime = `\n[\s\S]*?`;\n\nconst readTime = calculateReadingTime\(articleContent\);/,
      ''
    );

    // Step 2: Ensure we have the correct import
    if (!content.includes('import { calculateReadingTimeFromContent }')) {
      // Check if we're already using calculateReadingTime or need to switch
      const hasImport = content.includes('import { calculateReadingTime }');
      
      if (hasImport) {
        // Replace the old import
        content = content.replace(
          /import { calculateReadingTime } from "@\/lib\/readingTime";/,
          'import { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";'
        );
      } else {
        // Add the import after other imports
        const importMatch = content.match(/(import.*?from "next-intl\/server";)/);
        if (importMatch) {
          content = content.replace(
            importMatch[1],
            `${importMatch[1]}\nimport { calculateReadingTimeFromContent } from "@/lib/extractTextFromJSX";`
          );
        }
      }
    }

    // Step 3: Find where to insert the new articleContent (after date, before keywords)
    const insertPoint = content.match(/(const date = "[^"]+";)\n/);
    if (insertPoint) {
      const articleTexts = articleContent
        .split(/(?<=[.!?])\s+(?=[A-Z])/) // Split on sentence boundaries
        .filter(text => text.trim().length > 0)
        .map(text => `  "${text.trim()}",`)
        .join('\n');

      const newArticleContentBlock = `

// Article content for reading time calculation
const articleContent = [
${articleTexts}
];

`;

      content = content.replace(
        insertPoint[1],
        `${insertPoint[1]}${newArticleContentBlock}`
      );
    }

    // Step 4: Replace the hardcoded readTime with the new version
    content = content.replace(
      /const readTime = "[^"]+";/,
      `const readTime = calculateReadingTimeFromContent(articleContent);`
    );

    // Write the updated content back
    fs.writeFileSync(filePath, content, 'utf8');

    const status = currentReadTime === newReadTime ? '=' : '→';
    console.log(`✓ ${file} - ${currentReadTime} ${status} ${newReadTime}`);
  });

  console.log(`\n✅ All ${files.length} resource articles have been updated!`);
};

updateResourceArticles();
