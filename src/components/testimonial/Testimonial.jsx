import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

const Testimonial = () => {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="images/testinal.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">The products on this platform are amazing! I've never been so satisfied with my electronic purchases.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Happy Customer 1</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Tech Enthusiast</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="images/testinal1.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Excellent customer service and a wide range of electronic products. I highly recommend this platform!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Satisfied Shopper</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">IT Professional</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="images/testinal3.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">The user interface is intuitive, and the buying process is smooth. Will definitely come back for more!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Impressed Buyer</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Gadget Lover</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Testimonial