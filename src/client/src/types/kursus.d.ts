export interface Course {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface CourseFilter {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}