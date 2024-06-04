import { useEffect, useState } from "react";

const useManu = () => {
  const [manu, setManu] = useState([]);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    fetch("http://localhost:5000/manu")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setManu(data)
      });
  }, []);
  return [manu,loading]
};

export default useManu;
