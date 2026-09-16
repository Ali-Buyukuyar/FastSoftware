export type ProjectCategory =
  | "Web Application"
  | "Desktop Application"
  | "Mobile Application"
  | "Excel VBA"
  | "C# / .NET"
  | "SQL / Data Analytics"
  | "Automation"
  | "Other";

export type ProjectStatus = "Yayında" | "Geliştiriliyor" | "Arşiv";

export interface ProjectFile {
  id: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  fileSizeLabel: string;
  description?: string;
}

export interface CodeFile {
  id: string;
  fileName: string;
  language: string;
  content: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  purpose: string;
  category: ProjectCategory;
  technologies: string[];
  status: ProjectStatus;
  featuredImage: string;
  images?: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  files?: ProjectFile[];
  codeFiles?: CodeFile[];
  sortOrder: number;
  isPublished: boolean;
}
