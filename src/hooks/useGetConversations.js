import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState();
  const [conversations, setConversations] = useState([]);
  //   const { setAuthUser } = useAuthContext();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        console.log(res);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        localStorage.removeItem("chat-app");
        // setAuthUser(null);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversations };
};

export default useGetConversation;
