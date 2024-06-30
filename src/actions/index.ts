"use server";

import { EmployeeData, EmployeePageData, PositionResourceData } from "./types";
import fakeEmployeesData from "./fake";

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
  let filteredEmployees = [...fakeEmployeesData];
  if (search) {
    const searchTerm = search.toLowerCase();
    filteredEmployees = fakeEmployeesData.filter((employee) => employee.name.toLowerCase().includes(searchTerm));
  }

  const startIndex = (pageNumber - 1) * pageSize;
  const slicedEmployees = filteredEmployees.slice(startIndex, startIndex + pageSize);

  const response = {
    totalItems: slicedEmployees.length,
    totalPages: Math.ceil(filteredEmployees.length / pageSize),
    pageItems: slicedEmployees,
  };

  return response;
}

export async function getPositionResources(): Promise<PositionResourceData[]> {
  const response = await fetch(`/api/positionResources`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch position resources: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
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
