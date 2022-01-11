import { useEffect, useState } from "preact/hooks";

const useBrowserLocation = () => {
  const [loading, setLoading] = useState(true);
  const [{ latitude, longitude }, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // return {
        //   data: {
        //     latitude: position.coords.latitude,
        //     longitude: position.coords.longitude,
        //   },
        //   loading: false,
        // };
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      });
    }
  });

  return { data: { latitude, longitude }, loading };
};
export default useBrowserLocation;
