import { useQuery } from "@tanstack/react-query";

export const useFetchData = () => {
  const fetchData = async () => {
    const res = await fetch("url");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: "product",
    queryFn: fetchData,
   
  });

  return { data, isLoading, isError, error, refetch };
};
