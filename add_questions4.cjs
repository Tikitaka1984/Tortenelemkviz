const fs = require('fs');

const questionsFile = 'src/data/questions.ts';
let content = fs.readFileSync(questionsFile, 'utf8');

const outputData = JSON.parse(fs.readFileSync('output.json', 'utf8'));
const newCategories = outputData.categories;
const newBoard = outputData.board;

// Find existing categories
const categoriesRegex = /export const gameCategories: Category\[\] = (\[[\s\S]*?\]);/;
const categoriesMatch = content.match(categoriesRegex);

if (categoriesMatch) {
  const existingCategories = eval(categoriesMatch[1]);
  
  // Find highest cat ID
  let maxCatId = 0;
  existingCategories.forEach(c => {
    if (c.id.startsWith('cat')) {
      const num = parseInt(c.id.replace('cat', ''));
      if (num > maxCatId) maxCatId = num;
    }
  });

  // Map new category IDs to actual new IDs
  const catIdMap = {};
  newCategories.forEach(c => {
    maxCatId++;
    const newId = 'cat' + maxCatId;
    catIdMap[c.id] = newId;
    c.id = newId;
    existingCategories.push(c);
  });

  // Update board with new category IDs
  newBoard.forEach(cell => {
    cell.categoryId = catIdMap[cell.categoryId];
  });

  // Replace categories in content
  const newCategoriesStr = JSON.stringify(existingCategories, null, 2);
  content = content.replace(categoriesMatch[1], newCategoriesStr);
}

// Find existing board
const boardRegex = /export const gameBoard: BoardCell\[\] = (\[[\s\S]*?\]);/;
const boardMatch = content.match(boardRegex);

if (boardMatch) {
  const existingBoard = eval(boardMatch[1]);
  
  newBoard.forEach(newCell => {
    const existingCell = existingBoard.find(c => c.categoryId === newCell.categoryId && c.points === newCell.points);
    if (existingCell) {
      existingCell.questions.push(...newCell.questions);
    } else {
      existingBoard.push(newCell);
    }
  });

  const newBoardStr = JSON.stringify(existingBoard, null, 4);
  content = content.replace(boardMatch[1], newBoardStr);
}

fs.writeFileSync(questionsFile, content);
console.log('Successfully added new questions!');
