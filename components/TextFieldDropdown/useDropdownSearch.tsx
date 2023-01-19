import { useEffect, useState } from "react";
import axios from "axios";

interface IUseDropdownSearchProps {
  value: string;
  url: string;
}

interface IFetchInterface {
  value: string;
  url: string;
}

interface IFilterFetchData {
  value: string;
  data: [];
}

type Data = string[];


const filterFetchData = ({ value, data }: IFilterFetchData) => {
  return data.filter((item: any) => {
    if (item.name.toLowerCase() === value.toLowerCase()) {
      return [];
    }
    return item.name.toLowerCase().includes(value.toLocaleLowerCase());
  })
}

async function Fetch({ value, url }: IFetchInterface) {
  if (value === null || value === "") {
    return null
  }
  try {
    const response: any = await axios.get(url);
    const data: [] = await response.data;
    return filterFetchData({ value, data });
  } catch (err: any) {
    return err;
  }
}



const useDropdownSearch = ({ value, url }: IUseDropdownSearchProps) => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true)
    Fetch({ value, url })
      .then((result: Data) => {
        setData(result)
        setLoading(false)
      }).catch(err => {
        setError(err)
      })

  }, [value, url]);

  return { data, error, loading };
};

export default useDropdownSearch;
