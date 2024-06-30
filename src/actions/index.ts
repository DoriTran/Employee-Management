"use server";

import {
  EmployeeData,
  EmployeePageData,
  ImageData,
  PositionData,
  PositionResourceData,
  ToolLanguagesData,
} from "./types";
import { fakeEmployeesData, positionResources } from "./fake";

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

interface PositionMap {
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
  const formData = new FormData();

  formData.append("name", employee.name);
  employee.positions.forEach((position: any, positionIndex: any) => {
    formData.append(`positions[${positionIndex}][positionResourceId]`, position.positionResourceId.toString());
    formData.append(`positions[${positionIndex}][displayOrder]`, position.displayOrder.toString());

    position.toolLanguages.forEach((toolLanguage: any, toolLanguageIndex: any) => {
      formData.append(
        `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][toolLanguageResourceId]`,
        toolLanguage.toolLanguageResourceId.toString(),
      );
      formData.append(
        `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][displayOrder]`,
        toolLanguage.displayOrder.toString(),
      );
      formData.append(
        `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][from]`,
        toolLanguage.from.toString(),
      );
      formData.append(
        `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][to]`,
        toolLanguage.to.toString(),
      );
      formData.append(
        `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][description]`,
        toolLanguage.description,
      );

      toolLanguage.images.forEach((image: any, imageIndex: any) => {
        formData.append(
          `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][images][${imageIndex}][data]`,
          image.data,
        );
        formData.append(
          `positions[${positionIndex}][toolLanguages][${toolLanguageIndex}][images][${imageIndex}][displayOrder]`,
          image.displayOrder.toString(),
        );
      });
    });
  });

  const response = await fetch(`/api/employees`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to create employee: ${response.statusText}`);
  }

  const result = await response.json();

  if (result.statusCode !== 200) {
    throw new Error(`Failed to create employee: ${result.message}`);
  }
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
