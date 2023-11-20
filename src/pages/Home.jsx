import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="bg-main-dark-bg  px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <h3 className="mt-1 mb-5 text-4xl text-white font-bold tracking-tight md:text-6xl xl:text-6xl">
                                Intelligent and Adaptive Learning <br /> <span className="text-primary">Web Application for</span> <br />
                                <span className='green_gradient'> Kiswahili </span>
                            </h3>
                            <p className='text-white font-semibold mb-5'>
                                aitutor is harnessing the power of artificial intelligence (AI) is imperative for
                                creating innovative and effective learning tools. AITutor aims to
                                develop a cutting-edge web application that leverages AI technologies to enhance
                                language learning, focusing specifically on Kiswahili. The project integrates
                                Speech-to-Text (STT) and Text-to-Speech (TTS) capabilities, providing users with
                                a unique and immersive learning experience.
                            </p>

                            <input
                                value='Angalia michango'
                                type="submit"
                                className="w-[40%] max-md:w-[60%] bg-gradient-to-r from-teal-700 to-lime-600 text-white font-bold p-3 mt-4 rounded-lg"
                            />

                        </div>
                        <div className="mb-12 lg:mb-0">
                            <img src="https://plus.unsplash.com/premium_photo-1663100078216-2ff58616cf54?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWZyaWNhbiUyMHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D"
                                className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home