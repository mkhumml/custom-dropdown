import { useEffect, useState } from "react";
import axios from "axios";

interface IUseDropdownSearchProps {
  state: string | null;
}

interface IUseDropdownSearchStateProps {
  state: string;
}

const useDropdownSearch = ({ state }: IUseDropdownSearchProps) => {
  const [data, setData] = useState<IUseDropdownSearchStateProps[] | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response: any = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const responseData: IUseDropdownSearchStateProps[] = response.data;

        if (responseData) {
          if (state !== null && state !== "") {
            setData(
              responseData.filter((item: any) => {
                if (item.name.toLowerCase() === state.toLowerCase()) {
                  return null;
                } else {
                  return item.name.toLowerCase().includes(state.toLocaleLowerCase());
                }
              })
            );
          } else {
            setData(null);
          }
        }
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [state]);

  return { data, error, loading };
};

export default useDropdownSearch;
