export type AdResponse = {
  data: {
    docs: any[];
    nextPage: number;
    prevPage: number;
    totalPages: number;
    totalDocs: number;
    hasNextPage: boolean;
  };
};
