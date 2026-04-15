const fs = require('fs');

const questionsFile = 'src/data/questions.ts';
let content = fs.readFileSync(questionsFile, 'utf8');

const newQuestionsData = JSON.parse(fs.readFileSync('new_questions.json', 'utf8'));

// Find existing categories
const catRegex = /export const gameCategories: Category\[\] = (\[[\s\S]*?\]);/;
const catMatch = content.match(catRegex);
let existingCategories = [];
if (catMatch) {
  existingCategories = eval(catMatch[1]);
}

// Find existing board
const boardRegex = /export const gameBoard: BoardCell\[\] = (\[[\s\S]*?\]);/;
const boardMatch = content.match(boardRegex);
let existingBoard = [];
if (boardMatch) {
  existingBoard = eval(boardMatch[1]);
}

if (catMatch && boardMatch) {
  const categoryName = "Magyar történelem a 19. században";
  let categoryId = "";
  const existingCat = existingCategories.find(c => c.name === categoryName);
  if (existingCat) {
    categoryId = existingCat.id;
  } else {
    categoryId = "cat" + (existingCategories.length + 1);
    existingCategories.push({ id: categoryId, name: categoryName });
  }

  newQuestionsData.forEach(group => {
    const points = group.value;
    let cell = existingBoard.find(c => c.categoryId === categoryId && c.points === points);
    if (!cell) {
      cell = { categoryId, points, questions: [] };
      existingBoard.push(cell);
    }

    group.questions.forEach(q => {
      // Map correctAnswer to correctAnswerIndex
      const correctIndex = q.options.indexOf(q.correctAnswer);
      const newQ = {
        id: q.id,
        topic: q.topic,
        questionType: q.questionType,
        difficulty: q.difficulty,
        question: q.question,
        options: q.options,
        correctAnswerIndex: correctIndex !== -1 ? correctIndex : 0,
        explanation: q.explanation
      };
      
      // Check if question already exists in cell
      const existingQIndex = cell.questions.findIndex(eq => eq.id === newQ.id);
      if (existingQIndex !== -1) {
        cell.questions[existingQIndex] = newQ;
      } else {
        cell.questions.push(newQ);
      }
    });
  });

  const newCatStr = JSON.stringify(existingCategories, null, 2);
  const newBoardStr = JSON.stringify(existingBoard, null, 4);

  content = content.replace(catMatch[1], newCatStr);
  content = content.replace(boardMatch[1], newBoardStr);

  fs.writeFileSync(questionsFile, content);
  console.log('Successfully added new questions!');
} else {
  console.log('Could not find gameCategories or gameBoard in questions.ts');
}
