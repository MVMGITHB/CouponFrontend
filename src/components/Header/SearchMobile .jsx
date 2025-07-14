'use client';

import { useState, useCallback, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import _ from 'lodash';
import Link from 'next/link';

const SearchMobile = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setQuery('');
    setResults([]);
    setLoading(false);
  }, [pathname]);

  const debouncedSearch = useCallback(
    _.debounce(async (value) => {
      if (!value.trim()) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.couponsculture.com/api/coupon/search?q=${encodeURIComponent(value)}`
        );
        setResults(res.data || []);
      } catch (err) {
        console.error('Search error:', err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div className="md:hidden relative w-[200px] mt-2">
      {/* Search Bar */}
      <div className="flex items-center rounded-md bg-[#3b404b] px-1 py-1 border border-[#505866]">
        <Input
          type="text"
          placeholder="Search Products"
          value={query}
          onChange={handleInputChange}
          className="border-none bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:outline-none"
        />
        <Button
          size="icon"
          className="rounded-md bg-[#5e6ad2] hover:bg-[#4e5ac2] text-white"
        >
          <MdSearch className="text-xl" />
        </Button>
      </div>

      {/* Results Section */}
      <div className="absolute top-full left-0 w-full z-50">
        {loading && (
          <div className="mt-2 bg-[#2e323d] text-white p-2 rounded-md">Loading...</div>
        )}

        {!loading && results.length > 0 && (
          <div className="mt-2 bg-[#2e323d] text-white p-2 rounded-md space-y-2">
            {results.map((coupon) => (
              <Link key={coupon._id} href={`/${coupon?.category?.slug}`}>
                <div className="text-sm cursor-pointer border-b border-[#444] pb-1 hover:text-blue-400">
                  {coupon.title}
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && query.trim() !== '' && results.length === 0 && (
          <div className="mt-2 bg-[#2e323d] text-white p-2 rounded-md">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMobile;
