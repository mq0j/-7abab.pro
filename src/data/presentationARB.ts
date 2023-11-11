type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "",
  title: "آهلا انا محمد القحطاني 👋",
  description:
    "آهلا *انا طالب علوم حاسب الالي* , أجيد العديد وأهتم ببعض لغات البرمجة , بالحقيقة *أهتم بجميع مايخص التقنية* , ومهتم بالعاب الفيديو بشكل كبير .",
    socials: [
    {
      label: "تويتر",
      link: "https://twitter.com/20_h",
    },
    {
      label: "بينتو",
      link: "https://bento.me/qht",
    },
    {
      label: "قيت هب",
      link: "https://github.com/mq0j",
    },
  ],

  
};

export default presentation;



