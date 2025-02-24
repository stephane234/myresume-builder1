const templates = {
  template1: {
    id: 1,
    name: "Professional",
    styles: {
      // A4 container
      container: "w-[210mm] h-[297mm] bg-white mx-auto p-[20mm] overflow-hidden",
      
      // Header section
      header: "flex justify-between items-start mb-2",
      name: "text-xl font-bold text-gray-900",
      contactInfo: "text-xs text-right",
      
      separator: "h-0.5 bg-blue-600 my-2",
      
      // Main content - adjusted to remove extra space
      mainContent: "grid grid-cols-[70%,30%] gap-4",
      
      // Left column - tighter spacing
      leftSection: "mb-2 last:mb-0", // Removed extra margin from last section
      sectionTitle: "uppercase text-blue-600 font-bold text-xs mb-1",
      summaryText: "text-xs leading-tight",
      
      // Experience items - compact
      // Inside the styles object
experienceItem: "mb-2 last:mb-0",
experienceHeader: "flex justify-between items-start",
experienceTitle: "font-bold text-xs",
experienceCompany: "text-xs text-gray-600", // Style for both company and location
experienceDate: "text-xs text-gray-600 shrink-0 ml-2",
experienceDescription: "text-xs mt-1 leading-tight",
      
      // Education section - adjusted spacing
      educationItem: "mb-1 last:mb-0", // Tighter spacing for education items
      educationTitle: "font-bold text-xs",
      educationDetails: "text-xs text-gray-600",
      
      // Right column
      rightSection: "mb-2 last:mb-0",
      skillsList: "text-xs space-y-0.5" // Reduced spacing between items
    }
  }
};

export default templates;