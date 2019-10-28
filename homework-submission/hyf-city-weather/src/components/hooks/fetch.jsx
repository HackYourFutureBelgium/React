import  {useState, useEffect} from 'react';

export const useFetchWeatherData = (search) => {
  const [fetchResult, setFetchResult] = useState(null);
  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=36254bd57bf0ff2d00f95dcf2f4fed3e&units=metric`)
          const result = await response.json();
          if (result.cod === 200) setFetchResult(result);
          else throw result
        } catch (error) {
          setFetchResult({error: true})
        }
      }
      fetchData()
    }
  }, [search])
  return fetchResult;
}

