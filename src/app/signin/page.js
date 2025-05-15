'use client';
import { useState, useEffect } from 'react';

export default function LinkShortener() {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [shortenedLinks, setShortenedLinks] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState(null);
  
    // Load saved links from localStorage when component mounts
    useEffect(() => {
      const savedLinks = localStorage.getItem('shortenedLinks');
      if (savedLinks) {
        setShortenedLinks(JSON.parse(savedLinks));
      }
    }, []);
  
    // Save links to localStorage whenever they change
    useEffect(() => {
      localStorage.setItem('shortenedLinks', JSON.stringify(shortenedLinks));
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
        setError('');
      
        if (!url.trim()) {
          setError('Please add a link');
          return;
        }
      
        if (!isValidUrl(url)) {
          setError('Please enter a valid URL');
          return;
        }
      
        setIsLoading(true);
      
        try {
          const response = await fetch(`https://tinyurl.com/api-create.php?url=?url=${encodeURIComponent(url)}`);
          const data = await response.json();
      
          if (response.ok && data.ok) {
            const shortLink = data.result.full_short_link;
            setShortenedUrl(shortLink);
            setShortenedLinks((prev) => [
              { original: url, shortened: shortLink },
              ...prev,
            ]);
            setUrl(''); // Clear input field
          } else {
            setError(data.error || 'Failed to shorten URL');
          }
        } catch (err) {
          console.error(err);
          setError('An error occurred');
        } finally {
          setIsLoading(false);
        }
      };
      
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        shortenUrl();
      }
    };
  
    const copyToClipboard = (text, index) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedIndex(index);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    };
  
    return (
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto p-4">
        {/* URL Input Section - Matches the dark purple background in mockups */}
        <div className="w-full bg-indigo-900 rounded-lg p-4 mb-6 shadow-md">
          <div className="relative">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Shorten a link here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`w-full py-3 px-4 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                    error ? 'border-2 border-red-500' : ''
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
                className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-75 shadow-md"
              >
                {isLoading ? 'Shortening...' : 'Shorten It!'}
              </button>
            </div>
          </div>
        </div>
  
        {/* Shortened Links Section - Matches the style in mockups */}
        {shortenedUrl.length > 0 && (
          <div className="w-full space-y-4">
            {shortenedLinks.map((link, index) => (
              <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between border-b sm:border-b-0">
                  <p className="text-gray-700 truncate max-w-full sm:max-w-md font-medium">{link.original}</p>
                </div>
                <div className="bg-gray-50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-teal-500 font-medium">{link.shortened}</p>
                  <button
                    onClick={() => copyToClipboard(link.shortened, index)}
                    className={`${
                      copiedIndex === index ? 'bg-indigo-900' : 'bg-teal-400 hover:bg-teal-500'
                    } text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 min-w-20 text-center`}
                  >
                    {copiedIndex === index ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }