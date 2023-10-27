# quiz_parser.py

import re


def parse_quiz_text(quiz_text):
    pattern = r"\*?\*?(\d+)\. (.+?)\*\*\s+ (.+?)\s+B\. (.+?)\s+C\. (.+?)\s+D\. (.+?)\s+The answer: ([A-D])\."
    matches = re.findall(pattern, quiz_text, re.DOTALL)

    questions_data = []
    for match in matches:
        (
            question_number,
            question_text,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer,
        ) = match
        question_data = {
            "question_number": question_number,
            "question_text": question_text.strip(),
            "options": [
                option_a.strip(),
                option_b.strip(),
                option_c.strip(),
                option_d.strip(),
            ],
            "correct_answer": correct_answer,
        }


        questions_data.append(question_data)
        
    return questions_data

