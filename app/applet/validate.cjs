const fs = require('fs');

const questionsFile = 'src/data/questions.ts';
let content = fs.readFileSync(questionsFile, 'utf8');

const boardRegex = /export const gameBoard: BoardCell\[\] = (\[[\s\S]*?\]);/;
const boardMatch = content.match(boardRegex);
let board = [];
if (boardMatch) {
  board = eval(boardMatch[1]);
}

let answerCounts = [0, 0, 0, 0];
let problems = 0;
let lastAnswer = -1;
let currentStreak = 0;

let allQuestions = [];
board.forEach(cell => {
  if (!cell) return;
  cell.questions.forEach(q => allQuestions.push({ cell, q }));
});

allQuestions.forEach(({ cell, q }) => {
    answerCounts[q.correctAnswerIndex]++;
    
    if (q.correctAnswerIndex === lastAnswer) {
        currentStreak++;
        if (currentStreak > 2) {
            console.log(`STREAK PROBLEM: cell ${cell.categoryId}, question ${q.id}`);
            problems++;
        }
    } else {
        currentStreak = 1;
        lastAnswer = q.correctAnswerIndex;
    }
    
    let lengths = q.options.map(o => (o || "").length);
    let maxLen = Math.max(...lengths);
    let minLen = Math.min(...lengths);
    if (cell.points >= 400 && (maxLen - minLen) > 30) {
        console.log(`LENGTH IMBALANCE: cell ${cell.categoryId}, question ${q.id}, lengths: ${lengths}`);
        problems++;
    }
    
    if (cell.points === 500 && !['comparison', 'cause_effect', 'korszakjellemzés'].includes(q.questionType)) {
        console.log(`TYPE PROBLEM: 500 point question has type ${q.questionType}`);
        problems++;
    }
});

console.log("Validation complete.");
console.log("Distribution:", answerCounts);
console.log("Problems found:", problems);
