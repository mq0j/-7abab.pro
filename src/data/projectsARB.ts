export type Project = {
  title: string;
  link: string;
  isComingSoon?: boolean;
  description: string;
};

const projects: Project[] = [
  {
    title: "موقع شخصي",
    description: "موقع شخصي لأستعراض المشاريع والمهارات الخاصة بي .",
    link: "#",
  },
  {
    title: "قرعة بالعملة السعودية",
    description: "شخصان يمكنهما اختيار إما الرسم أو اختيار رقم لتحديد الفائز بينهما بنسخة المملكة العربية السعودية .",
    link: "https://sirabufaisal.github.io/website/flip/",
  },
  {
    title: "موقع لتسجيل المهام",
    description: "موقع لتسجيل جميع المهام الخاصة بك وبأمكانك وضع تم أكمال المهمة .",
    link: "https://sirabufaisal.github.io/website/3/"
  },
];

export default projects;
