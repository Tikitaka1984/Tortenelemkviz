const fs = require('fs');
const file = './src/data/questions.ts';
let content = fs.readFileSync(file, 'utf8');

const newType = `export type QuestionItem = {
  id: string;
  topic?: string;
  category?: string;
  value?: number;
  questionType: QuestionType;
  difficulty: Difficulty;
  question: string;
  sourceText?: string;
  options: string[];
  correctAnswer?: string;
  correctAnswerIndex?: number;
  explanation: string;
  skillFocus?: string;
  oralExamLink?: string;
  isActive?: boolean;
  createdBy?: string;
  lastEdited?: string;
  notes?: string;
};`;

content = content.replace(/export type QuestionItem = \{[\s\S]+?\};/, newType);

const boardRegex = /export const gameBoard: BoardCell\[\] = (\[[\s\S]*?\]);\n/m;
const match = content.match(boardRegex);
if(match) {
   let board = eval(match[1]);
   board.forEach(cell => {
      cell.questions.forEach(q => {
         q.category = cell.categoryName;
         q.value = cell.points;
         if (q.correctAnswerIndex !== undefined && q.options) {
             q.correctAnswer = q.options[q.correctAnswerIndex];
         }
      });
   });
   // Format the JSON with 4 spaces to match previous format reasonably
   content = content.replace(match[1], JSON.stringify(board, null, 4));
} else {
   console.log("Could not match board");
}

fs.writeFileSync(file, content);
console.log("Migration complete.");
