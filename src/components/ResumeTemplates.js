const templates = {
    template1: {
      id: 1,
      name: "Professional",
      styles: {
        container: "w-full h-full bg-white p-6",
        
        // Header with proper text wrapping
        header: "flex justify-between items-start mb-4",
        name: "text-2xl font-bold text-gray-900 break-words",
        contactInfo: "text-sm text-right whitespace-pre-line",
        
        separator: "h-0.5 bg-blue-600 my-3",
        
        // Main content with fixed heights and proper overflow handling
        mainContent: "grid grid-cols-[70%,30%] gap-6",
        
        // Left column sections with controlled spacing
        leftSection: "mb-6",
        sectionTitle: "uppercase text-blue-600 font-bold text-sm mb-2",
        summaryText: "text-sm whitespace-pre-wrap", // Handle line breaks properly
        
        // Experience items with proper spacing
        experienceItem: "mb-4",
        experienceHeader: "flex justify-between items-start",
        experienceTitle: "font-bold text-sm",
        experienceCompany: "text-sm",
        experienceDate: "text-sm text-gray-600 shrink-0 ml-2", // Prevent date from wrapping
        experienceDescription: "text-sm mt-1 whitespace-pre-wrap", // Handle line breaks in description
        
        // Right column with proper spacing
        rightSection: "mb-6",
        skillsList: "text-sm space-y-1"
      }
    }
  };
  
  export default templates;