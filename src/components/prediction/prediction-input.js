import Label from "../label";
import SelectInput from "../select-input";

export default function PredictionInputs({ onSubmit, handleOnChange }) {

  return (
    <div className='px-4 py-8  lg:py-10 w-full lg:w-1/2'>
      <div className='flex w-full  flex-col items-center lg:flex-row lg:items-start'>
        <div
          className='w-full grid'>
          <div className='p-5 md:p-8 bg-light drop-shadow-xl rounded w-full'>
            <div className='w-full lg:flex lg:justify-between'>
              <div className='w-full lg:w-[47%]'>
                <div className='mb-5'>
                  <Label>Frequency (GHZ) *</Label>
                  <input
                    name="frequency"
                    // type='number'
                    className='px-4 h-12 flex 
                    items-center w-full rounded appearance-none 
                    transition duration-300 
                    ease-in-out text-heading text-sm focus:outline-none 
                    focus:ring-0 border border-border-base 
                    focus:border-accent'
                    onChange={handleOnChange}
                  />
                </div>
                <div className='mb-5'>
                  <Label>Vnom (V) *</Label>
                  <input
                    name="vnom"
                    // type='number'
                    className='px-4 h-12 flex 
                    items-center w-full rounded appearance-none 
                    transition duration-300 
                    ease-in-out text-heading text-sm focus:outline-none 
                    focus:ring-0 border border-border-base 
                    focus:border-accent'
                    onChange={handleOnChange}
                  />
                </div>
                <div className='mb-5'>
                  <Label>Power (mW) *</Label>
                  <input
                    name="power"
                    // type='number'
                    className='px-4 h-12 flex 
                    items-center w-full rounded appearance-none 
                    transition duration-300 
                    ease-in-out text-heading text-sm focus:outline-none 
                    focus:ring-0 border border-border-base 
                    focus:border-accent'
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className='w-full lg:w-[47%]'>
                <div className='mb-5'>
                  <Label>Area (um*2) *</Label>
                  <input
                    name="area"
                    // type='number'
                    className='px-4 h-12 flex 
                    items-center w-full rounded appearance-none 
                    transition duration-300 
                    ease-in-out text-heading text-sm focus:outline-none 
                    focus:ring-0 border border-border-base 
                    focus:border-accent'
                    onChange={handleOnChange}
                  />
                </div>
                <div className='mb-5'>
                  <Label>Design</Label>
                  <SelectInput
                    name='design'
                    handleOnChange={handleOnChange}
                    options={MEMTYPE}
                    defaultValue={undefined}
                  />
                </div>

                <div className='mb-5'>
                  <Label>Beol</Label>
                  <SelectInput
                    name='beol'
                    handleOnChange={handleOnChange}
                    options={PORTTYPE}
                    defaultValue={undefined}
                  />
                </div>
              </div>
            </div>
            <div className='text-end'>
              <button
                onClick={onSubmit}
                className='px-9 py-2 rounded-md bg-slate-800 text-orange-500'
              >
                Run
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Some Dummy Options Array
const MEMTYPE = [
  { id: 1, name: "RF" },
  { id: 2, name: "SRAM" },
];
const PORTTYPE = [
  { id: 1, name: "Single" },
  { id: 2, name: "Two" },
];

