
export default function PredictionOutput({ predictions }) {

  return (
    <div className='px-4 py-8 lg:py-10 w-full lg:w-1/2'>
      <div className='flex w-full  flex-col items-center lg:flex-row lg:items-start '>
        <div className='p-5 md:p-8 bg-light drop-shadow-xl rounded w-full min-h-[582px]'>
          <h3 className='text-xl font-medium text-gray-600'>Output:</h3>
          <div className='shadow-[inset_0px_3px_6px_rgba(0,0,0,0.6)] shadow-gray-200 w-full h-[420px] mt-5'>
            {predictions.data && (
              <div className='p-5'>
                <p className=' text-body-dark font-semibold text-sm  mb-5'>
                  Here we get the selected inputs values, and they are:
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  VDDPE: {predictions?.data?.vddpe}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  VDDCE: {predictions?.data?.vddce}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  COMP: {predictions?.data?.comp}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Tech: {predictions?.data?.tech}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Type: {predictions?.data?.type}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Mem Type: {predictions?.data?.mem_type}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Port Type: {predictions?.data?.port_type}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Capacity: {predictions?.data?.capacity}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Words: {predictions?.data?.words}
                </p>
                <p className=' text-body-dark font-semibold text-sm  mb-3'>
                  Bits: {predictions?.data?.bits}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
