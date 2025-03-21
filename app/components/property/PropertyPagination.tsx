
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import FadeIn from '@/components/animations/FadeIn';

interface PropertyPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const PropertyPagination: React.FC<PropertyPaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage
}) => {
  if (totalPages <= 1) return null;

  return (
    <FadeIn delay={400}>
      <div className="mt-12">
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(Math.max(currentPage - 1, 1));
                  }}
                />
              </PaginationItem>
            )}
            
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isWithinRange = 
                pageNumber === 1 || 
                pageNumber === totalPages || 
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);
              
              if (!isWithinRange) {
                return index === 1 || index === totalPages - 2 ? (
                  <PaginationItem key={index}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : null;
              }
              
              return (
                <PaginationItem key={index}>
                  <PaginationLink 
                    href="#" 
                    isActive={pageNumber === currentPage}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(pageNumber);
                    }}
                    className={pageNumber === currentPage ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(Math.min(currentPage + 1, totalPages));
                  }}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </FadeIn>
  );
};

export default PropertyPagination;
