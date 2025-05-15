"use client";
import { useState, useEffect } from "react";
import { CiTrash } from "react-icons/ci";

export default function Shorten() {
  const [url, setUrl] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [active, setActive] = useState(false);

  //   const handleActive = () => {
  //     setActive(!active);
  //   }
  // Load saved links from localStorage when component mounts
  useEffect(() => {
    const savedLinks = localStorage.getItem("shortenedLinks");
    if (savedLinks) {
      setShortenedLinks(JSON.parse(savedLinks));
    }
  }, []);

  // Save links to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  // Reset copied status after 2 seconds
  useEffect(() => {
    if (copiedIndex !== null) {
      const timer = setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedIndex]);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const shortenUrl = async () => {
    setError("");
    setActive(!active);

    if (!url.trim()) {
      setError("Please add a link");
      return;
    }

    if (!isValidUrl(url)) {
      setError("Please enter a valid URL");
      return;
    }

    setIsLoading(true);

    try {
      // Using TinyURL's API to shorten the link
      const tinyUrlEndpoint = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
        url
      )}`;

      //   const cleanUrlEndpoint = 'https://cleanuri.com/api/v1/shorten'

      const response = await fetch(tinyUrlEndpoint);
      //   const response = await fetch(cleanUrlEndpoint);

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const shortUrl = await response.text();

      const newLink = {
        original: url,
        shortened: shortUrl,
        timestamp: new Date().getTime(),
      };

      setShortenedLinks((prev) => [newLink, ...prev]);
      setUrl("");
    } catch (err) {
      setError("Failed to shorten link. Please try again.");
      console.error("Error shortening URL:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      shortenUrl();
    }
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedIndex(index);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const removeLink = (index) => {
    setShortenedLinks((prev) => prev.filter((_, i) => i !== index));
  };

  // Function to clear all links
  const clearAllLinks = () => {
    setShortenedLinks([]);
  };

  return (
    <div >
      <div className="px-6 md:px-14 pt-15 md:pt-8 lg:pt-15 lg:px-20 relative container mx-auto">
        <div className="bg-[#3b3054] py-2 lg:py-5 absolute -top-15 md:-top-10 lg:-top-16 mb-30 w-[88%] sm:w-[92%] md:w-[85%] lg:w-[84%] xl:w-[87%] 2xl:w-[88%] max-w-[1370px] rounded-md shorten">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 lg:gap-5 py-3 lg:py-5 px-3 lg:px-8">
            <div className="relative flex-grow w-full">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`w-full bg-white py-2 rounded-md px-5 text-[14px] lg:text-[15px] text-[#232127] outline-none focus:ring-teal-400 ${
                  error ? "border-2 border-red-500" : ""
                }`}
              />
              {error && (
                <p className="text-red-500 text-sm absolute -bottom-6 left-2">
                  {error}
                </p>
              )}
            </div>
            <button
              onClick={shortenUrl}
              disabled={isLoading}
              className="bg-[#2acfcf] text-white py-2 px-6 text-[14px] lg:text-[18px] rounded-md w-full md:w-[30%] lg:w-[20%] cursor-pointer hover:bg-[#9be3e3] transition duration-300 ease-in-out"
            >
              {isLoading ? "Shortening..." : "Shorten It!"}
            </button>
          </div>
        </div>

        {/* Display shortened links */}
        {shortenedLinks.length > 0 && (
          <div className="w-full space-y-2 static text-[14px] lg:text-[15px] ">
            <div className="flex justify-end items-center  my-2">
              <button
                onClick={clearAllLinks}
                className="bg-red-800 hover:bg-red-950 text-white text-sm py-1 px-3 rounded-md transition-colors duration-200"
              >
                Clear All
              </button>
            </div>

            {shortenedLinks.map((link, index) => (
              <div
                key={index}
                className="bg-white flex flex-col md:flex-row justify-between rounded-md shadow-md overflow-hidden"
              >
                <div className="py-2 px-3 md:px-4 flex items-center justify-between border-b-[#f0f1f6] border-b-2 md:border-b-0">
                  <p className="truncate max-w-full sm:max-w-md font-medium">
                    {link.original}
                  </p>
                </div>
                <div className="py-2 px-3 md:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-[#2acfcf] font-medium">{link.shortened}</p>
                  <button
                    onClick={() => copyToClipboard(link.shortened, index)}
                    className={`${
                      copiedIndex === index
                        ? "bg-[#35323e]"
                        : "bg-[#2acfcf] hover:bg-teal-500"
                    } text-white font-bold py-1 px-6 rounded-sm md:rounded-md transition-colors duration-200 min-w-20 text-center`}
                  >
                    {copiedIndex === index ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

{
  /* <button 
                  onClick={() => removeLink(index)}
                  className="text-red-500 hover:text-red-700 ml-2 sm:ml-4 p-1 self-end sm:self-center"
                  title="Remove link"
                >
                 <CiTrash className='text-[20px]' />
                </button> */
}
