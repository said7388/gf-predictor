import Label from "../label";
import SelectInput from "../select-input";

export default function PredictionInputs({ onSubmit, handleOnChange }) {

  return (
    <div className='px-4 py-8 lg:py-10 w-full lg:w-1/2'>
      <div className='flex w-full  flex-col items-center lg:flex-row lg:items-start'>
        <div
          className='w-full grid'>
          <div className='p-5 md:p-8 bg-light drop-shadow-xl rounded w-full'>
            <div className='w-full lg:flex lg:justify-between'>
              <div className='w-full lg:w-[47%]'>
                <div className='mb-5'>
                  <Label>Words</Label>
                  <SelectInput
                    name='words'
                    options={WORDS}
                    defaultValue={undefined}
                    handleOnChange={handleOnChange}
                  />
                </div>

                <div className='mb-5'>
                  <Label>Bits</Label>
                  <SelectInput
                    name='bits'
                    handleOnChange={handleOnChange}
                    options={BITS}
                    defaultValue={undefined}
                  />
                </div>

                <div className='mb-5'>
                  <Label>Comp</Label>
                  <SelectInput
                    name='comp'
                    handleOnChange={handleOnChange}
                    options={COMP}
                    defaultValue={undefined}
                  />
                </div>

                <div className='mb-5'>
                  <Label>Tech</Label>
                  <SelectInput
                    name='tech'
                    handleOnChange={handleOnChange}
                    options={TECH}
                    defaultValue={undefined}
                  />
                </div>

                <div className='mb-5'>
                  <Label>Type</Label>
                  <SelectInput
                    name='type'
                    handleOnChange={handleOnChange}
                    options={TYPE}
                    defaultValue={undefined}
                  />
                </div>
              </div>

              <div className='w-full lg:w-[47%]'>
                <div className='mb-5'>
                  <Label>Mem Type</Label>
                  <SelectInput
                    name='mem_type'
                    handleOnChange={handleOnChange}
                    options={MEMTYPE}
                    defaultValue={undefined}
                  />
                </div>

                <div className='mb-5'>
                  <Label>Port Type</Label>
                  <SelectInput
                    name='port_type'
                    handleOnChange={handleOnChange}
                    options={PORTTYPE}
                    defaultValue={undefined}
                  />
                </div>

                <div className='mb-5'>
                  <Label>Capacity(kb)</Label>
                  <SelectInput
                    name='capacity'
                    handleOnChange={handleOnChange}
                    options={CAPACITY}
                    defaultValue={undefined}
                  />
                </div>

                <div className='mb-5'>
                  <Label>VDDPE</Label>
                  <input
                    id="vddpe"
                    name="vddpe"
                    type='number'
                    className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent'
                    onChange={handleOnChange}
                  />
                </div>

                <div className='mb-5'>
                  <Label>VDDCE</Label>
                  <input
                    id="vddce"
                    name="vddce"
                    type='number'
                    className='px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent'
                    onChange={handleOnChange}
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
const COMP = [
  { id: 1, name: "ARM" },
  { id: 2, name: "ANPS" },
];
const TECH = [
  { id: 1, name: "12LPP" },
  { id: 2, name: "22FDX" },
];
const TYPE = [
  { id: 1, name: "rf_sp_rvt_mvt" },
  { id: 2, name: "sram_sp_rvt_mvt" },
  { id: 3, name: "rf_2p_rvt_mvt" },
];
const MEMTYPE = [
  { id: 1, name: "RF" },
  { id: 2, name: "SRAM" },
];
const PORTTYPE = [
  { id: 1, name: "Single" },
  { id: 2, name: "Two" },
];
const CAPACITY = [
  { id: 1, name: "18" },
  { id: 2, name: "2" },
  { id: 3, name: "9" },
];
const WORDS = [
  { id: 1, name: "512" },
  { id: 2, name: "256" },
  { id: 3, name: "128" },
  { id: 4, name: "64" },
];
const BITS = [
  { id: 1, name: "32" },
  { id: 2, name: "64" },
  { id: 3, name: "128" },
];
