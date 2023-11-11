export type Project = {
  title: string;
  link: string;
  isComingSoon?: boolean;
  description: string;
};

const projects: Project[] = [
  {
    title: "Personal Website",
    description: "A personal website to showcase my projects and skills.",
    link: "#",
  },
  {
    title: "Flip Coin KSA",
    description: "Two Persons can choose either to image or pick a number to determine the winner between them , By the Saudi version .",
    link: "https://sirabufaisal.github.io/website/flip/",
  },
  {
    title: "Todo Task Website",
    description: "A website to record all your tasks, and you can mark them as completed, Arabic version.",
    link: "https://sirabufaisal.github.io/website/3/"
  },
];

export default projects;
