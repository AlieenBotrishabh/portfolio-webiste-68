import { useEffect, useState } from "react";
import { fetchResumeData } from "../lib/api.js";
import { resumeData as fallbackResumeData } from "../data/resumeData.js";

export function useResumeData() {
  // Start with local fallback data immediately — no blank screen ever
  const [resumeData, setResumeData] = useState(fallbackResumeData);
  const [isLoading, setIsLoading] = useState(false); // false = use local data by default

  useEffect(() => {
    let isMounted = true;

    // Try to fetch fresh data from the API, but never block the UI.
    // If it fails (timeout, network, serverless cold-start), we silently
    // keep the local fallback that was already set above.
    fetchResumeData()
      .then((response) => {
        if (isMounted && response?.resume) {
          setResumeData(response.resume);
        }
      })
      .catch(() => {
        // Silently keep the fallback — already set as initial state
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { resumeData, isLoading };
}