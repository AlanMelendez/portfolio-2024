// src/app/data/project.interface.ts
export interface Project {
    image: string;
    title: string;
    description: string;
    details: string;
    website: string;
    imgbg: string;
    // Añade otros campos opcionales si los usas, p. ej.:
    tabletMode?: number;
    phoneMode?: number;
    desktopMode?: any[];
    folderPictures?: string;
  }
  
  export interface ProjectCategory {
    title: string;
    iconsrc: string;
    projects: Project[];
  }
  