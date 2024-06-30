// Employee
export interface ImageData {
  id: number;
  cdnUrl: string;
  displayOrder: number;
}

export interface ToolLanguagesData {
  id: number;
  toolLanguageResourceId: number;
  displayOrder: number;
  from: number;
  to: number;
  description: string;
  images: ImageData[];
}

export interface PositionData {
  id: number;
  positionResourceId: number;
  displayOrder: number;
  toolLanguages: ToolLanguagesData[];
}

export interface EmployeeData {
  id: number;
  name: string;
  allPortfolioImages?: string[];
  totalExperience?: number;
  allPositions?: string;
  fullDescription?: string;
  positions: PositionData[];
}

export interface EmployeePageData {
  totalItems: number;
  totalPages: number;
  pageItems: EmployeeData[];
}

// Position resources
export interface ToolLanguageData {
  toolLanguageResourceId: number;
  positionResourceId: number;
  name: string;
}

export interface PositionResourceData {
  positionResourceId: number;
  name: string;
  toolLanguageResources: ToolLanguageData[];
}
