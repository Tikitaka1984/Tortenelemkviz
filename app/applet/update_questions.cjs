const fs = require('fs');

const questionsFile = 'src/data/questions.ts';
let content = fs.readFileSync(questionsFile, 'utf8');

const updates = JSON.parse(fs.readFileSync('updates.json', 'utf8'));

// Find existing board
const boardRegex = /export const gameBoard: BoardCell\[\] = (\[[\s\S]*?\]);/;
const boardMatch = content.match(boardRegex);

if (boardMatch) {
  const existingBoard = eval(boardMatch[1]);
  
  updates.forEach(updateQ => {
    let found = false;
    for (const cell of existingBoard) {
      const qIndex = cell.questions.findIndex(q => q.id === updateQ.id);
      if (qIndex !== -1) {
        // Update the question
        cell.questions[qIndex] = { ...cell.questions[qIndex], ...updateQ };
        found = true;
        break;
      }
    }
    if (!found) {
      console.log(`Question ${updateQ.id} not found!`);
    }
  });

  const newBoardStr = JSON.stringify(existingBoard, null, 4);
  content = content.replace(boardMatch[1], newBoardStr);
  fs.writeFileSync(questionsFile, content);
  console.log('Successfully updated questions!');
} else {
  console.log('Could not find gameBoard in questions.ts');
}
