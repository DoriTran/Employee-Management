"use server";

import {
  EmployeeData,
  EmployeePageData,
  ImageData,
  PositionData,
  PositionResourceData,
  ToolLanguagesData,
} from "./types";
import { positionResources } from "./fake";

// Fake database
let fakeEmployeesData: EmployeeData[] = [
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
                cdnUrl: "/profile8.png",
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
                cdnUrl: "/profile11.png",
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
                cdnUrl: "/profile13.png",
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
                cdnUrl: "/profile16.png",
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
                cdnUrl: "/profile18.png",
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
                cdnUrl: "/profile11.png",
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
                cdnUrl: "/profile12.png",
                displayOrder: 0,
              },
            ],
          },
        ],
      },
    ],
  },
];

// Server action - API Implementations

export async function getEmployee(employeeId: number): Promise<EmployeeData> {
  if (!employeeId || Number.isNaN(Number(employeeId))) {
    throw new Error("Invalid or missing employee ID");
  }

  const response = await fetch(`/api/employees/${employeeId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch employee data: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
}

export async function getPositionResources(): Promise<PositionResourceData[]> {
  /* Code for real api calls if you interested */

  // const response = await fetch(`/api/positionResources`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // if (!response.ok) {
  //   throw new Error(`Failed to fetch position resources: ${response.statusText}`);
  // }

  // const data = await response.json();
  // return data.data;

  return positionResources;
}

function calculateTotalExperience(toolLanguages: ToolLanguagesData[]): number {
  return toolLanguages.reduce((accumulator: number, toolLanguage: ToolLanguagesData) => {
    const fromYear = toolLanguage.from;
    const toYear = toolLanguage.to;

    // Calculate experience (to - from) and add to accumulator
    if (fromYear && toYear && !Number.isNaN(fromYear) && !Number.isNaN(toYear)) {
      return accumulator + (toYear - fromYear);
    }
    return accumulator;
  }, 0);
}

export interface PositionMap {
  [key: number]: string;
}

export async function getEmployees(
  search: string,
  pageNumber: number,
  pageSize: number,
): Promise<EmployeePageData> {
  /* Code for real api calls if you interested */

  // const queryParams = new URLSearchParams({
  //   search,
  //   pageNumber: pageNumber.toString(),
  //   pageSize: pageSize.toString(),
  // });

  // const response = await fetch(`/api/employees?${queryParams.toString()}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // if (!response.ok) {
  //   throw new Error(`Failed to fetch employees: ${response.statusText}`);
  // }

  // const data = await response.json();
  // return data;

  /* Simulate delay */
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const fetchedPositionResources = await getPositionResources();
  const positionById: PositionMap = fetchedPositionResources.reduce((acc: PositionMap, position) => {
    acc[position.positionResourceId] = position.name;
    return acc;
  }, {});

  let sortedEmployees = [...fakeEmployeesData];

  // Sort employees by total experience (descending)
  sortedEmployees.sort((a, b) => {
    const experienceA = calculateTotalExperience(a.positions.flatMap((position) => position.toolLanguages));
    const experienceB = calculateTotalExperience(b.positions.flatMap((position) => position.toolLanguages));
    a.totalExperience = experienceA;
    b.totalExperience = experienceB;
    return experienceB - experienceA;
  });

  // Search in the sorted employees
  if (search) {
    const searchTerm = search.toLowerCase();
    sortedEmployees = sortedEmployees.filter((employee) => employee.name.toLowerCase().includes(searchTerm));
  }

  // Sliced the sorted employees
  const startIndex = (pageNumber - 1) * pageSize;
  const slicedEmployees = sortedEmployees.slice(startIndex, startIndex + pageSize);

  // Add extra attribute to those employees
  const saltedEmployees = [...slicedEmployees].map((eachEmployee: EmployeeData) => {
    const { positions } = eachEmployee;
    const allToolLanguages = positions.map((eachPosition: PositionData) => eachPosition.toolLanguages).flat();

    return {
      ...eachEmployee,
      allPortfolioImages: allToolLanguages
        .map((eachToolLanguage: ToolLanguagesData) => eachToolLanguage.images)
        .flat()
        .map((eachImage: ImageData) => eachImage.cdnUrl),
      allPositions: positions.reduce(
        (accumulator: string, eachPosition: PositionData) =>
          `${accumulator}${accumulator.length !== 0 ? " & " : ""}` +
          `${positionById[eachPosition.positionResourceId] || ""}`,
        "",
      ),
      fullDescription: allToolLanguages.reduce((accumulator: string, toolLanguage: ToolLanguagesData) => {
        return `${accumulator}${accumulator.length !== 0 ? ", " : ""}${toolLanguage.description}`;
      }, ""),
    };
  });

  const response = {
    totalItems: slicedEmployees.length,
    totalPages: Math.ceil(sortedEmployees.length / pageSize),
    pageItems: saltedEmployees,
  };

  return response;
}

export async function createEmployee(employee: any): Promise<void> {
  // const formData = new FormData();

  // formData.append("name", employee.name);
  // employee.positions.forEach((position: any, positionIndex: any) => {
  //   formData.append(`positions[${positionIndex}][positionResourceId]`, position.positionResourceId.toString());
  //   formData.append(`positions[${positionIndex}][displayOrder]`, position.displayOrder.toString());

  //   position.toolLanguages.forEach((toolLanguage: any, toolLanguageIndex: any) => {
  //     formData.append(
  //       `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][toolLanguageResourceId]`,
  //       toolLanguage.toolLanguageResourceId.toString(),
  //     );
  //     formData.append(
  //       `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][displayOrder]`,
  //       toolLanguage.displayOrder.toString(),
  //     );
  //     formData.append(
  //       `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][from]`,
  //       toolLanguage.from.toString(),
  //     );
  //     formData.append(
  //       `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][to]`,
  //       toolLanguage.to.toString(),
  //     );
  //     formData.append(
  //       `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][description]`,
  //       toolLanguage.description,
  //     );

  //     toolLanguage.images.forEach((image: any, imageIndex: any) => {
  //       formData.append(
  //         `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][images][${imageIndex}][data]`,
  //         image.data,
  //       );
  //       formData.append(
  // eslint-disable-next-line max-len
  //         `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][images][${imageIndex}][displayOrder]`,
  //         image.displayOrder.toString(),
  //       );
  //     });
  //   });
  // });

  // const response = await fetch(`/api/employees`, {
  //   method: "POST",
  //   body: formData,
  // });

  // if (!response.ok) {
  //   throw new Error(`Failed to create employee: ${response.statusText}`);
  // }

  // const result = await response.json();

  // if (result.statusCode !== 200) {
  //   throw new Error(`Failed to create employee: ${result.message}`);
  // }

  // Fake database with no api implementation
  fakeEmployeesData = [...fakeEmployeesData, employee];
}

export async function updateEmployee(employeeId: number, employeeData: any): Promise<void> {
  const formData = new FormData();

  formData.append("name", employeeData.name);
  employeeData.positions.forEach((position: any) => {
    formData.append(`positions[${position.id}][id]`, position.id.toString());
    formData.append(`positions[${position.id}][positionResourceId]`, position.positionResourceId.toString());
    formData.append(`positions[${position.id}][displayOrder]`, position.displayOrder.toString());

    position.toolLanguages.forEach((toolLanguage: any) => {
      formData.append(
        `positions[${position.id}][toolLanguages][${toolLanguage.id}][id]`,
        toolLanguage.id.toString(),
      );
      formData.append(
        `positions[${position.id}][toolLanguages][${toolLanguage.id}][toolLanguageResourceId]`,
        toolLanguage.toolLanguageResourceId.toString(),
      );
      formData.append(
        `positions[${position.id}][toolLanguages][${toolLanguage.id}][displayOrder]`,
        toolLanguage.displayOrder.toString(),
      );
      formData.append(
        `positions[${position.id}][toolLanguages][${toolLanguage.id}][from]`,
        toolLanguage.from.toString(),
      );
      formData.append(
        `positions[${position.id}][toolLanguages][${toolLanguage.id}][to]`,
        toolLanguage.to.toString(),
      );
      formData.append(
        `positions[${position.id}][toolLanguages][${toolLanguage.id}][description]`,
        toolLanguage.description,
      );

      toolLanguage.images.forEach((image: any, imageIndex: number) => {
        formData.append(
          `positions[${position.id}][toolLanguages][${toolLanguage.id}][images][${imageIndex}][id]`,
          image.id.toString(),
        );
        formData.append(
          `positions[${position.id}][toolLanguages][${toolLanguage.id}][images][${imageIndex}][data]`,
          image.data,
        );
        formData.append(
          `positions[${position.id}][toolLanguages][${toolLanguage.id}][images][${imageIndex}][displayOrder]`,
          image.displayOrder.toString(),
        );
      });
    });
  });

  const response = await fetch(`/api/employees/${employeeId}`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to update employee: ${response.statusText}`);
  }

  const result = await response.json();

  if (result.statusCode !== 200) {
    throw new Error(`Failed to update employee: ${result.message}`);
  }
}

export async function deleteEmployee(employeeId: number): Promise<void> {
  const response = await fetch(`/api/employees/${employeeId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete employee: ${response.statusText}`);
  }

  const result = await response.json();

  if (result.statusCode !== 200) {
    throw new Error(`Failed to delete employee: ${result.message}`);
  }
}
