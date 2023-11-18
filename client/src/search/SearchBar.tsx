import React, { useRef, useState } from 'react'
import { FaAngleLeft, FaSearch, FaHistory, FaHotjar } from "react-icons/fa"

const SearchBar = () => {
    const [isFocused, setisFocused] = useState(false);
    const [fromSubmition, setfromSubmition] = useState(false);
    const [queryPhrase, setQueryPhrase] = useState<string>();
    const [popularSearches, setpopularSearches] = useState<string[]>(["ریموت در پارکینگ", "پایه نگهدارنده", "گوشی موبایل شیائومی ", "دکوری طرح"]);

    const [SearchHistory, setsetSearchHistory] = useState<string[]>(["جادستمالی", "لامپ خودرو", "جاکلیدی", "سطل زباله "]);


    //! how to blur background when
    const inputRef = useRef(null);
    const formRef = useRef(null);
    return (
        <div className='w-full h-full '>
            <div className="w-full h-full flex items-center justify-center ">
                {isFocused ? (
                    <form ref={formRef}>
                        <input
                            ref={inputRef}
                            placeholder="جستجو"
                            className="text-black w-[calc(600px)] h-[calc(50px)] outline-none text-right pr-[3rem] text-lg rounded-lg"
                            type="text"
                            // onFocus={() => setisFocused(!isFocused)}
                            // onFocusCapture={() => setisFocused(true)}
                            onChange={(e) => {
                                setQueryPhrase(e.target.value)
                            }}
                        />
                        <FaSearch className='absolute text-[#b1b0b0]  top-7 right-[calc(41.5rem)]  text-2xl cursor-pointer'
                            onClick={() => {

                            }}
                        />
                    </form>
                )
                    :
                    (<div className='flex flex-col border border-[1px] border-[#a3a0a0]'>

                        <form ref={formRef}>
                            <input
                                ref={inputRef}
                                placeholder="جستجو"
                                className="text-black w-[600px] h-[calc(50px)] outline-none text-right pr-[3rem] text-lg rounded-t-lg border border-b-2"
                                type="text"
                                onChange={(e) => {
                                    setQueryPhrase(e.target.value)
                                }}
                            />
                            <FaSearch className='absolute text-[#b1b0b0]  top-7 right-[31%]  text-2xl cursor-pointer'
                                onClick={() => {

                                }}
                            />
                        </form>
                        <div className="absolute top-[4rem] h-[200px] w-[600px] bg-white text-right z-50 rounded-b-lg flex flex-col p-5 gap-5">
                            <div className="flex flex-col gap-1 ">
                                <div className='flex flex-row-reverse'>
                                    <FaHistory className='text-2xl' />
                                    <h2 className="pr-3 text-lg">آخرین جستجوهای شما</h2>
                                </div>
                                <div className="flex justify-end gap-2">
                                    {SearchHistory.map(search => (
                                        <button className='flex cursor-pointer border borer-1 border-[#bfbdbd]  p-2 rounded-2xl '>
                                            <FaAngleLeft className='flex self-center' />
                                            {search}
                                        </button>
                                    ))}
                                </div>
                            </div>


                            <div className="flex flex-col gap-1">
                                <div className='flex flex-row-reverse'>
                                    <FaHotjar className='text-xl' />

                                    <h2 className="pr-3 text-lg">جستجوهای پرطرفدار</h2>
                                </div>
                                <div className="flex justify-end gap-2">
                                    {SearchHistory.map(search => (
                                        <button className='flex cursor-pointer border border-[0.5px] border-[#bfbdbd] p-2 rounded-2xl text-center'>
                                            <FaAngleLeft />
                                            {search}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default SearchBar
