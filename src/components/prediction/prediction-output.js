
export default function PredictionOutput({ predictions }) {

  return (
    <div className='px-4 py-8 lg:py-10 w-full lg:w-1/2'>
      <div
        className='flex w-full  flex-col items-center lg:flex-row lg:items-start '>
        <div
          className='p-5 md:p-8 bg-light drop-shadow-xl rounded 
          w-full h-96'>
          <h3 className='text-xl font-medium text-gray-600'>Output:</h3>
          <div
            className='shadow-[inset_0px_3px_6px_rgba(0,0,0,0.6)] 
          shadow-gray-200 w-full h-64 mt-5'>
            {predictions.data && (
              <div className='p-5'>
                <p className=' text-body-dark font-semibold text-sm  mb-5'>
                  Here we get the selected inputs values, and they are:
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Area: {predictions?.data?.area}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Beol: {predictions?.data?.beol}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Design: {predictions?.data?.design}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Frequency: {predictions?.data?.frequency}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Power: {predictions?.data?.power}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Vnom: {predictions?.data?.vnom}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
