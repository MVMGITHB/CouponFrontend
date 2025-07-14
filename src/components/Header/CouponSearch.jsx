'use client';

import { useState, useCallback,useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePathname } from "next/navigation";
import axios from 'axios';
import _ from 'lodash';
import Link from 'next/link';

const CouponSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const pathname = usePathname();
  
  useEffect(() => {
    setQuery("");
    setLoading(false)
    setResults([])
  }, [pathname]);

  // Debounced API call (only called after 300ms of no typing)
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
    debouncedSearch(value); // Debounced call
  };

  return (
    <div className=" hidden md:block relative w-[300px] ">
      {/* Search Bar */}
      <div className="hidden md:flex items-center w-full rounded-md bg-[#3b404b] px-2 py-1 border border-[#505866]">
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


      <div className='absolute top-12'>
        {loading && <div className="text-white mt-3">Loading...</div>}

      {!loading && results.length > 0 && (
        <div className="mt-3 bg-[#2e323d] text-white p-4 rounded-md space-y-3">
          {results.map((coupon) => (

            <Link href={`/${coupon?.category?.slug}`}>
             <div key={coupon._id} className=" cursor-pointer border-b border-[#444] pb-2">
              <p className="text-[12px] text-white">{coupon.title}</p>
            </div>
            </Link>
            
          ))}

          
        </div>
      )}

{!loading && query.trim() !== '' && results.length === 0 && (
  <div className="mt-3 bg-[#2e323d] text-white p-4 rounded-md space-y-3">
    No results found
  </div>
)}

      </div>
      {/* Results Section */}
     
    </div>
  );
};

export default CouponSearch;
