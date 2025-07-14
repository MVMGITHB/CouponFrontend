export const Fashion = ({images}) => {
  return (
   <div className="flex flex-col sm:flex-row  items-center justify-center sm:justify-between pt-10 md:pt-10 gap-[20px] p-1 md:p-4">
  <div className=" hidden md:block w-full sm:w-[300px] rounded-lg shadow-md overflow-hidden">
    <img 
      src={`${images?.image1}`}
      alt="Fashion" 
      className="w-full h-[200px] object-cover rounded-lg"
    />
  </div>

  <div className="w-full sm:w-[400px] rounded-lg shadow-md overflow-hidden">
    <img 
            src={`${images?.image2}`}
      alt="Fashion" 
      className="w-full h-[200px] object-cover rounded-lg"
    />
  </div>

  <div className="hidden md:block w-full sm:w-[500px] rounded-lg shadow-md overflow-hidden">
    <img 
            src={`${images?.image3}`}
      alt="Fashion" 
      className="w-full h-[200px] object-cover rounded-lg"
    />
  </div>
</div>

  );
};
