import { useEffect, useState } from "react";
import { fetchResumeData } from "../lib/api.js";
import { resumeData as fallbackResumeData } from "../data/resumeData.js";

export function useResumeData() {
  const [resumeData, setResumeData] = useState(fallbackResumeData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchResumeData()
      .then((response) => {
        if (isMounted && response?.resume) {
          setResumeData(response.resume);
        }
      })
      .catch(() => {
        if (isMounted) {
          setResumeData(fallbackResumeData);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { resumeData, isLoading };
}