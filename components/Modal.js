import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Modal() {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#1F1F1F] px-6 pt-5 pb-4 text-left shadow-xl transition-all w-[800px]">
                                <div className="sm:flex sm:items-start pl-6 pt-4">
                                    <h1 className='text-xl font-semibold '>Snibble</h1>
                                </div>

                                <div className='flex'>

                                    <div className="sm:flex  flex-col w-[70%] px-6 pt-2">
                                        <p className=''>I founded Snibble which is a social app for finding the best restaurant dishes of the city recommended by people you trust such as friends, chefs and food experts. This solves the problem of the lack of trust with the current restaurant review platforms and focusses on specific dishes. It is used by 600+ people in Amsterdam. <span><a className='text-primary' href='www.snibble.co' target="_blank" rel="noopener" >www.snibble.co</a></span></p>
                                        <p className='pt-2'>Working with the following technologies:</p>
                                        <ul>
                                            <li>React Native</li>
                                            <li>Firebase (Firestore, Auth, Storage)</li>
                                            <li>React Native</li>
                                            <li>React Native</li>
                                        </ul>
                                    </div>

                                    <Image src="/yuval.jpg" width={200} height={200} className='' />


                                </div>




                                <div className="mt-5 sm:mt-4  sm:flex sm:pl-4">

                                    <button
                                        type="button"
                                        className="mt-3 inline-flex  justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#00615B] hover:text-white transition ease-in-out delay-150 hover:scale-95 duration-300 focus:outline-none focus:ring-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}