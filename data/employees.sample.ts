type EmployeeFeedback = {
  name: string;
  personality: string[];
  strengths: string[];
  weaknesses: string[];
  devGoals: string[];
  challenges: string[];
};

export const employees: EmployeeFeedback[] = [
  {
    "name": "Person A",
    "personality": ["Creative"],
    "strengths": [
      "Strong Engineer",
    ],
    "weaknesses": [
      "Business scoping can be improved",
    ],
    "devGoals": [
      "Finish a project milestone in the next year as the tech lead",
    ],
    "challenges": [
      "To follow"
    ]
  },
];

export default employees;
