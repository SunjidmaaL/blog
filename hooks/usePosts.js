import useSWR from 'swr';

export const usePosts = (id) => {
    const { data, error } = useSWR(`/api/posts`, 
    {initialData : {name: 'Сараа12' },
    //refreshInterval: 1, 
  });
  
    return {
      data,
      isLoading: !error && !data,
      error,
    }
  }