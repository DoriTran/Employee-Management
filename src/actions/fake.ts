import { EmployeeData } from "./types";

// Fake employee data act as temporary data, only reset when server restart (generated from chatGPT by my prompts)
const fakeEmployeesData: EmployeeData[] = [
  {
    id: 1,
    name: "John Doe",
    positions: [
      {
        id: 1,
        positionResourceId: 1,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 1,
            displayOrder: 1,
            from: 2010,
            to: 2015,
            description: "Frontend Developer with JavaScript",
            images: [
              {
                id: 1,
                cdnUrl: "/profile.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        positionResourceId: 2,
        displayOrder: 2,
        toolLanguages: [
          {
            id: 2,
            toolLanguageResourceId: 6,
            displayOrder: 1,
            from: 2015,
            to: 2022,
            description: "Backend Developer with PHP",
            images: [
              {
                id: 1,
                cdnUrl: "/profile1.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 3,
            toolLanguageResourceId: 7,
            displayOrder: 2,
            from: 2018,
            to: 2023,
            description: "Python Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile2.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    positions: [
      {
        id: 1,
        positionResourceId: 1,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 1,
            displayOrder: 1,
            from: 2012,
            to: 2018,
            description: "Frontend Developer with ReactJS",
            images: [
              {
                id: 1,
                cdnUrl: "/profile3.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 2,
            displayOrder: 2,
            from: 2016,
            to: 2023,
            description: "React Native Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile4.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    positions: [
      {
        id: 1,
        positionResourceId: 2,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 6,
            displayOrder: 1,
            from: 2014,
            to: 2020,
            description: "Backend Developer with Python",
            images: [
              {
                id: 1,
                cdnUrl: "/profile5.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Emily Brown",
    positions: [
      {
        id: 1,
        positionResourceId: 3,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 14,
            displayOrder: 1,
            from: 2013,
            to: 2019,
            description: "UI/UX Designer with Adobe XD",
            images: [
              {
                id: 1,
                cdnUrl: "/profile6.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 15,
            displayOrder: 2,
            from: 2017,
            to: 2024,
            description: "Figma Designer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile7.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "David Wilson",
    positions: [
      {
        id: 1,
        positionResourceId: 1,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 3,
            displayOrder: 1,
            from: 2011,
            to: 2016,
            description: "Frontend Developer with VueJS",
            images: [
              {
                id: 1,
                cdnUrl: "/profile8.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Sarah Martinez",
    positions: [
      {
        id: 1,
        positionResourceId: 2,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 9,
            displayOrder: 1,
            from: 2015,
            to: 2021,
            description: "Java Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile9.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Daniel Garcia",
    positions: [
      {
        id: 1,
        positionResourceId: 1,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 4,
            displayOrder: 1,
            from: 2012,
            to: 2017,
            description: "Frontend Developer with AngularJS",
            images: [
              {
                id: 1,
                cdnUrl: "/profile10.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Olivia Lopez",
    positions: [
      {
        id: 1,
        positionResourceId: 3,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 16,
            displayOrder: 1,
            from: 2014,
            to: 2020,
            description: "Illustrator Designer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile11.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 17,
            displayOrder: 2,
            from: 2017,
            to: 2023,
            description: "InvisionStudio Designer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile12.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Ethan Thompson",
    positions: [
      {
        id: 1,
        positionResourceId: 2,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 8,
            displayOrder: 1,
            from: 2013,
            to: 2019,
            description: "Backend Developer with Ruby",
            images: [
              {
                id: 1,
                cdnUrl: "/profile13.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 10,
            displayOrder: 2,
            from: 2016,
            to: 2022,
            description: "Nodejs Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile14.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Isabella Scott",
    positions: [
      {
        id: 1,
        positionResourceId: 1,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 5,
            displayOrder: 1,
            from: 2010,
            to: 2016,
            description: "Frontend Developer with jQuery",
            images: [
              {
                id: 1,
                cdnUrl: "/profile15.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Mia Perez",
    positions: [
      {
        id: 1,
        positionResourceId: 2,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 11,
            displayOrder: 1,
            from: 2012,
            to: 2018,
            description: "C Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile16.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 12,
            displayOrder: 2,
            from: 2015,
            to: 2021,
            description: "C++ Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile17.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Lucas King",
    positions: [
      {
        id: 1,
        positionResourceId: 3,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 18,
            displayOrder: 1,
            from: 2013,
            to: 2019,
            description: "Photoshop Designer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile18.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 19,
            displayOrder: 2,
            from: 2016,
            to: 2022,
            description: "Sketch Designer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile19.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Alexander Rivera",
    positions: [
      {
        id: 1,
        positionResourceId: 1,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 4,
            displayOrder: 1,
            from: 2011,
            to: 2017,
            description: "Frontend Developer with AngularJS",
            images: [
              {
                id: 1,
                cdnUrl: "/profile20.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 14,
    name: "Sophia Howard",
    positions: [
      {
        id: 1,
        positionResourceId: 2,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 9,
            displayOrder: 1,
            from: 2014,
            to: 2020,
            description: "Java Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile21.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 10,
            displayOrder: 2,
            from: 2017,
            to: 2023,
            description: "Nodejs Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile22.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: "James Carter",
    positions: [
      {
        id: 1,
        positionResourceId: 3,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 14,
            displayOrder: 1,
            from: 2012,
            to: 2018,
            description: "UI/UX Designer with Adobe XD",
            images: [
              {
                id: 1,
                cdnUrl: "/profile23.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 15,
            displayOrder: 2,
            from: 2015,
            to: 2021,
            description: "Figma Designer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile24.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 16,
    name: "Ava Young",
    positions: [
      {
        id: 1,
        positionResourceId: 1,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 5,
            displayOrder: 1,
            from: 2011,
            to: 2017,
            description: "Frontend Developer with jQuery",
            images: [
              {
                id: 1,
                cdnUrl: "/profile25.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 17,
    name: "Benjamin Perez",
    positions: [
      {
        id: 1,
        positionResourceId: 2,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 11,
            displayOrder: 1,
            from: 2013,
            to: 2019,
            description: "C Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile26.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 12,
            displayOrder: 2,
            from: 2016,
            to: 2022,
            description: "C++ Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile27.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 18,
    name: "Scarlett Lee",
    positions: [
      {
        id: 1,
        positionResourceId: 3,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 18,
            displayOrder: 1,
            from: 2014,
            to: 2020,
            description: "Photoshop Designer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile28.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 19,
            displayOrder: 2,
            from: 2017,
            to: 2023,
            description: "Sketch Designer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile29.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 19,
    name: "Henry Hall",
    positions: [
      {
        id: 1,
        positionResourceId: 1,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 4,
            displayOrder: 1,
            from: 2011,
            to: 2017,
            description: "Frontend Developer with AngularJS",
            images: [
              {
                id: 1,
                cdnUrl: "/profile30.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 20,
    name: "Liam Lewis",
    positions: [
      {
        id: 1,
        positionResourceId: 2,
        displayOrder: 1,
        toolLanguages: [
          {
            id: 1,
            toolLanguageResourceId: 9,
            displayOrder: 1,
            from: 2014,
            to: 2020,
            description: "Java Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile31.png",
                displayOrder: 0,
              },
            ],
          },
          {
            id: 2,
            toolLanguageResourceId: 10,
            displayOrder: 2,
            from: 2017,
            to: 2023,
            description: "Nodejs Developer",
            images: [
              {
                id: 1,
                cdnUrl: "/profile32.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default fakeEmployeesData;
